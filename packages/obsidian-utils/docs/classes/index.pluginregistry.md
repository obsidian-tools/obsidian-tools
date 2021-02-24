[obsidian-utils](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / PluginRegistry

# Class: PluginRegistry

[index](../modules/index.md).PluginRegistry

## Table of contents

### Constructors

- [constructor](index.pluginregistry.md#constructor)

### Methods

- [getPlugin](index.pluginregistry.md#getplugin)
- [getRegistry](index.pluginregistry.md#getregistry)

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
