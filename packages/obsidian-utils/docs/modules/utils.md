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
- [findWindowsObsidianDirectory](utils.md#findwindowsobsidiandirectory)
- [isWSL](utils.md#iswsl)
- [mkdir](utils.md#mkdir)
- [read](utils.md#read)
- [readDir](utils.md#readdir)
- [readJSON](utils.md#readjson)
- [rmdir](utils.md#rmdir)
- [to](utils.md#to)
- [toRead](utils.md#toread)
- [toReadJSON](utils.md#toreadjson)
- [toWrite](utils.md#towrite)
- [windowsToWSLPath](utils.md#windowstowslpath)
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

___

### fetchJSON

▸ `Const`**fetchJSON**(...`args`: [input: RequestInfo, init?: RequestInit]): *Promise*<any\>

Helper to fetch and then convert the result to json

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | [input: RequestInfo, init?: RequestInit] |

**Returns:** *Promise*<any\>

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

___

### fileStats

▸ `Const`**fileStats**(`path`: PathLike, `options?`: StatOptions & { `bigint?`: *false*  }): *Promise*<Stats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | StatOptions & { `bigint?`: *false*  } |

**Returns:** *Promise*<Stats\>

▸ `Const`**fileStats**(`path`: PathLike, `options`: StatOptions & { `bigint`: *true*  }): *Promise*<BigIntStats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | StatOptions & { `bigint`: *true*  } |

**Returns:** *Promise*<BigIntStats\>

▸ `Const`**fileStats**(`path`: PathLike, `options?`: StatOptions): *Promise*<Stats \| BigIntStats\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | StatOptions |

**Returns:** *Promise*<Stats \| BigIntStats\>

___

### findWindowsObsidianDirectory

▸ `Const`**findWindowsObsidianDirectory**(`home`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`home` | *string* |

**Returns:** *string*

___

### isWSL

▸ `Const`**isWSL**(): *null* \| *string*

**Returns:** *null* \| *string*

___

### mkdir

▸ `Const`**mkdir**(`path`: PathLike, `options`: MakeDirectoryOptions & { `recursive`: *true*  }): *Promise*<string \| undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | MakeDirectoryOptions & { `recursive`: *true*  } |

**Returns:** *Promise*<string \| undefined\>

▸ `Const`**mkdir**(`path`: PathLike, `options?`: Mode \| MakeDirectoryOptions & { `recursive?`: *false*  } \| *null*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | Mode \| MakeDirectoryOptions & { `recursive?`: *false*  } \| *null* |

**Returns:** *Promise*<void\>

▸ `Const`**mkdir**(`path`: PathLike, `options?`: Mode \| MakeDirectoryOptions \| *null*): *Promise*<string \| undefined\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | Mode \| MakeDirectoryOptions \| *null* |

**Returns:** *Promise*<string \| undefined\>

___

### read

▸ `Const`**read**(`path`: PathLike \| *number*, `options?`: { `encoding?`: *null* ; `flag?`: *string*  } \| *null*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options?` | { `encoding?`: *null* ; `flag?`: *string*  } \| *null* |

**Returns:** *Promise*<Buffer\>

▸ `Const`**read**(`path`: PathLike \| *number*, `options`: { `encoding`: BufferEncoding ; `flag?`: *string*  } \| *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options` | { `encoding`: BufferEncoding ; `flag?`: *string*  } \| *string* |

**Returns:** *Promise*<string\>

▸ `Const`**read**(`path`: PathLike \| *number*, `options?`: BaseEncodingOptions & { `flag?`: *string*  } \| *string* \| *null*): *Promise*<string \| Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike \| *number* |
`options?` | BaseEncodingOptions & { `flag?`: *string*  } \| *string* \| *null* |

**Returns:** *Promise*<string \| Buffer\>

___

### readDir

▸ `Const`**readDir**(`path`: PathLike, `options?`: { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | { `encoding`: BufferEncoding \| *null* ; `withFileTypes?`: *false*  } \| BufferEncoding \| *null* |

**Returns:** *Promise*<string[]\>

▸ `Const`**readDir**(`path`: PathLike, `options`: *buffer* \| { `encoding`: *buffer* ; `withFileTypes?`: *false*  }): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | *buffer* \| { `encoding`: *buffer* ; `withFileTypes?`: *false*  } |

**Returns:** *Promise*<Buffer[]\>

▸ `Const`**readDir**(`path`: PathLike, `options?`: BaseEncodingOptions & { `withFileTypes?`: *false*  } \| BufferEncoding \| *null*): *Promise*<string[] \| Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | BaseEncodingOptions & { `withFileTypes?`: *false*  } \| BufferEncoding \| *null* |

**Returns:** *Promise*<string[] \| Buffer[]\>

▸ `Const`**readDir**(`path`: PathLike, `options`: BaseEncodingOptions & { `withFileTypes`: *true*  }): *Promise*<Dirent[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options` | BaseEncodingOptions & { `withFileTypes`: *true*  } |

**Returns:** *Promise*<Dirent[]\>

___

### readJSON

▸ `Const`**readJSON**(`filePath`: *string*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** *Promise*<any\>

___

### rmdir

▸ `Const`**rmdir**(`path`: PathLike, `options?`: RmDirOptions): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`path` | PathLike |
`options?` | RmDirOptions |

**Returns:** *Promise*<void\>

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

___

### toRead

▸ `Const`**toRead**(...`pathParts`: *string*[]): *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *string*]\>

Async read pre-wrapped with [to](utils.md#to)

#### Parameters:

Name | Type |
:------ | :------ |
`...pathParts` | *string*[] |

**Returns:** *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *string*]\>

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

___

### toWrite

▸ `Const`**toWrite**(`payload`: *string*, ...`pathParts`: *string*[]): *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *void*]\>

#### Parameters:

Name | Type |
:------ | :------ |
`payload` | *string* |
`...pathParts` | *string*[] |

**Returns:** *Promise*<[*any*, *null*]\> \| *Promise*<[*null*, *void*]\>

___

### windowsToWSLPath

▸ `Const`**windowsToWSLPath**(`filePath`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`filePath` | *string* |

**Returns:** *string*

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
