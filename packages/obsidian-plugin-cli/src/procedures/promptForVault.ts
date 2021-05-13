import { procedure } from "@zephraph/procedure";
import { Vault, findVault, isVault } from "obsidian-utils";
import prompts from "prompts";

type Context = {
  vaultPath: string;
  noPrompts: boolean;
  vaults: Vault[];
};

export default procedure<Context>("promptForVault")
  .load(vaultsFromPath)
  .validate("vaults", notEmpty)
  .match([
    [manyVaults, promptsEnabled, selectVault],
    [manyVaults, selectLastOpenedVaultOrError],
    [singleVault, selectFirstVault],
  ])
  .update("vaultPath", promptForVaultPathIfEmpty);

async function vaultsFromPath({ vaultPath }: Context) {
  return { vaults: await findVault(vaultPath) };
}

function notEmpty(val: any) {
  return val && val.length > 0;
}

function singleVault({ vaults }: Context) {
  return vaults.length === 1;
}

function manyVaults({ vaults }: Context) {
  return vaults.length > 1;
}

function promptsEnabled({ noPrompts }: Context) {
  return !noPrompts;
}

async function selectVault({ vaults }: Context) {
  let { selectedVault } = await prompts({
    name: "selectedVault",
    type: "select",
    message: "Select a vault",
    choices: [
      {
        title: "none of these",
        description: "Manually enter your vault path",
        value: "",
      },
      ...vaults.map((v) => ({
        title: v.name,
        value: v.path,
      })),
    ],
  });
  return { vaultPath: selectedVault };
}

function selectFirstVault({ vaults }: Context) {
  return { vaultPath: vaults[0].path };
}

function selectLastOpenedVaultOrError({ vaults }: Context) {
  const openedVaults = vaults.filter((vault) => vault.open);
  if (openedVaults.length !== 1)
    throw new Error("Unsure of which vault to open");
  return { vaultPath: openedVaults[0].path };
}

async function promptForVaultPathIfEmpty(vaultPath: Context["vaultPath"]) {
  if (!vaultPath) {
    let { selectedVaultPath } = await prompts({
      name: "selectedVaultPath",
      message: "Enter the path to your vault",
      type: "text",
      validate: (v) => isVault(v) || `${v} is not a valid vault, try again`,
    });
    if (!selectedVaultPath) throw new Error(`No vault selected`);
    return selectedVaultPath as string;
  }
  return vaultPath;
}
