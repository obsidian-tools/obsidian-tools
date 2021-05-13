import { procedure } from "@zephraph/procedure";
import promptForVault from "./promptForVault";
import { Vault } from "obsidian-utils";

type Context = {
  plugin: string;
  vaultPath: string;
  noPrompts: boolean;
  vaults: Vault[];
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
  .do((context) => console.log(context));

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
