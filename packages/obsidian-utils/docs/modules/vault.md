[obsidian-utils](../README.md) / [Exports](../modules.md) / vault

# Module: vault

A collection of tools for working with or locating vaults

## Table of contents

### Interfaces

- [Vault](../interfaces/vault.vault-1.md)

### Functions

- [findVault](vault.md#findvault)
- [isVault](vault.md#isvault)

## Functions

### findVault

▸ `Const`**findVault**(`vaultPath?`: *string*): *Promise*<[*Vault*](../interfaces/vault.vault-1.md)[]\>

Attempts to find where your obsidian vaults are by locating obsidian's app config. It's relatively reliable
on Windows and OSX, but there may be issues on linux and will definitely be issues on weird platforms.
PRs welcome.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vaultPath?` | *string* | A path to an Obsidian vault (which, at the very least contains a .obsidian directory)    |

**Returns:** *Promise*<[*Vault*](../interfaces/vault.vault-1.md)[]\>

___

### isVault

▸ `Const`**isVault**(`vaultPath`: *any*): *boolean*

Determines if the given path is a path to a vault

#### Parameters:

Name | Type |
:------ | :------ |
`vaultPath` | *any* |

**Returns:** *boolean*
