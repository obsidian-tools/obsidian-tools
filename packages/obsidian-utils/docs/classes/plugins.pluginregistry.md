[obsidian-utils](../README.md) / [Exports](../modules.md) / [plugins](../modules/plugins.md) / PluginRegistry

# Class: PluginRegistry

[plugins](../modules/plugins.md).PluginRegistry

## Table of contents

### Constructors

- [constructor](plugins.pluginregistry.md#constructor)

### Methods

- [getPlugin](plugins.pluginregistry.md#getplugin)
- [getRegistry](plugins.pluginregistry.md#getregistry)

## Constructors

### constructor

\+ **new PluginRegistry**(`registryURL?`: *string*): [*PluginRegistry*](plugins_registry.pluginregistry.md)

#### Parameters:

Name | Type |
:------ | :------ |
`registryURL` | *string* |

**Returns:** [*PluginRegistry*](plugins_registry.pluginregistry.md)

## Methods

### getPlugin

▸ **getPlugin**(`pluginID`: *string*): *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugins_registry.pluginregistryrecord.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |

**Returns:** *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugins_registry.pluginregistryrecord.md)\>

___

### getRegistry

▸ **getRegistry**(): *Promise*<[*PluginRegistryData*](../interfaces/plugins_registry.pluginregistrydata.md)\>

**Returns:** *Promise*<[*PluginRegistryData*](../interfaces/plugins_registry.pluginregistrydata.md)\>
