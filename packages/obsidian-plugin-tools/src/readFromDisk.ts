import { failIf, fileStats, read, to, toReadFromPath } from "./utils";
import path from "path";
import log from "./log";

import type { PluginManifest } from "obsidian";

export interface InstalledPluginInfo {
  manifest: PluginManifest;
  data?: object;
  lastUpdated: Date;
}

/**
 * @param pluginsPath Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.
 * @param pluginID The ID of the plugin to read
 */
export async function readPluginFromDisk(
  pluginsPath: string,
  pluginID: string
) {
  const manifestPath = path.join(pluginsPath, pluginID, "manifest.json");
  const [manifestReadError, rawManifest] = await to(
    read(manifestPath, "utf-8")
  );
  failIf(manifestReadError, `Manifest failed to load: ${manifestReadError}`);
  const manifest: PluginManifest = JSON.parse(rawManifest);
  const [, rawData] = await toReadFromPath(pluginsPath, pluginID, "data.json");
  const results: InstalledPluginInfo = {
    manifest,
    data: rawData ? JSON.parse(rawData) : undefined,
    lastUpdated: (await fileStats(manifestPath)).mtime,
  };
  log.success(`Successfully fetched plugin from disk`);
  log.table(results);
  return results;
}
