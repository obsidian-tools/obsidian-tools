[obsidian-utils](../README.md) / [Exports](../modules.md) / plugins

# Module: plugins

## Table of contents

### Classes

- [PluginRegistry](../classes/plugins.pluginregistry.md)

### Interfaces

- [InstalledPluginInfo](../interfaces/plugins.installedplugininfo.md)
- [PluginRegistryData](../interfaces/plugins.pluginregistrydata.md)
- [PluginRegistryRecord](../interfaces/plugins.pluginregistryrecord.md)

### Functions

- [getInfoOnInstalled](plugins.md#getinfooninstalled)
- [installPluginFromGithub](plugins.md#installpluginfromgithub)
- [installPluginFromRegistry](plugins.md#installpluginfromregistry)
- [isInstalled](plugins.md#isinstalled)

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

### installPluginFromGithub

▸ **installPluginFromGithub**(`repo`: *string*, `version`: PluginVersion, `pluginsPath`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`repo` | *string* |
`version` | PluginVersion |
`pluginsPath` | *string* |

**Returns:** *Promise*<void\>

___

### installPluginFromRegistry

▸ **installPluginFromRegistry**(`pluginID`: *string*, `version`: PluginVersion, `pluginsPath`: *string*, `registry?`: [*PluginRegistry*](../classes/plugins_registry.pluginregistry.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`version` | PluginVersion |
`pluginsPath` | *string* |
`registry` | [*PluginRegistry*](../classes/plugins_registry.pluginregistry.md) |

**Returns:** *Promise*<void\>

___

### isInstalled

▸ **isInstalled**(`pluginID`: *string*, `pluginsPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`pluginsPath` | *string* |

**Returns:** *Promise*<boolean\>
