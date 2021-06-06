/**
 * This module is dedicated to the installation of plugins
 *
 * @packageDocumentation
 */
import { PluginRegistry } from "./registry";
import {
  write,
  fetchToDisk,
  fetchJSON,
  failIf,
  mkdir,
  to,
  failIfNot,
  toReadJSON,
  rmdir,
  readDir,
  copyFile,
} from "../utils";
import { debug } from "../log";
import fs from "fs";
import path from "path";
import { PluginManifest } from "obsidian";
import { GitHubPluginVersion, Repo } from "../types";
import { vaultPathToPluginsPath } from "./utils";

/**
 * Given a repo short code, version, and the vault to install a plugin with, this
 * function downloads the plugin from GitHub's releases and adds it to the specified
 * vault.
 *
 * @param repo A short code reference a github repo formatted like `owner/repoName`
 * @param version Latest or a semver like 1.0.0
 * @param vaultPath Path to the vault in which the plugin should be installed
 */
export async function installPluginFromGithub(
  repo: string,
  version: GitHubPluginVersion,
  vaultPath: string
) {
  const pluginsPath = vaultPathToPluginsPath(vaultPath);
  // docs: https://docs.github.com/en/rest/reference/repos#get-a-release-by-tag-name
  const [pluginReleaseFetchError, pluginReleaseInfo] = await to(
    fetch(
      version === "latest"
        ? `https://api.github.com/repos/${repo}/releases/latest`
        : `https://api.github.com/repos/${repo}/releases/tags/${version}`,
      {
        method: "GET",
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    ).then((response) => response.json())
  );

  failIf(
    pluginReleaseFetchError,
    `Failed to get release information from GitHub. You should install this plugin manually.`
  );

  debug(`retrieved release info from ${repo}`);
  debug("Finding manifest from release...");

  const manifestDownloadPath: string = pluginReleaseInfo.assets.find(
    (asset: any) => asset.name === "manifest.json"
  )?.browser_download_url;

  failIfNot(
    manifestDownloadPath,
    `Didn't find a manifest.json file in release. Check it here: https://github.com/${repo}/releases/tag/${version}`
  );

  const [manifestDownloadError, manifest] = await to<PluginManifest>(
    fetchJSON(manifestDownloadPath)
  );

  failIf(
    manifestDownloadError,
    `Failed to download manifest.json.\n${manifestDownloadError}`
  );
  failIfNot(manifest, `manifest.json is empty`);

  const pluginID = manifest.id;
  const pluginPath = path.join(pluginsPath, pluginID);

  debug("Creating plugin directory if it doesn't exist...");
  if (!fs.existsSync(pluginPath)) {
    await mkdir(pluginPath, { recursive: true });
    debug("plugin directory successfully created");
  }

  await write(path.join(pluginPath, "manifest.json"), JSON.stringify(manifest));

  await Promise.all(
    pluginReleaseInfo.assets
      .filter(
        (asset: any) =>
          asset.name !== "manifest.json" &&
          (asset.name.endsWith(".js") || asset.name.endsWith(".json"))
      )
      .map((asset: any) =>
        fetchToDisk(
          asset.browser_download_url,
          path.join(pluginPath, asset.name)
        )
      )
  );
  debug(`${pluginID} successfully installed`);
}

export async function installPluginFromRegistry(
  pluginID: string,
  version: GitHubPluginVersion,
  vaultPath: string,
  registry: PluginRegistry = new PluginRegistry()
) {
  debug(`Attempting to install ${pluginID}`);

  debug("Trying to retrieve", pluginID, "from plugin registry");
  const plugin = await registry.getPlugin(pluginID);

  failIfNot(
    plugin,
    `Unable to install ${plugin}, it wasn't found in the registry.`
  );

  debug(pluginID, "found in plugin registry");
  return installPluginFromGithub(plugin.repo, version, vaultPath);
}

/** Installs a plugin from the file system to a specified vault */
export async function installLocalPlugin(
  pluginPath: string,
  vaultPath: string
) {
  debug(
    `Attempting to install ${path.basename(pluginPath)} to ${path.basename(
      vaultPath
    )} vault`
  );
  const [manifestReadError, manifest] = await toReadJSON<PluginManifest>(
    pluginPath,
    "manifest.json"
  );
  failIf(manifestReadError, `Failed to read manifest:\n${manifestReadError}`);
  failIfNot(
    manifest,
    `Something went wrong, tried to read manifest but it was empty`
  );
  const { id } = manifest;
  const newPluginPath = path.join(vaultPathToPluginsPath(vaultPath), id);
  if (fs.existsSync(newPluginPath)) {
    debug("Plugin found with same name at the install location, removing it");
    await rmdir(newPluginPath, { recursive: true, force: true } as any);
    await mkdir(newPluginPath);
  }
  const [readDirError, files] = await to(readDir(pluginPath));
  failIf(
    readDirError,
    `Something went wrong reading files from ${pluginPath}\n${readDirError}`
  );
  failIfNot(
    files,
    `Something went wrong reading files from ${pluginPath}, expected to get files but got null instead`
  );
  for (const file of files) {
    await copyFile(path.join(pluginPath, file), path.join(newPluginPath, file));
  }
  debug("Install complete");
}
