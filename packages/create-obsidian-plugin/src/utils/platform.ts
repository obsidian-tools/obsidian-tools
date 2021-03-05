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

export const runCommandText = (cmd?: string) => {
  switch (platform) {
    case "yarn/1":
    case "yarn/2":
      return `yarn ${cmd}`;
    default:
      return `${platform} run ${cmd}`;
  }
};

export const install = (cwd = process.cwd()) => {
  switch (platform) {
    case "npm":
      return execa("npm", ["install"], { cwd });
    case "yarn/1":
    case "yarn/2":
      return execa("yarn", ["install"], { cwd });
    case "pnpm":
      return execa("pnpm", ["install"], { cwd });
  }
};

export const cmd = os.platform() === "darwin" ? "⌘" : "ctrl";
