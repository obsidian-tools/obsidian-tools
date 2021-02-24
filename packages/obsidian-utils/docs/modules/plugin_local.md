[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin/local

# Module: plugin/local

Handles all local (to the file system) plugin operations.

## Table of contents

### Interfaces

- [InstalledPluginInfo](../interfaces/plugin_local.installedplugininfo.md)

### Functions

- [getInfoOnInstalledPlugin](plugin_local.md#getinfooninstalledplugin)
- [isPluginInstalled](plugin_local.md#isplugininstalled)

## Functions

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

### isPluginInstalled

▸ **isPluginInstalled**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<boolean\>
