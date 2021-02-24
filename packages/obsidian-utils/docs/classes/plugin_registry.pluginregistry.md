[obsidian-utils](../README.md) / [Exports](../modules.md) / [plugin/registry](../modules/plugin_registry.md) / PluginRegistry

# Class: PluginRegistry

[plugin/registry](../modules/plugin_registry.md).PluginRegistry

## Table of contents

### Constructors

- [constructor](plugin_registry.pluginregistry.md#constructor)

### Methods

- [getPlugin](plugin_registry.pluginregistry.md#getplugin)
- [getRegistry](plugin_registry.pluginregistry.md#getregistry)

## Constructors

### constructor

\+ **new PluginRegistry**(`registryURL?`: *string*): [*PluginRegistry*](plugin_registry.pluginregistry.md)

#### Parameters:

Name | Type |
:------ | :------ |
`registryURL` | *string* |

**Returns:** [*PluginRegistry*](plugin_registry.pluginregistry.md)

Defined in: packages/obsidian-utils/src/plugin/registry.ts:32

## Methods

### getPlugin

▸ **getPlugin**(`pluginID`: *string*): *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |

**Returns:** *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

Defined in: packages/obsidian-utils/src/plugin/registry.ts:56

___

### getRegistry

▸ **getRegistry**(): *Promise*<[*PluginRegistryData*](../interfaces/plugin_registry.pluginregistrydata.md)\>

**Returns:** *Promise*<[*PluginRegistryData*](../interfaces/plugin_registry.pluginregistrydata.md)\>

Defined in: packages/obsidian-utils/src/plugin/registry.ts:48
