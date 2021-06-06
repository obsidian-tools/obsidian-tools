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

- [findPluginInRegistry](plugin.md#findplugininregistry)
- [getInfoOnInstalledPlugin](plugin.md#getinfooninstalledplugin)
- [installLocalPlugin](plugin.md#installlocalplugin)
- [installPluginFromGithub](plugin.md#installpluginfromgithub)
- [installPluginFromRegistry](plugin.md#installpluginfromregistry)
- [isPluginInstalled](plugin.md#isplugininstalled)
- [vaultPathToPluginsPath](plugin.md#vaultpathtopluginspath)

## Functions

### findPluginInRegistry

▸ `Const`**findPluginInRegistry**(`pluginID`: *string*): *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |

**Returns:** *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

___

### getInfoOnInstalledPlugin

▸ **getInfoOnInstalledPlugin**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

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

___

### isPluginInstalled

▸ **isPluginInstalled**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<boolean\>

___

### vaultPathToPluginsPath

▸ `Const`**vaultPathToPluginsPath**(`vaultPath`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`vaultPath` | *string* |

**Returns:** *string*
