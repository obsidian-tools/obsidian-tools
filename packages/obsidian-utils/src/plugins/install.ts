import { PluginRegistry } from "./registry";
import {
  write,
  fetchToDisk,
  fetchJSON,
  failIf,
  mkdir,
  to,
  failIfNot,
} from "../utils";
import { debug } from "../log";
import fs from "fs";
import path from "path";
import { PluginManifest } from "obsidian";

type PluginVersion = "latest" | `${number}.${number}.${number}`;

export async function installPluginFromGithub(
  repo: string,
  version: PluginVersion,
  pluginsPath: string
) {
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
  version: PluginVersion,
  pluginsPath: string,
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
  return installPluginFromGithub(plugin.repo, version, pluginsPath);
}
