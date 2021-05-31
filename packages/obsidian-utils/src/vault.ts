/**
 * A collection of tools for working with or locating vaults
 *
 * @packageDocumentation
 */
import os from "os";
import path from "path";
import fs from "fs";
import { to, readJSON, failIf } from "./utils";
import which from "which";
import execa from "execa";

/**
 * The shape of a vault entry in Obsidian's official
 * obsidian.json configuration file
 */
interface ObsidianVaultDefinition {
  path: string;
  ts: number;
  open?: true;
}

/**
 * A simpler vault representation that can be passed around for other tools
 * to do things with vaults
 */
interface Vault {
  name: string;
  path: string;
  open?: boolean;
}

/** Determines if the given path is a path to a vault */
export const isVault = (vaultPath: any): boolean => {
  if (
    typeof vaultPath === "string" &&
    fs.existsSync(path.join(vaultPath, ".obsidian"))
  ) {
    return true;
  }
  return false;
};

/**
 * Gets a {@link Vault} data structure from the path to a given vault
 *
 * Note: There are no sanity checks to verify that a given path is a path to
 * a vault. Use {@link isVault} before passing it to this function.
 *
 * @param vaultPath A path to an Obsidian vault (which, at the very least contains a .obsidian directory)
 * @param open If the vault should be labeled as open
 **/
const getVaultFromPath = (vaultPath: string, open?: boolean): Vault => {
  return {
    name: path.basename(vaultPath),
    path: vaultPath,
    open,
  };
};

/**
 * Attempts to find where your obsidian vaults are by locating obsidian's app config. It's relatively reliable
 * on Windows and OSX, but there may be issues on linux and will definitely be issues on weird platforms.
 * PRs welcome.
 *
 * @param vaultPath A path to an Obsidian vault (which, at the very least contains a .obsidian directory)
 */
export const findVault = async (vaultPath?: string): Promise<Vault[]> => {
  if (isVault(vaultPath)) {
    return [getVaultFromPath(vaultPath!)];
  }
  if (vaultPath && fs.existsSync(vaultPath)) {
    return [getVaultFromPath(vaultPath)];
  }
  let home = os.homedir();
  let obsidianPath = "";

  const findWindowsObsidianDirectory = (home: string) =>
    ["Local", "Roaming", "LocalLow"]
      .map((p) => path.join(home, "AppData", p, "Obsidian"))
      .find((p) => fs.existsSync(path.join(p, "obsidian.json"))) || "";

  switch (os.platform()) {
    case "win32":
      obsidianPath = findWindowsObsidianDirectory(home);
      break;
    case "darwin":
      obsidianPath = path.join(
        home,
        "Library",
        "Application Support",
        "Obsidian"
      );
      break;
    default: {
      // WSL support
      if (which.sync("wslvar", { nothrow: true })) {
        const { stdout: userProfile } = await execa("wslvar", ["USERPROFILE"]);
        const { stdout: wslHome } = await execa("wslpath", [userProfile]);
        obsidianPath = findWindowsObsidianDirectory(wslHome);
      } else {
        const obsidianHomePath = path.join(home, ".obsidian");
        const obsidianConfigPath = path.join(home, ".config", "obsidian");
        const XDG = process.env.XDG ?? "";
        const XDGPath = path.join(XDG, "obsidian");
        obsidianPath = fs.existsSync(obsidianConfigPath)
          ? obsidianConfigPath
          : XDG && fs.existsSync(XDGPath)
          ? XDGPath
          : obsidianHomePath;
      }
    }
  }

  failIf(
    !fs.existsSync(obsidianPath),
    "Can't find obsidian settings directory, won't be able to read vaults"
  );

  const [obsidianReadError, obsidian] = await to(
    readJSON(path.join(obsidianPath, "obsidian.json"))
  );

  failIf(
    obsidianReadError,
    `Could not read obsidian.json: ${obsidianReadError}\nVaults won't be retrievable`
  );

  return Object.values<ObsidianVaultDefinition>(obsidian.vaults).map<Vault>(
    (vault) => getVaultFromPath(vault.path, vault.open)
  );
};
