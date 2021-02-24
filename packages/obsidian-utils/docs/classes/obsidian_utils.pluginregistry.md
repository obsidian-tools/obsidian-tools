[obsidian-utils](../README.md) / [Exports](../modules.md) / [obsidian-utils](../modules/obsidian_utils.md) / PluginRegistry

# Class: PluginRegistry

[obsidian-utils](../modules/obsidian_utils.md).PluginRegistry

## Table of contents

### Constructors

- [constructor](obsidian_utils.pluginregistry.md#constructor)

### Methods

- [getPlugin](obsidian_utils.pluginregistry.md#getplugin)
- [getRegistry](obsidian_utils.pluginregistry.md#getregistry)

## Constructors

### constructor

\+ **new PluginRegistry**(`registryURL?`: *string*): [*PluginRegistry*](plugin_registry.pluginregistry.md)

#### Parameters:

Name | Type |
:------ | :------ |
`registryURL` | *string* |

**Returns:** [*PluginRegistry*](plugin_registry.pluginregistry.md)

## Methods

### getPlugin

▸ **getPlugin**(`pluginID`: *string*): *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |

**Returns:** *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

___

### getRegistry

▸ **getRegistry**(): *Promise*<[*PluginRegistryData*](../interfaces/plugin_registry.pluginregistrydata.md)\>

**Returns:** *Promise*<[*PluginRegistryData*](../interfaces/plugin_registry.pluginregistrydata.md)\>
