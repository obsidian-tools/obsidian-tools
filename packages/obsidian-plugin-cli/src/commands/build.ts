import { Command, flags } from "@oclif/command";
import path from "path";
import * as esbuild from "esbuild";
import fs from "fs";

export default class Build extends Command {
  static flags = {
    help: flags.help({ char: "h" }),
    esbuildOverride: flags.string({
      char: "e",
      description:
        "path to a JSON file over esbuild options to enhance/override the current build",
    }),
    outputDir: flags.string({
      char: "o",
      description: "path to write build output to",
      default: "dist",
    }),
  };

  static args = [{ name: "entryPoint" }];

  async run() {
    const { args, flags } = this.parse(Build);
    const { esbuildOverride, outputDir } = flags;

    let esbuildConfig = {};
    if (esbuildOverride) {
      if (!esbuildOverride.endsWith(".json")) {
        this.log("Expected esbuildOverride to be json file");
        process.exit(1);
      }
      esbuildConfig = JSON.parse(fs.readFileSync(esbuildOverride, "utf-8"));
    }

    esbuild.build({
      entryPoints: [args.entryPoint],
      outfile: path.join(outputDir, "main.js"),
      bundle: true,
      format: "cjs",
      platform: "node",
      external: ["obsidian"],
      ...esbuildConfig,
    });

    fs.copyFileSync("./manifest.json", path.join(outputDir, "manifest.json"));
  }
}
