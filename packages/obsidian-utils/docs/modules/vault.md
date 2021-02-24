[obsidian-utils](../README.md) / [Exports](../modules.md) / vault

# Module: vault

A collection of tools for working with or locating vaults

## Table of contents

### Functions

- [findVault](vault.md#findvault)
- [isVault](vault.md#isvault)

## Functions

### findVault

▸ `Const`**findVault**(`vaultPath?`: *string*): *Promise*<Vault[]\>

Attempts to find where your obsidian vaults are by locating obsidian's app config. It's relatively reliable
on Windows and OSX, but there may be issues on linux and will definitely be issues on weird platforms.
PRs welcome.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vaultPath?` | *string* | A path to an Obsidian vault (which, at the very least contains a .obsidian directory)    |

**Returns:** *Promise*<Vault[]\>

Defined in: [packages/obsidian-utils/src/vault.ts:66](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/vault.ts#L66)

___

### isVault

▸ `Const`**isVault**(`vaultPath`: *any*): *boolean*

Determines if the given path is a path to a vault

#### Parameters:

Name | Type |
:------ | :------ |
`vaultPath` | *any* |

**Returns:** *boolean*

Defined in: [packages/obsidian-utils/src/vault.ts:32](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/vault.ts#L32)
