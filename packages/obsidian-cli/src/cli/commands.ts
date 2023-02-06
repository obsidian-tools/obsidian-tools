import { Command, Option, Usage } from 'clipanion';
import build from '../procedures/build';

export class PluginCommand extends Command {
  static paths = [['plugin']];

  execute(): Promise<number | void> {
    throw new Error("Method not implemented.");
  }
}

export class PluginInstallCommand extends Command {
  static paths = [['plugin', 'install']];

  static usage = Command.Usage({
    category: 'Plugin commands',
    description: 'Install a plugin from GitHub or Obsidian\'s registry',
  })

  execute(): Promise<number | void> {
    throw new Error("Method not implemented.");
  }
}

export class PluginBuildCommand extends Command {
  static paths = [['plugin', 'build']];
  outputDir = Option.String('-o,--output-dir', 'dist', {
    description: "path to write build output to",
    tolerateBoolean: false,
  })
  esbuildConfig = Option.String('-c,--esbuild-config', {
    description: "path to a config file containing esbuild options",
    required: false
  })
  pluginFile = Option.String({ required: true })

  static usage = Command.Usage({
    category: 'Plugin commands',
    description: 'Prepare a plugin for release',
  })

  async execute() {
    await build.exec({
      entryPoint: this.pluginFile,
      outDir: this.outputDir,
      esbuildConfig: {},
      esbuildConfigPath: this.esbuildConfig,
    })
  }
}

export class PluginDevCommand extends Command {
  static paths = [['plugin', 'dev']];

  static usage = Command.Usage({
    category: 'Plugin commands',
    description: 'Develop a plugin against a local vault',
  })

  execute(): Promise<number | void> {
    throw new Error("Method not implemented.");
  }
}
