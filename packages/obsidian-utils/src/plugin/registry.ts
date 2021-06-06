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

  private get registry() {
    return PluginRegistry._registry;
  }

  private set registry(data: PluginRegistryData) {
    PluginRegistry._registry = data;
  }

  private async updateRegistry() {
    debug("Fetching the plugin registry...");
    const [pluginRegistryFetchError, pluginRegistry] = await to(
      fetch(this.registryURL).then((response) => response.json())
    );
    failIf(
      pluginRegistryFetchError,
      "Failed to fetch the plugin registry from github"
    );
    this.registry.plugins = pluginRegistry;
    debug("Plugin registry downloaded");
  }

  public async getRegistry() {
    if (
      this.registry.plugins.length === 0 ||
      isBefore(this.registry.lastUpdated, subMinutes(Date.now(), 5))
    ) {
      await this.updateRegistry();
    }
    return this.registry;
  }

  public async getPlugin(
    pluginID: string
  ): Promise<PluginRegistryRecord | undefined> {
    const registry = await this.getRegistry();
    return registry.plugins.find((plugin) => plugin.id === pluginID);
  }
}

export const findPluginInRegistry = (pluginID: string) => {
  const registery = new PluginRegistry();
  return registery.getPlugin(pluginID);
};
