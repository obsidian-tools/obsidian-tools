[obsidian-utils](../README.md) / [Exports](../modules.md) / plugins/install

# Module: plugins/install

## Table of contents

### Functions

- [installPluginFromGithub](plugins_install.md#installpluginfromgithub)
- [installPluginFromRegistry](plugins_install.md#installpluginfromregistry)

## Functions

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
