import os from "os";
import execa from "execa";

export type Platform = typeof platforms[number];
const platforms = ["npm", "yarn/1", "yarn/2", "pnpm"] as const;
export const detectPlatform = (): Platform => {
  const platformAgent = process.env.npm_config_user_agent || "";
  for (const platform of platforms) {
    if (platformAgent.startsWith(platform)) return platform;
  }
  return "npm";
};

const platform = detectPlatform();

const pkgManager = platform.startsWith("yarn") ? "yarn" : platform;

export const runCommandText = (cmd?: string) =>
  pkgManager === "yarn" ? `yarn ${cmd}` : `${pkgManager} run ${cmd}`;

export const installCommandText = `${pkgManager} install`;

export const run = (args: string | string[], cwd = process.cwd()) => {
  if (!Array.isArray(args)) {
    args = [args];
  }
  return execa(pkgManager, args, { cwd });
};

export const cmd = os.platform() === "darwin" ? "⌘" : "ctrl";
