import {
  execPromise,
  Auto,
  IPlugin,
  getCurrentBranch,
  DEFAULT_PRERELEASE_BRANCHES,
  determineNextVersion,
} from "@auto-it/core";
import UploadAssetsPlugins from "@auto-it/upload-assets";
import * as path from "path";
import * as glob from "fast-glob";
import * as fs from "fs";
import * as semver from "semver";
import * as t from "io-ts";

const pluginOptions = t.partial({
  /** The directory with the plugin's distribution files  */
  dir: t.string,
});

export type IObsidianPluginOptions = t.TypeOf<typeof pluginOptions>;

export default class ObsidianPlugin implements IPlugin {
  name = "obsidian";

  /** Path to the style.css for the plugin */
  private readonly styles?: string;
  /** Path to the main.js for the plugin */
  private readonly main: string;
  /** Path to the manifest.json for the plugin */
  private readonly manifest: string;
  /** Path to the plugin-name.zip for manual installs of the plugin */
  private readonly zip?: string;

  /** Initialize the plugin with it's options */
  constructor({dir = process.cwd()}: IObsidianPluginOptions = {}) {
    this.styles = path.join(dir, "style.css");
    this.main = path.join(dir, "main.js");
    this.main = path.join(dir, "manifest.json");
    this.zip = glob.sync(path.join(dir, "*.zip"))[0];
  }

  /** Tap into auto plugin points. */
  apply(auto: Auto) {
    auto.hooks.modifyConfig.tap(this.name, (config) => ({
      ...config,
      noVersionPrefix: true,
    }));

    auto.hooks.getPreviousVersion.tapPromise(this.name, async () => {
      if (!auto.git) {
        throw new Error(
          "Can't calculate previous version without Git initialized!"
        );
      }

      const manifestPath = path.join(__dirname, "../manifest.json");
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

      return manifest.version;
    });

    auto.hooks.beforeShipIt.tapPromise(this.name, async () => {
      if (!fs.existsSync(this.main)) {
        auto.logger.log.console.error(`Could not find file "${this.main}"`);
        process.exit(1);
      }

      if (!fs.existsSync(this.manifest)) {
        auto.logger.log.console.error(`Could not find file "${this.main}"`);
        process.exit(1);
      }
    })

    auto.hooks.version.tapPromise(
      this.name,
      async ({ bump, dryRun, quiet }) => {
        // Update the manifest.json
        const manifestPath = path.join(__dirname, "../manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
        const lastVersion = manifest.version;
        const newVersion = semver.inc(
          manifest.version,
          bump as semver.ReleaseType
        );

        if (dryRun) {
          if (quiet) {
            console.log(newVersion);
          } else {
            auto.logger.log.info(`Would have published: ${newVersion}`);
          }

          return;
        }

        manifest.version = semver.inc(
          manifest.version,
          bump as semver.ReleaseType
        );
        auto.logger.log.info(
          "Updated manifest.json version to: ",
          manifest.version
        );

        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        await execPromise("git", ["add", manifestPath]);

        // Update the versions.json
        const versionsPath = path.join(__dirname, "../versions.json");
        const versions = JSON.parse(fs.readFileSync(versionsPath, "utf-8"));

        if (versions[lastVersion] !== manifest.minAppVersion) {
          versions[manifest.version] = manifest.minAppVersion;

          const newVersions = JSON.stringify(versions, null, 2);
          auto.logger.log.info("Updated versions.json: ", newVersions);

          fs.writeFileSync(versionsPath, newVersions);
          await execPromise("git", ["add", versionsPath]);
        }

        await execPromise("git", [
          "commit",
          "-m",
          '"Update version [skip ci]"',
          "--no-verify",
        ]);

        auto.logger.log.info(
          `Tagging new tag: ${lastVersion} => ${newVersion}`
        );
        await execPromise("git", [
          "tag",
          newVersion,
          "-m",
          `"Update version to ${newVersion}"`,
        ]);
      }
    );

    auto.hooks.publish.tapPromise(this.name, async () => {
      auto.logger.log.info("Pushing new tag to GitHub");

      await execPromise("git", [
        "push",
        "--follow-tags",
        "--set-upstream",
        auto.remote,
        getCurrentBranch() || auto.baseBranch,
      ]);
    });

    auto.hooks.next.tapPromise(
      this.name,
      async (preReleaseVersions, { bump, dryRun }) => {
        if (!auto.git) {
          return preReleaseVersions;
        }

        const prereleaseBranches =
          auto.config?.prereleaseBranches ?? DEFAULT_PRERELEASE_BRANCHES;
        const branch = getCurrentBranch() || "";
        const prereleaseBranch = prereleaseBranches.includes(branch)
          ? branch
          : prereleaseBranches[0];
        const lastRelease = await auto.git.getLatestRelease();
        const current =
          (await auto.git.getLastTagNotInBaseBranch(prereleaseBranch)) ||
          (await auto.getCurrentVersion(lastRelease));
        const prerelease = auto.prefixRelease(
          determineNextVersion(lastRelease, current, bump, prereleaseBranch)
        );

        preReleaseVersions.push(prerelease);

        if (dryRun) {
          return preReleaseVersions;
        }

        // Generate manifest updates for upload-assets plugin to pick up after
        const manifestPath = path.join(__dirname, "../manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
        manifest.version = prerelease;
        auto.logger.log.info("Updated manifest.json version to: ", prerelease);
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

        await execPromise("git", [
          "tag",
          prerelease,
          "-m",
          `"Tag pre-release: ${prerelease}"`,
        ]);
        await execPromise("git", ["push", auto.remote, branch, "--tags"]);

        return preReleaseVersions;
      }
    );

    const uploadAssets = new UploadAssetsPlugins([
      this.main,
      this.manifest,
      this.styles,
      this.zip,
    ]);

    uploadAssets.apply(auto);
  }
}