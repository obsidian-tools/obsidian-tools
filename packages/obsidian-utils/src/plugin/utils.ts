import path from "path";

export const vaultPathToPluginsPath = (vaultPath: string) => {
  return path.join(vaultPath, ".obsidian", "plugins");
};
