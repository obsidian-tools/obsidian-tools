import execa from "execa";

export type Platform = typeof platforms[number] | false;
const platforms = ["npm", "yarn/1", "yarn/2", "pnpm"] as const;
export const detectPlatform = (): Platform => {
  const platformAgent = process.env.npm_config_user_agent || "";
  for (const platform of platforms) {
    if (platformAgent.startsWith(platform)) return platform;
  }
  return false;
};

const platform = detectPlatform();

export const install = () => {
  switch (platform) {
    case "npm":
      execa("npm", ["install"]);
    case "yarn/1":
    case "yarn/2":
      execa("yarn", ["install"]);
    case "pnpm":
      execa("pnpm", ["install"]);
  }
};
