import { procedure } from "@zephraph/procedure";
import promptForVault from "./promptForVault";
import {
  Vault,
  PluginRegistry,
  installPluginFromGithub,
  installPluginFromRegistry,
} from "obsidian-utils";
import c from "chalk";
import dedent from "dedent";
import { Command } from "@oclif/command";

type Context = {
  plugin: string;
  vaultPath: string;
  noPrompts: boolean;
  vaults: Vault[];
  registry: PluginRegistry;
  log: Command["log"];
};

export default procedure<Context>("install")
  .validate("plugin", isPluginValid)
  .match(
    [
      [noVaultProvided, promptForVault],
      [isValidVaultProvided, formatVault],
    ],
    invalidVaultProvided
  )
  .load(pluginRegistry)
  .match(
    [
      [likelyGitHubPlugin, installFromGitHub],
      [pluginFoundInRegistry, installFromRegistry],
    ],
    pluginNotFoundError
  );

// -------------------------------------------------------------

function isPluginValid(plugin: string) {
  if (!plugin) return false;
  return true;
}

function noVaultProvided({ vaultPath }: Context) {
  return vaultPath ? false : true;
}

function isValidVaultProvided({ vaultPath }: Context) {
  return vaultPath ? true : false;
}

function formatVault({ vaultPath }: Context) {
  return { vaultPath };
}

function invalidVaultProvided() {}

function pluginRegistry() {
  return {
    registry: new PluginRegistry(),
  };
}

function likelyGitHubPlugin({ plugin }: Context) {
  return plugin.startsWith("https://github.com") ||
    plugin.split("/").length === 2
    ? true
    : false;
}

function installFromGitHub({ plugin, vaultPath }: Context) {
  if (plugin.startsWith("https://github.com")) {
    const [owner, repo] = plugin
      .replace("https://github.com/", "")
      .replace(/\.git$/, "")
      .split("/");
    return installPluginFromGithub(`${owner}/${repo}`, "latest", vaultPath);
  }
  return installPluginFromGithub(plugin, "latest", vaultPath);
}

async function pluginFoundInRegistry({ plugin, registry }: Context) {
  return !!(await registry.getPlugin(plugin));
}
function installFromRegistry({ plugin, registry, vaultPath }: Context) {
  return installPluginFromRegistry(plugin, "latest", vaultPath, registry);
}
function pluginNotFoundError({ plugin, log }: Context) {
  log(
    dedent`
    ${c.red(
      `Error: plugin ${c.bold(
        plugin
      )} isn't valid or wasn't found in the registry.`
    )}
    ${c.yellow(
      "If installing from the Obsidian registry make sure the plugin id is correct."
    )}
    ${c.yellow(
      "If installing from GitHub it should be a reference to a repository"
    )}

      ${c.yellow(
        `$ obsidian-plugin install ${c.bold(
          "https://github.com/username/your-plugin"
        )}`
      )}
      ${c.yellow(`$ obsidian-plugin install ${c.bold("username/your-plugin")}`)}
  `
  );
  process.exit(1);
}
