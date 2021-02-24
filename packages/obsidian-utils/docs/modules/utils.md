[obsidian-utils](../README.md) / [Exports](../modules.md) / utils

# Module: utils

A collection of meta utils that simplifies some common Node.js tasks.

## Table of contents

### Functions

- [copyFile](utils.md#copyfile)
- [failIf](utils.md#failif)
- [failIfNot](utils.md#failifnot)
- [fetchJSON](utils.md#fetchjson)
- [fetchToDisk](utils.md#fetchtodisk)
- [fileStats](utils.md#filestats)
- [mkdir](utils.md#mkdir)
- [read](utils.md#read)
- [readDir](utils.md#readdir)
- [readJSON](utils.md#readjson)
- [rmdir](utils.md#rmdir)
- [to](utils.md#to)
- [toRead](utils.md#toread)
- [toReadJSON](utils.md#toreadjson)
- [write](utils.md#write)

## Functions

### copyFile

▸ `Const`**copyFile**(`src`: PathLike, `dst`: PathLike, `flags?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`src` | PathLike |
`dst` | PathLike |
`flags?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [packages/obsidian-utils/src/utils.ts:19](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L19)

___

### failIf

▸ **failIf**(`condition`: *any*, `message`: *string*): asserts condition is undefined \| null \| false \| 0

Throws an exception if any truthy vault is passed

#### Parameters:

Name | Type |
:------ | :------ |
`condition` | *any* |
`message` | *string* |

**Returns:** asserts condition is undefined \| null \| false \| 0

Defined in: [packages/obsidian-utils/src/utils.ts:33](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L33)

___

### failIfNot

▸ **failIfNot**<T\>(`condition`: T \| *null* \| *undefined* \| *false* \| *0*, `message`: *string*): asserts condition is T

throws an exception if any falsy value is passed

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`condition` | T \| *null* \| *undefined* \| *false* \| *0* |
`message` | *string* |

**Returns:** asserts condition is T

Defined in: [packages/obsidian-utils/src/utils.ts:25](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L25)

___

### fetchJSON

▸ `Const`**fetchJSON**(...`args`: [input: RequestInfo, init?: RequestInit]): *Promise*<any\>

Helper to fetch and then convert the result to json

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | [input: RequestInfo, init?: RequestInit] |

**Returns:** *Promise*<any\>

Defined in: [packages/obsidian-utils/src/utils.ts:80](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L80)

___

### fetchToDisk

▸ `Const`**fetchToDisk**(`input`: RequestInfo, `outPath`: *string*, `init?`: RequestInit): *Promise*<unknown\>

An isomorphic method of downloading a file to disk. Compatible in both
electron's render instance and on node.

#### Parameters:

Name | Type |
:------ | :------ |
`input` | RequestInfo |
`outPath` | *string* |
`init?` | RequestInit |

**Returns:** *Promise*<unknown\>

Defined in: [packages/obsidian-utils/src/utils.ts:87](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L87)

___

### fileStats

▸ `Const`**fileStats**(`path`: PathLike, `options?`: StatOptions & { `bigint?`: *false*  }): *Promise*<Stats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | StatOptions & { `bigint?`: *false*  } |

**Returns:** *Promise*<Stats\>

Defined in: [packages/obsidian-utils/src/utils.ts:16](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L16)

▸ `Const`**fileStats**(`path`: PathLike, `options`: StatOptions & { `bigint`: *true*  }): *Promise*<BigIntStats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | StatOptions & { `bigint`: *true*  } |

**Returns:** *Promise*<BigIntStats\>

Defined in: [packages/obsidian-utils/src/utils.ts:16](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L16)

▸ `Const`**fileStats**(`path`: PathLike, `options?`: StatOptions): *Promise*<Stats \| BigIntStats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | StatOptions |

**Returns:** *Promise*<Stats \| BigIntStats\>

Defined in: [packages/obsidian-utils/src/utils.ts:16](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L16)

___

### mkdir

▸ `Const`**mkdir**(`path`: PathLike, `options`: MakeDirectoryOptions & { `recursive`: *true*  }): *Promise*<string \| undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | MakeDirectoryOptions & { `recursive`: *true*  } |

**Returns:** *Promise*<string \| undefined\>

Defined in: [packages/obsidian-utils/src/utils.ts:13](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L13)

▸ `Const`**mkdir**(`path`: PathLike, `options?`: Mode \| MakeDirectoryOptions & { `recursive?`: *false*  } \| *null*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | Mode \| MakeDirectoryOptions & { `recursive?`: *false*  } \| *null* |

**Returns:** *Promise*<void\>

Defined in: [packages/obsidian-utils/src/utils.ts:13](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L13)

▸ `Const`**mkdir**(`path`: PathLike, `options?`: Mode \| MakeDirectoryOptions \| *null*): *Promise*<string \| undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | Mode \| MakeDirectoryOptions \| *null* |

**Returns:** *Promise*<string \| undefined\>

Defined in: [packages/obsidian-utils/src/utils.ts:13](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L13)

___

### read

▸ `Const`**read**(`path`: PathLike \| *number*, `options?`: { `encoding?`: *null* ; `flag?`: *string*  } \| *null*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options?` | { `encoding?`: *null* ; `flag?`: *string*  } \| *null* |

**Returns:** *Promise*<Buffer\>

Defined in: [packages/obsidian-utils/src/utils.ts:14](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L14)

▸ `Const`**read**(`path`: PathLike \| *number*, `options`: { `encoding`: BufferEncoding ; `flag?`: *string*  } \| *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options` | { `encoding`: BufferEncoding ; `flag?`: *string*  } \| *string* |

**Returns:** *Promise*<string\>

Defined in: [packages/obsidian-utils/src/utils.ts:14](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L14)

▸ `Const`**read**(`path`: PathLike \| *number*, `options?`: BaseEncodingOptions & { `flag?`: *string*  } \| *string* \| *null*): *Promise*<string \| Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options?` | BaseEncodingOptions & { `flag?`: *string*  } \| *string* \| *null* |

**Returns:** *Promise*<string \| Buffer\>

Defined in: [packages/obsidian-utils/src/utils.ts:14](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L14)

___

### readDir

▸ `Const`**readDir**(`path`: PathLike, `options?`: { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null* |

**Returns:** *Promise*<string[]\>

Defined in: [packages/obsidian-utils/src/utils.ts:18](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L18)

▸ `Const`**readDir**(`path`: PathLike, `options`: *buffer* \| { `encoding`: *buffer* ; `withFileTypes?`: *false*  }): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | *buffer* \| { `encoding`: *buffer* ; `withFileTypes?`: *false*  } |

**Returns:** *Promise*<Buffer[]\>

Defined in: [packages/obsidian-utils/src/utils.ts:18](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L18)

▸ `Const`**readDir**(`path`: PathLike, `options?`: BaseEncodingOptions & { `withFileTypes?`: *false*  } \| BufferEncoding \| *null*): *Promise*<string[] \| Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | BaseEncodingOptions & { `withFileTypes?`: *false*  } \| BufferEncoding \| *null* |

**Returns:** *Promise*<string[] \| Buffer[]\>

Defined in: [packages/obsidian-utils/src/utils.ts:18](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L18)

▸ `Const`**readDir**(`path`: PathLike, `options`: BaseEncodingOptions & { `withFileTypes`: *true*  }): *Promise*<Dirent[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | BaseEncodingOptions & { `withFileTypes`: *true*  } |

**Returns:** *Promise*<Dirent[]\>

Defined in: [packages/obsidian-utils/src/utils.ts:18](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L18)

___

### readJSON

▸ `Const`**readJSON**(`filePath`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** *Promise*<any\>

Defined in: [packages/obsidian-utils/src/utils.ts:21](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L21)

___

### rmdir

▸ `Const`**rmdir**(`path`: PathLike, `options?`: RmDirOptions): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | RmDirOptions |

**Returns:** *Promise*<void\>

Defined in: [packages/obsidian-utils/src/utils.ts:17](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L17)

___

### to

▸ `Const`**to**<T\>(`p`: *Promise*<T\>): *Promise*<[*null*, T]\> \| *Promise*<[*any*, *null*]\>

Inspired by `await-to-js`, this is a simple promise result handler that makes error handling
async code much less verbose. No `try`/`catch` statements needed!

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`p` | *Promise*<T\> |

**Returns:** *Promise*<[*null*, T]\> \| *Promise*<[*any*, *null*]\>

Defined in: [packages/obsidian-utils/src/utils.ts:44](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L44)

___

### toRead

▸ `Const`**toRead**(...`pathParts`: *string*[]): *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *string*]\>

Async read pre-wrapped with [to](utils.md#to)

#### Parameters:

Name | Type |
:------ | :------ |
`...pathParts` | *string*[] |

**Returns:** *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *string*]\>

Defined in: [packages/obsidian-utils/src/utils.ts:69](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L69)

___

### toReadJSON

▸ `Const`**toReadJSON**<T\>(...`pathParts`: *string*[]): *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, T]\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`...pathParts` | *string*[] |

**Returns:** *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, T]\>

Defined in: [packages/obsidian-utils/src/utils.ts:72](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L72)

___

### write

▸ `Const`**write**(`path`: PathLike \| *number*, `data`: *string* \| NodeJS.ArrayBufferView, `options?`: WriteFileOptions): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`data` | *string* \| NodeJS.ArrayBufferView |
`options?` | WriteFileOptions |

**Returns:** *Promise*<void\>

Defined in: [packages/obsidian-utils/src/utils.ts:15](https://github.com/zephraph/obsidian-tools/blob/a9d0109/packages/obsidian-utils/src/utils.ts#L15)
