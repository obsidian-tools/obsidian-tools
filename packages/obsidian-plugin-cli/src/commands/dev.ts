import { Command, flags } from "@oclif/command";
import path from "path";
import * as esbuild from "esbuild";
import fs from "fs";
import { promisify } from "util";

const localManifestPath = path.join(process.cwd(), "manifest.json");

const read = promisify(fs.readFile);
const mkdir = (path: string) => {
  if (fs.existsSync(path)) return;
  return fs.mkdirSync(path, { recursive: true });
};

export default class Dev extends Command {
  static flags = {
    help: flags.help({ char: "h" }),
    esbuildOverride: flags.string({
      char: "e",
      description:
        "path to a JSON file over esbuild options to enhance/override the current build",
    }),
    vaultPath: flags.string({
      char: "V",
      description:
        "path to the obsidian vault you want to develop this plugin in",
      required: true,
    }),
  };

  static args = [{ name: "entryPoint" }];

  async run() {
    const { args, flags } = this.parse(Dev);
    const { esbuildOverride, vaultPath } = flags;

    let esbuildConfig = {};
    if (esbuildOverride) {
      if (!esbuildOverride.endsWith(".json")) {
        this.error("Expected esbuildOverride to be json file");
      }
      esbuildConfig = JSON.parse(fs.readFileSync(esbuildOverride, "utf-8"));
    }

    if (!fs.existsSync(localManifestPath)) {
      this.error(
        "Your project should have a manifest.json file in its root but none was found"
      );
    }
    const manifest = JSON.parse(await read(localManifestPath, "utf-8"));
    const pluginPath = path.join(
      vaultPath,
      ".obsidian",
      "plugins",
      manifest.id
    );
    const pluginManifestPath = path.join(pluginPath, "manifest.json");

    const copyConfig = () => {
      mkdir(pluginPath);
      fs.copyFileSync(localManifestPath, pluginManifestPath);
    };

    copyConfig();

    fs.watch(localManifestPath, (eventType) => {
      if (eventType === "change") {
        this.log("Manifest file changed, copying it to your vault");
        copyConfig();
      }
    });

    await esbuild.build({
      entryPoints: [args.entryPoint],
      outfile: path.join(pluginPath, "main.js"),
      bundle: true,
      format: "cjs",
      platform: "node",
      external: ["obsidian"],
      watch: true,
      ...esbuildConfig,
    });
  }
}
