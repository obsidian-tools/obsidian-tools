import { Command, flags } from "@oclif/command";
import path from "path";
import fs from "fs";
import { build } from "../build";

export default class Build extends Command {
  static description = "builds plugin for release";
  static flags = {
    help: flags.help({ char: "h" }),
    ["esbuild-override"]: flags.string({
      char: "e",
      description:
        "path to a JSON file over esbuild options to enhance/override the current build",
    }),
    ["output-dir"]: flags.string({
      char: "o",
      description: "path to write build output to",
      default: "dist",
    }),
  };

  static args = [{ name: "entryPoint" }];

  async run() {
    const { args, flags } = this.parse(Build);
    const {
      ["esbuild-override"]: esbuildOverride,
      ["output-dir"]: outputDir,
    } = flags;

    let esbuildConfig = {};
    if (esbuildOverride) {
      if (!esbuildOverride.endsWith(".json")) {
        this.log("Expected esbuildOverride to be json file");
        process.exit(1);
      }
      esbuildConfig = JSON.parse(fs.readFileSync(esbuildOverride, "utf-8"));
    }

    await build({
      entryPoints: [args.entryPoint],
      outfile: path.join(outputDir, "main.js"),
      ...esbuildConfig,
    });

    fs.copyFileSync("./manifest.json", path.join(outputDir, "manifest.json"));
  }
}
