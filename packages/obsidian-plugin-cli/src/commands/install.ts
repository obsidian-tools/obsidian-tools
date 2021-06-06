import Command, { flags } from "@oclif/command";
import dedent from "dedent";
import { to } from "obsidian-utils";
import install from "../procedures/install";

export default class Install extends Command {
  static description = dedent`
    installs a plugin from obsidian's community registry or directly from github

    To install a plugin from the registry just pass its name

      obsidian-plugin install my-plugin

    To install a plugin from github pass a URL or the owner/repository slugs from the end of the url

      obsidian-plugin install me/my-plugin
      obsidian-plugin install https://github.com/me/my-plugin
  `;

  static args = [{ name: "plugin" }];

  static flags = {
    help: flags.help({ char: "h" }),
    ["vault"]: flags.string({
      char: "v",
      description: "the vault in which to install the plugin",
    }),
  };

  async run() {
    const { args, flags } = this.parse(Install);
    const { plugin } = args;
    const { vault } = flags;

    const context = {
      plugin,
      vaultPath: vault as string,
      vaults: [] as any,
      noPrompts: false,
      registry: null as any,
      log: this.log,
    };

    const [err] = await to(install.exec(context));
    if (err) {
      this.error(err);
    }
  }
}
