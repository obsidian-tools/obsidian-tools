[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin/install

# Module: plugin/install

This module is dedicated to the installation of plugins

## Table of contents

### Functions

- [installFromGithub](plugin_install.md#installfromgithub)
- [installFromRegistry](plugin_install.md#installfromregistry)
- [installLocalPlugin](plugin_install.md#installlocalplugin)

## Functions

### installFromGithub

▸ **installFromGithub**(`repo`: [*Repo*](types.md#repo), `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*): *Promise*<void\>

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`repo` | [*Repo*](types.md#repo) | A short code reference a github repo formatted like `owner/repoName`   |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) |  |
`vaultPath` | *string* |     |

**Returns:** *Promise*<void\>

___

### installFromRegistry

▸ **installFromRegistry**(`pluginID`: *string*, `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*, `registry?`: [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) |
`vaultPath` | *string* |
`registry` | [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md) |

**Returns:** *Promise*<void\>

___

### installLocalPlugin

▸ **installLocalPlugin**(`pluginPath`: *string*, `vaultPath`: *string*): *Promise*<void\>

Installs a plugin from the file system to a specified vault

#### Parameters:

Name | Type |
:------ | :------ |
`pluginPath` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<void\>
