import { PluginRegistry } from "./registry";
import {
  fetchToDisk,
  fetchJSON,
  failIf,
  mkdir,
  to,
  failIfNotDefined,
} from "./utils";
import log from "./log";
import fs from "fs";
import path from "path";
import { PluginManifest } from "obsidian";
import { writeFile } from "fs/promises";

export async function installPluginFromGithub(
  repo: string,
  version: string,
  pluginsPath: string
) {
  // docs: https://docs.github.com/en/rest/reference/repos#get-a-release-by-tag-name
  const [pluginReleaseFetchError, pluginReleaseInfo] = await to(
    fetch(`https://api.github.com/repos/${repo}/releases/tags/${version}`, {
      method: "GET",
      headers: { Accept: "application/vnd.github.v3+json" },
    }).then((response) => response.json())
  );

  failIf(
    pluginReleaseFetchError,
    `Failed to get release information from GitHub. You should install this plugin manually.`
  );

  log.success(`retrieved release info from ${repo}`);

  log.debug("Finding manifest from release...");

  const manifestDownloadPath: string = pluginReleaseInfo.assets.find(
    (asset: any) => asset.name === "manifest.json"
  )?.browser_download_url;

  failIfNotDefined(
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
  failIfNotDefined(manifest, `manifest.json is empty`);

  const pluginID = manifest.id;
  const pluginPath = path.join(pluginsPath, pluginID);

  log.debug("Creating plugin directory if it doesn't exist...");
  if (!fs.existsSync(pluginPath)) {
    await mkdir(pluginPath, { recursive: true });
    log.success("plugin directory successfully created");
  }

  await writeFile(
    path.join(pluginPath, "manifest.json"),
    JSON.stringify(manifest)
  );

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
  log.success(`${pluginID} successfully installed`);
}

export async function installPluginFromRegistry(
  pluginID: string,
  version: string,
  pluginsPath: string,
  registry: PluginRegistry = new PluginRegistry()
) {
  log.info(`Attempting to install ${pluginID}`);

  log.debug("Trying to retrieve", pluginID, "from plugin registry");
  const plugin = await registry.getPlugin(pluginID);

  failIfNotDefined(
    plugin,
    `Unable to install ${plugin}, it wasn't found in the registry.`
  );

  log.success(pluginID, "found in plugin registry");
  return installPluginFromGithub(plugin.repo, version, pluginsPath);
}
