[obsidian-utils](../README.md) / [Exports](../modules.md) / plugin/registry

# Module: plugin/registry

A data structure that reflects obsidian's official plugin registry. It provides a mechanism
to read the registry and get details about specific plugins from the registry.

## Table of contents

### Classes

- [PluginRegistry](../classes/plugin_registry.pluginregistry.md)

### Interfaces

- [PluginRegistryData](../interfaces/plugin_registry.pluginregistrydata.md)
- [PluginRegistryRecord](../interfaces/plugin_registry.pluginregistryrecord.md)

### Functions

- [findPluginInRegistry](plugin_registry.md#findplugininregistry)

## Functions

### findPluginInRegistry

▸ `Const`**findPluginInRegistry**(`pluginID`: *string*): *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |

**Returns:** *Promise*<undefined \| [*PluginRegistryRecord*](../interfaces/plugin_registry.pluginregistryrecord.md)\>
