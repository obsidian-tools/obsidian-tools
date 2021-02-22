import { failIf, failIfNotDefined, fileStats, toReadJSON } from "./utils";
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
  const [manifestReadError, manifest] = await toReadJSON<PluginManifest>(
    manifestPath
  );

  failIf(manifestReadError, `Manifest failed to load: ${manifestReadError}`);
  failIfNotDefined(manifest, `Manifest loaded but wasn't defined`);

  const [, data] = await toReadJSON<object>(pluginsPath, pluginID, "data.json");
  const results: InstalledPluginInfo = {
    manifest,
    data: data ?? undefined,
    lastUpdated: (await fileStats(manifestPath)).mtime,
  };
  log.success(`Successfully fetched plugin from disk`);
  log.table(results);
  return results;
}
