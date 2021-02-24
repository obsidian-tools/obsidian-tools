[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin/local

# Module: plugin/local

Handles all local (to the file system) plugin operations.

## Table of contents

### Interfaces

- [InstalledPluginInfo](../interfaces/plugin_local.installedplugininfo.md)

### Functions

- [getInfoOnInstalled](plugin_local.md#getinfooninstalled)
- [isInstalled](plugin_local.md#isinstalled)

## Functions

### getInfoOnInstalled

▸ **getInfoOnInstalled**(`pluginID`: *string*, `pluginsPath`: *string*): *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

Gets information about an installed plugin including the contents of
its manifest.json, data.json (if it exists), and when the last time the
plugin was updated on disk.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pluginID` | *string* | The ID of the plugin to read    |
`pluginsPath` | *string* | Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.   |

**Returns:** *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

Defined in: [packages/obsidian-utils/src/plugin/local.ts:25](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/plugin/local.ts#L25)

___

### isInstalled

▸ **isInstalled**(`pluginID`: *string*, `pluginsPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`pluginsPath` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [packages/obsidian-utils/src/plugin/local.ts:48](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/plugin/local.ts#L48)
