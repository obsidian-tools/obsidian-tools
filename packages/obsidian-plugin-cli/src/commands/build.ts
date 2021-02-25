import { Command, flags } from "@oclif/command";
import path from "path";
import fs from "fs";
import { build } from "../build";
import { getConfig } from "../config";
import { to } from "obsidian-utils";

export default class Build extends Command {
  static description = "builds plugin for release";
  static flags = {
    help: flags.help({ char: "h" }),
    ["esbuild-config"]: flags.string({
      char: "e",
      description:
        "path to a config file containing esbuild options to apply to the build",
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
      ["esbuild-config"]: esbuildConfigPath,
      ["output-dir"]: outputDir,
    } = flags;

    const [configError, esbuildConfig] = await to(
      getConfig(args.entryPoint, esbuildConfigPath)
    );

    if (configError) {
      this.error(configError);
    }

    await build({
      outfile: path.join(outputDir, "main.js"),
      ...esbuildConfig,
    });

    fs.copyFileSync("./manifest.json", path.join(outputDir, "manifest.json"));
  }
}
