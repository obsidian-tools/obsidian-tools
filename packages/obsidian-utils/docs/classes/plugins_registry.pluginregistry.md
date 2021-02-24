[obsidian-utils](../README.md) / [Exports](../modules.md) / [plugins/registry](../modules/plugins_registry.md) / PluginRegistry

# Class: PluginRegistry

[plugins/registry](../modules/plugins_registry.md).PluginRegistry

## Table of contents

### Constructors

- [constructor](plugins_registry.pluginregistry.md#constructor)

### Methods

- [getPlugin](plugins_registry.pluginregistry.md#getplugin)
- [getRegistry](plugins_registry.pluginregistry.md#getregistry)

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
