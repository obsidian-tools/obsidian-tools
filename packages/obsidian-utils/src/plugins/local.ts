/**
 * Handles all local (to the file system) plugin operations.
 *
 * @packageDocumentation
 */
import { failIf, failIfNot, fileStats, toReadJSON } from "../utils";
import path from "path";
import { debug } from "../log";

import type { PluginManifest } from "obsidian";

export interface InstalledPluginInfo {
  manifest: PluginManifest;
  data?: object;
  lastUpdated: Date;
}

/**
 * Gets information about an installed plugin including the contents of
 * its manifest.json, data.json (if it exists), and when the last time the
 * plugin was updated on disk.
 * @param pluginsPath Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.
 * @param pluginID The ID of the plugin to read
 */
export async function getInfoOnInstalled(
  pluginID: string,
  pluginsPath: string
) {
  const manifestPath = path.join(pluginsPath, pluginID, "manifest.json");
  const [manifestReadError, manifest] = await toReadJSON<PluginManifest>(
    manifestPath
  );

  failIf(manifestReadError, `Manifest failed to load: ${manifestReadError}`);
  failIfNot(manifest, `Manifest loaded but wasn't defined`);

  const [, data] = await toReadJSON<object>(pluginsPath, pluginID, "data.json");
  const results: InstalledPluginInfo = {
    manifest,
    data: data ?? undefined,
    lastUpdated: (await fileStats(manifestPath)).mtime,
  };
  debug(`Successfully fetched plugin from disk`);
  debug(results);
  return results;
}

export async function isInstalled(pluginID: string, pluginsPath: string) {
  const [manifestReadError, manifest] = await toReadJSON<PluginManifest>(
    pluginsPath,
    pluginID,
    ".manifest.json"
  );
  return manifestReadError || !manifest ? false : true;
}
