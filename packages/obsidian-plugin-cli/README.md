# obsidian-plugin-cli

A CLI tool to make building an obsidian plugin simple

**NOTE** This is _alpha_ software and there _will_ be breaking changes. It'll be stable once 1.0 is released.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obsidian-plugin-cli.svg)](https://npmjs.org/package/obsidian-plugin-cli)
[![Downloads/week](https://img.shields.io/npm/dw/obsidian-plugin-cli.svg)](https://npmjs.org/package/obsidian-plugin-cli)
[![License](https://img.shields.io/npm/l/obsidian-plugin-cli.svg)](https://github.com/zephraph/obsidian-tools/blob/master/package.json)

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
obsidian-plugin-cli/0.4.5 linux-x64 node-v14.15.5
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

builds plugin for release

```
USAGE
  $ obsidian-plugin build [ENTRYPOINT]

OPTIONS
  -e, --esbuild-config=esbuild-config  path to a config file containing esbuild options to apply to the build
  -h, --help                           show CLI help
  -o, --output-dir=output-dir          [default: dist] path to write build output to
```

_See code: [src/commands/build.ts](https://github.com/zephraph/obsidian-tools/blob/v0.4.5/src/commands/build.ts)_

## `obsidian-plugin dev [ENTRYPOINT]`

builds in watch mode and copies output to a specified vault for testing

```
USAGE
  $ obsidian-plugin dev [ENTRYPOINT]

OPTIONS
  -e, --esbuild-config=esbuild-config  path to a JSON file over esbuild options to enhance/override the current build
  -h, --help                           show CLI help
  -n, --no-prompts                     disable prompting for user input
  -v, --vault-path=vault-path          path to the obsidian vault you want to develop in

DESCRIPTION
  If --vault-path is not specified, this command will try to intelligently determine where your vaults are located.
  If it's able to locate your vaults, you'll be given the option to select which vault you'd like to develop against. 
  If, however, --no-prompts is passed it will assume the last opened vault (if one is found) will be the vault to 
  develop 
  against. If that's not the behavior you desire, ensure to pass the explicit path to the vault you want to develop 
  against 
  with --vault-path.
```

_See code: [src/commands/dev.ts](https://github.com/zephraph/obsidian-tools/blob/v0.4.5/src/commands/dev.ts)_

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
