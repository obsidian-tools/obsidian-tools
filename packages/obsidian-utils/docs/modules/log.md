[obsidian-utils](../README.md) / [Exports](../modules.md) / log

# Module: log

An injectable logger than can be provided by a consuming library

`obsidian-utils` itself uses logger itself to provide extra context as to what's going on.
Given that it could be consumed in different environments (inside of obsidian, in a cli, etc) when
and how to display the logs seems outside the scope of this module. Instead, it provides a `registerLogger`
function that provides the ability to set the top level logger and control how it behaves.

## Table of contents

### Functions

- [debug](log.md#debug)
- [error](log.md#error)
- [info](log.md#info)
- [log](log.md#log)
- [registerLogger](log.md#registerlogger)
- [warn](log.md#warn)

## Functions

### debug

▸ `Const`**debug**(...`args`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:21](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L21)

___

### error

▸ `Const`**error**(...`args`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:25](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L25)

___

### info

▸ `Const`**info**(...`args`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:23](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L23)

___

### log

▸ `Const`**log**(...`args`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:22](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L22)

___

### registerLogger

▸ `Const`**registerLogger**(`fn`: (`namespace`: *string*, `level`: LogLevel, ...`args`: *any*[]) => *void*): *void*

Allows a consuming library to provide its own logger

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`namespace`: *string*, `level`: LogLevel, ...`args`: *any*[]) => *void* |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:15](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L15)

___

### warn

▸ `Const`**warn**(...`args`: *any*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** *void*

Defined in: [packages/obsidian-utils/src/log.ts:24](https://github.com/zephraph/obsidian-tools/blob/646e643/packages/obsidian-utils/src/log.ts#L24)
