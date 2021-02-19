# obsidian-plugin-cli

A CLI tool to make building an obsidian plugin simple

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsidian-plugin-build-cli.svg)](https://npmjs.org/package/obsidian-plugin-build-cli)
[![Downloads/week](https://img.shields.io/npm/dw/obsidian-plugin-build-cli.svg)](https://npmjs.org/package/obsidian-plugin-build-cli)
[![License](https://img.shields.io/npm/l/obsidian-plugin-build-cli.svg)](https://github.com/zephraph/obsidian-tools/blob/master/package.json)

<!-- toc -->
* [obsidian-plugin-cli](#obsidian-plugin-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g obsidian-plugin-cli
$ obsidian-plugin COMMAND
running command...
$ obsidian-plugin (-v|--version|version)
obsidian-plugin-cli/0.0.1 darwin-x64 node-v12.18.4
$ obsidian-plugin --help [COMMAND]
USAGE
  $ obsidian-plugin COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`obsidian-plugin build [ENTRYPOINT]`](#obsidian-plugin-build-entrypoint)
* [`obsidian-plugin dev [ENTRYPOINT]`](#obsidian-plugin-dev-entrypoint)
* [`obsidian-plugin help [COMMAND]`](#obsidian-plugin-help-command)

## `obsidian-plugin build [ENTRYPOINT]`

```
USAGE
  $ obsidian-plugin build [ENTRYPOINT]

OPTIONS
  -e, --esbuildOverride=esbuildOverride  path to a JSON file over esbuild options to enhance/override the current build
  -h, --help                             show CLI help
  -o, --outputDir=outputDir              [default: dist] path to write build output to
```

_See code: [src/commands/build.ts](https://github.com/zephraph/obsidian-tools/blob/v0.0.1/src/commands/build.ts)_

## `obsidian-plugin dev [ENTRYPOINT]`

```
USAGE
  $ obsidian-plugin dev [ENTRYPOINT]

OPTIONS
  -V, --vaultPath=vaultPath              (required) path to the obsidian vault you want to develop this plugin in
  -e, --esbuildOverride=esbuildOverride  path to a JSON file over esbuild options to enhance/override the current build
  -h, --help                             show CLI help
```

_See code: [src/commands/dev.ts](https://github.com/zephraph/obsidian-tools/blob/v0.0.1/src/commands/dev.ts)_

## `obsidian-plugin help [COMMAND]`

display help for obsidian-plugin

```
USAGE
  $ obsidian-plugin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
