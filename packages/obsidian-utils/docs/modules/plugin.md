[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin

# Module: plugin

A collection of utilities to install, read, and download plugins

## Table of contents

### Classes

- [PluginRegistry](../classes/plugin.pluginregistry.md)

### Interfaces

- [InstalledPluginInfo](../interfaces/plugin.installedplugininfo.md)
- [PluginRegistryData](../interfaces/plugin.pluginregistrydata.md)
- [PluginRegistryRecord](../interfaces/plugin.pluginregistryrecord.md)

### Functions

- [getInfoOnInstalled](plugin.md#getinfooninstalled)
- [installFromGithub](plugin.md#installfromgithub)
- [installFromRegistry](plugin.md#installfromregistry)
- [installLocalPlugin](plugin.md#installlocalplugin)
- [isInstalled](plugin.md#isinstalled)

## Functions

### getInfoOnInstalled

▸ **getInfoOnInstalled**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

Gets information about an installed plugin including the contents of
its manifest.json, data.json (if it exists), and when the last time the
plugin was updated on disk.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pluginID` | *string* | The ID of the plugin to read    |
`vaultPath` | *string* | Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.   |

**Returns:** *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

___

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

___

### isInstalled

▸ **isInstalled**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<boolean\>
