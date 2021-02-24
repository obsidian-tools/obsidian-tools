[obsidian-utils](../README.md) / [Exports](../modules.md) / plugins/local

# Module: plugins/local

Handles all local (to the file system) plugin operations.

## Table of contents

### Interfaces

- [InstalledPluginInfo](../interfaces/plugins_local.installedplugininfo.md)

### Functions

- [getInfoOnInstalled](plugins_local.md#getinfooninstalled)
- [isInstalled](plugins_local.md#isinstalled)

## Functions

### getInfoOnInstalled

▸ **getInfoOnInstalled**(`pluginID`: *string*, `pluginsPath`: *string*): *Promise*<[*InstalledPluginInfo*](../interfaces/plugins_local.installedplugininfo.md)\>

Gets information about an installed plugin including the contents of
its manifest.json, data.json (if it exists), and when the last time the
plugin was updated on disk.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pluginID` | *string* | The ID of the plugin to read    |
`pluginsPath` | *string* | Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.   |

**Returns:** *Promise*<[*InstalledPluginInfo*](../interfaces/plugins_local.installedplugininfo.md)\>

___

### isInstalled

▸ **isInstalled**(`pluginID`: *string*, `pluginsPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`pluginsPath` | *string* |

**Returns:** *Promise*<boolean\>
