import { BuildOptions } from "esbuild";
import { cosmiconfig } from "cosmiconfig";

export const getConfig = async (entryPoint: any, configPath?: string) => {
  let esbuildConfig: BuildOptions;
  const configFinder = cosmiconfig("esbuild");
  if (configPath) {
    const { config } = (await configFinder.load(configPath)) ?? {
      config: {},
    };
    esbuildConfig = config;
  } else {
    const { config } = (await configFinder.search()) ?? { config: {} };
    esbuildConfig = config;
  }

  if (entryPoint) {
    esbuildConfig.entryPoints = [entryPoint];
    return esbuildConfig;
  }

  if (!esbuildConfig.entryPoints) {
    throw new Error("Please provide the path to a file to build");
  }

  return esbuildConfig;
};
