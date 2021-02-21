import os from "os";
import path from "path";
import fs from "fs";
import { to, readJSON, failIf } from "./utils";

interface Vault {
  name: string;
  path: string;
}

export const findVault = async (): Promise<Vault[]> => {
  const home = os.homedir();
  let obsidianPath = "";
  switch (os.platform()) {
    case "win32":
      obsidianPath = path.join(home, "AppData", "Local", "Obsidian");
      break;
    case "darwin":
      obsidianPath = path.join(
        home,
        "Library",
        "Application Support",
        "Obsidian"
      );
      break;
    default:
      obsidianPath = path.join(home, ".Obsidian");
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

  return Object.values(obsidian.vaults).map((vault: any) => ({
    path: vault.path,
    name: path.basename(vault.path),
  }));
};
