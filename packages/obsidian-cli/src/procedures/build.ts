import { procedure } from "@zephraph/procedure";
import * as esbuild from "esbuild";
import { cosmiconfig } from "cosmiconfig";
import path from "path";
import fs from "fs/promises";

export type Context = {
  esbuildConfigPath: string;
  esbuildConfig: esbuild.BuildOptions;
  outDir: string;
  entryPoint: string;
};

export default procedure<Context>("build")
  .load(esbuildConfig)
  .validate("outDir", isDefined)
  .do(build);

// -----------------------------------------------------

async function esbuildConfig({
  esbuildConfig,
  esbuildConfigPath,
  entryPoint,
}: Context) {
  const configFinder = cosmiconfig("esbuild");
  if (esbuildConfigPath) {
    const { config } = (await configFinder.load(esbuildConfigPath)) ?? {
      config: {},
    };
    esbuildConfig = config;
  } else {
    const { config } = (await configFinder.search()) ?? { config: {} };
    esbuildConfig = config;
  }

  if (entryPoint) {
    esbuildConfig.entryPoints = [entryPoint];
    return { esbuildConfig };
  }

  if (!esbuildConfig.entryPoints) {
    throw new Error("Please provide the path to a file to build");
  }

  return { esbuildConfig };
}

function isDefined(v: unknown) {
  return !!v;
}

async function build({ outDir, esbuildConfig }: Context) {
  await esbuild.build({
    outfile: path.join(outDir, "main.js"),
    bundle: true,
    sourcemap: true,
    platform: "node",
    external: ["obsidian"],
    format: "cjs",
    mainFields: ["browser", "module", "main"],
    ...esbuildConfig,
  });

  await fs.copyFile("./manifest.json", path.join(outDir, "manifest.json"));
}
