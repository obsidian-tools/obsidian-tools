[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin/install

# Module: plugin/install

This module is dedicated to the installation of plugins

## Table of contents

### Functions

- [installLocalPlugin](plugin_install.md#installlocalplugin)
- [installPluginFromGithub](plugin_install.md#installpluginfromgithub)
- [installPluginFromRegistry](plugin_install.md#installpluginfromregistry)

## Functions

### installLocalPlugin

▸ **installLocalPlugin**(`pluginPath`: *string*, `vaultPath`: *string*): *Promise*<void\>

Installs a plugin from the file system to a specified vault

#### Parameters:

Name | Type |
:------ | :------ |
`pluginPath` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<void\>

___

### installPluginFromGithub

▸ **installPluginFromGithub**(`repo`: *string*, `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*): *Promise*<void\>

Given a repo short code, version, and the vault to install a plugin with, this
function downloads the plugin from GitHub's releases and adds it to the specified
vault.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`repo` | *string* | A short code reference a github repo formatted like `owner/repoName`   |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) | Latest or a semver like 1.0.0   |
`vaultPath` | *string* | Path to the vault in which the plugin should be installed    |

**Returns:** *Promise*<void\>

___

### installPluginFromRegistry

▸ **installPluginFromRegistry**(`pluginID`: *string*, `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*, `registry?`: [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) |
`vaultPath` | *string* |
`registry` | [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md) |

**Returns:** *Promise*<void\>
