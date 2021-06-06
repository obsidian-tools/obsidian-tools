import { Command, flags } from "@oclif/command";
import path from "path";
import fs from "fs";
import { promisify } from "util";
import prompts from "prompts";
import dedent from "dedent";
import { bold, dim, green, underline } from "ansi-colors";
import {
  findVault,
  isVault,
  to,
  isPluginInstalled,
  installPluginFromGithub,
} from "obsidian-utils";
import { build } from "../build";
import { getConfig } from "../config";

const localManifestPath = path.join(process.cwd(), "manifest.json");

const read = promisify(fs.readFile);
const mkdir = (path: string) => {
  if (fs.existsSync(path)) return;
  return fs.mkdirSync(path, { recursive: true });
};

export default class Dev extends Command {
  static description = dedent`
    builds in watch mode and copies output to a specified vault for testing

    If ${bold(
      "--vault-path"
    )} is not specified, this command will try to intelligently determine where your vaults are located.
    If it's able to locate your vaults, you'll be given the option to select which vault you'd like to develop against. 
    If, however, ${bold(
      "--no-prompts"
    )} is passed it will assume the last opened vault (if one is found) will be the vault to develop 
    against. If that's not the behavior you desire, ensure to pass the explicit path to the vault you want to develop against 
    with ${bold("--vault-path")}.
  `;
  static flags = {
    help: flags.help({ char: "h" }),
    ["esbuild-config"]: flags.string({
      char: "e",
      description:
        "path to a JSON file over esbuild options to enhance/override the current build",
    }),
    ["vault-path"]: flags.string({
      char: "v",
      description: "path to the obsidian vault you want to develop in",
      default: "",
    }),
    ["no-prompts"]: flags.boolean({
      char: "n",
      description: "disable prompting for user input",
    }),
    ["with-stylesheet"]: flags.string({
      char: "S",
      description: "include a stylesheet",
    }),
  };

  static args = [{ name: "entryPoint" }];

  async run() {
    const { args, flags } = this.parse(Dev);
    let {
      ["esbuild-config"]: esbuildConfigPath,
      ["vault-path"]: vaultPath,
      ["no-prompts"]: noPrompts,
      ["with-stylesheet"]: stylesheet,
    } = flags;

    // load
    const [configError, esbuildConfig] = await to(
      getConfig(args.entryPoint, esbuildConfigPath)
    );

    if (configError) {
      this.error(configError);
    }

    // load
    if (!fs.existsSync(localManifestPath)) {
      this.error(
        "Your project should have a manifest.json file in its root but none was found"
      );
    }
    const manifest = JSON.parse(await read(localManifestPath, "utf-8"));

    const [vaultError, vaults] = await to(findVault(vaultPath));
    if (vaultError || !vaults || vaults.length === 0) {
      if (noPrompts) {
        this.error(`No vault could be located\n${vaultError}`.trim());
      }
      if (vaults && vaults.length) {
        let { selectedVaultPath } = await prompts({
          name: "selectedVaultPath",
          type: "select",
          message: "Select a vault",
          choices: [
            {
              title: "none of these",
              description: "Manually enter your vault path",
              value: "",
            },
            ...vaults.map((v) => ({
              title: v.name,
              value: v.path,
            })),
          ],
        });
        if (selectedVaultPath) {
          vaultPath = selectedVaultPath;
        } else {
          let { selectedVaultPath } = await prompts({
            name: "selectedVaultPath",
            message: "Enter the path to your vault",
            type: "text",
            validate: (v) =>
              isVault(v) || `${v} is not a valid vault, try again`,
          });
          if (!selectedVaultPath) this.error(`No vault selected`);
          vaultPath = selectedVaultPath;
        }
      } else {
        let { selectedVaultPath } = await prompts({
          name: "selectedVaultPath",
          message: "Enter the path to your vault",
          type: "text",
          validate: (v) => isVault(v) || `${v} is not a valid vault, try again`,
        });
        if (!selectedVaultPath) this.error(`No vault selected`);
        vaultPath = selectedVaultPath;
      }
    } else if (vaults.length === 1) {
      vaultPath = vaults[0].path;
    } else {
      const openedVaults = vaults.filter((vault) => vault.open);
      if (noPrompts && openedVaults.length === 1) {
        this.log(dedent`
          Using vault ${openedVaults[0].name} given it's the last opened
          If that's not the intended vault, enable prompts or pass vault path instead
        `);
        vaultPath = openedVaults[0].path;
      } else if (noPrompts) {
        this.error(
          `Unsure which vault to select: ${vaults
            .map((vault) => vault.name)
            .join(",")}`
        );
      } else {
        const { selectedVaultPath } = await prompts({
          type: "select",
          name: "selectedVaultPath",
          message: "Select the vault to develop in",
          choices: vaults.map((vault) => ({
            title: vault.name,
            value: vault.path,
            description: vault.open ? "recently opened" : undefined,
          })),
        });
        if (!selectedVaultPath) this.error(`No vault was selected`);
        vaultPath = selectedVaultPath;
      }
    }
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

    if (!(await isPluginInstalled("hot-reload", vaultPath)) && !noPrompts) {
      const { installHotReload } = await prompts({
        name: "installHotReload",
        type: "confirm",
        message: `Would you like to install pjeby's hot-reload plugin to have your plugin reload on change? ${dim(
          "(recommended)"
        )}`,
      });
      if (installHotReload) {
        this.log("Installing hot-reload from github...");
        await installPluginFromGithub("pjeby/hot-reload", "latest", vaultPath);
        fs.openSync(path.join(pluginPath, ".hotreload"), "w");
        this.log(
          `${green("Success!")} You'll need to ${bold(
            underline("reload obsidian (CMD+R)")
          )} and ${bold(
            underline("enable the plugin")
          )} for hot-reloading to start!`
        );
      }
    }

    fs.watch(localManifestPath, (eventType) => {
      if (eventType === "change") {
        this.log("Manifest file changed, copying it to your vault");
        copyConfig();
      }
    });

    if (stylesheet) {
      (esbuildConfig!.entryPoints as string[]).push(stylesheet);
      await build({
        outdir: pluginPath,
        watch: true,
        ...esbuildConfig,
      });
    } else {
      await build({
        outfile: path.join(pluginPath, "main.js"),
        watch: true,
        ...esbuildConfig,
      });
    }
  }
}
