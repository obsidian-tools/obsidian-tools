[obsidian-utils](../README.md) / [Exports](../modules.md) / index

# Module: index

A collections of tools to make programmatically interacting with obsidian simpler.

**Note**: This is the only directly importable file. Access to any other module _must_ come from here.

## Usage

**`example`** 
Using the vault and plugin module to find your open vault and install a plugin
from GitHub into it.
```
import { vault, plugin } from 'obsidian-utils'
```
const myVault = await vault.findVault();
await plugin.installFromGithub('pjeby/hot-reload', 'latest', myVault.path)

## Table of contents

### References

- [log](index.md#log)
- [plugin](index.md#plugin)
- [utils](index.md#utils)
- [vault](index.md#vault)

## References

### log

Re-exports: [log](log.md)

___

### plugin

Re-exports: [plugin](plugin.md)

___

### utils

Re-exports: [utils](utils.md)

___

### vault

Re-exports: [vault](vault.md)
