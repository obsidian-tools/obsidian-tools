// Functions shared across procedures
import { cosmiconfig } from "cosmiconfig";
import * as esbuild from "esbuild";
import path from 'path'
import fs from 'fs'
import { readFile } from 'fs/promises'


// -- Loaders -----------------------------------------

interface EsbuildConfigContext {
  esbuildConfigPath: string;
  entryPoint: string;
}

/** Loads the esbuild config given a path and entrypoint */
export async function esbuildConfig({
  esbuildConfigPath,
  entryPoint,
}: EsbuildConfigContext) {
  let esbuildConfig: esbuild.BuildOptions = {};
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

export async function manifest() {
  const localManifestPath = path.join(process.cwd(), "manifest.json");

  if (!fs.existsSync(localManifestPath)) {
    throw new Error(
      "Your project should have a manifest.json file in its root but none was found"
    );
  }
  return { manifest: JSON.parse(await readFile(localManifestPath, { encoding: "utf-8" })) };
}

// -- Validators -----------------------------

export function isDefined<T>(v: T) {
  return !!v;
}
