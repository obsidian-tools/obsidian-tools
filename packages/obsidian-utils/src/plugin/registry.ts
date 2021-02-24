/**
 * A data structure that reflects obsidian's official plugin registry. It provides a mechanism
 * to read the registry and get details about specific plugins from the registry.
 *
 * @packageDocumentation
 */
import { isBefore, subMinutes } from "date-fns";
import { failIf, to } from "../utils";
import { debug } from "../log";
import { Repo } from "../types";

const DEFAULT_REGISTRY_URL =
  "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugins.json";

export interface PluginRegistryRecord {
  id: string;
  name: string;
  author: string;
  description: string;
  repo: Repo;
}

export interface PluginRegistryData {
  lastUpdated: Date;
  plugins: PluginRegistryRecord[];
}

export class PluginRegistry {
  private static _registry: PluginRegistryData = {
    lastUpdated: new Date(0),
    plugins: [],
  };
  constructor(private registryURL: string = DEFAULT_REGISTRY_URL) {}

  private async updateRegistry() {
    debug("Fetching the plugin registry...");
    const [pluginRegistryFetchError, pluginRegistry] = await to(
      fetch(this.registryURL).then((response) => response.json())
    );
    failIf(
      pluginRegistryFetchError,
      "Failed to fetch the plugin registry from github"
    );
    PluginRegistry._registry = pluginRegistry;
    debug("Plugin registry downloaded");
  }

  public async getRegistry() {
    const registry = PluginRegistry._registry;
    if (isBefore(registry.lastUpdated, subMinutes(Date.now(), 5))) {
      await this.updateRegistry();
    }
    return registry;
  }

  public async getPlugin(
    pluginID: string
  ): Promise<PluginRegistryRecord | undefined> {
    const registry = await this.getRegistry();
    return registry.plugins.find((plugin) => plugin.id === pluginID);
  }
}
