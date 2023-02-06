import { procedure } from "@zephraph/procedure";
import * as esbuild from "esbuild";
import path from "path";
import fs from "fs/promises";
import { esbuildConfig, isDefined } from "./shared";

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
