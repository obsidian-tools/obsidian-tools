[obsidian-utils](../README.md) / [Exports](../modules.md) / obsidian-utils

# Module: obsidian-utils

A collections of tools to make programmatically interacting with obsidian simpler.

## Usage

**`example`** 

Use the utils to find your open vault and install a plugin from GitHub into it.

```
import { findVault, installPluginFromGithub } from 'obsidian-utils'
const myVault = await findVault();
await installPluginFromGithub('pjeby/hot-reload', 'latest', myVault.path)
```

## Table of contents

### References

- [registerLogger](obsidian_utils.md#registerlogger)

### Classes

- [PluginRegistry](../classes/obsidian_utils.pluginregistry.md)

### Interfaces

- [InstalledPluginInfo](../interfaces/obsidian_utils.installedplugininfo.md)
- [PluginRegistryData](../interfaces/obsidian_utils.pluginregistrydata.md)
- [PluginRegistryRecord](../interfaces/obsidian_utils.pluginregistryrecord.md)

### Functions

- [copyFile](obsidian_utils.md#copyfile)
- [failIf](obsidian_utils.md#failif)
- [failIfNot](obsidian_utils.md#failifnot)
- [fetchJSON](obsidian_utils.md#fetchjson)
- [fetchToDisk](obsidian_utils.md#fetchtodisk)
- [fileStats](obsidian_utils.md#filestats)
- [findVault](obsidian_utils.md#findvault)
- [getInfoOnInstalledPlugin](obsidian_utils.md#getinfooninstalledplugin)
- [installLocalPlugin](obsidian_utils.md#installlocalplugin)
- [installPluginFromGithub](obsidian_utils.md#installpluginfromgithub)
- [installPluginFromRegistry](obsidian_utils.md#installpluginfromregistry)
- [isPluginInstalled](obsidian_utils.md#isplugininstalled)
- [isVault](obsidian_utils.md#isvault)
- [mkdir](obsidian_utils.md#mkdir)
- [read](obsidian_utils.md#read)
- [readDir](obsidian_utils.md#readdir)
- [readJSON](obsidian_utils.md#readjson)
- [rmdir](obsidian_utils.md#rmdir)
- [to](obsidian_utils.md#to)
- [toRead](obsidian_utils.md#toread)
- [toReadJSON](obsidian_utils.md#toreadjson)
- [toWrite](obsidian_utils.md#towrite)
- [vaultPathToPluginsPath](obsidian_utils.md#vaultpathtopluginspath)
- [write](obsidian_utils.md#write)

## References

### registerLogger

Re-exports: [registerLogger](log.md#registerlogger)

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

___

### getInfoOnInstalledPlugin

▸ **getInfoOnInstalledPlugin**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

Gets information about an installed plugin including the contents of
its manifest.json, data.json (if it exists), and when the last time the
plugin was updated on disk.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`pluginID` | *string* | The ID of the plugin to read    |
`vaultPath` | *string* | Path to the plugins directory in your vault. Usually something like `/path/to/vault/.obsidian/plugins`.   |

**Returns:** *Promise*<[*InstalledPluginInfo*](../interfaces/plugin_local.installedplugininfo.md)\>

___

### installLocalPlugin

▸ **installLocalPlugin**(`pluginPath`: *string*, `vaultPath`: *string*): *Promise*<void\>

Installs a plugin from the file system to a specified vault

#### Parameters:

Name | Type |
:------ | :------ |
`pluginPath` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<void\>

___

### installPluginFromGithub

▸ **installPluginFromGithub**(`repo`: [*Repo*](types.md#repo), `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*): *Promise*<void\>

Given a repo short code, version, and the vault to install a plugin with, this
function downloads the plugin from GitHub's releases and adds it to the specified
vault.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`repo` | [*Repo*](types.md#repo) | A short code reference a github repo formatted like `owner/repoName`   |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) | Latest or a semver like 1.0.0   |
`vaultPath` | *string* | Path to the vault in which the plugin should be installed    |

**Returns:** *Promise*<void\>

___

### installPluginFromRegistry

▸ **installPluginFromRegistry**(`pluginID`: *string*, `version`: [*GitHubPluginVersion*](types.md#githubpluginversion), `vaultPath`: *string*, `registry?`: [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`version` | [*GitHubPluginVersion*](types.md#githubpluginversion) |
`vaultPath` | *string* |
`registry` | [*PluginRegistry*](../classes/plugin_registry.pluginregistry.md) |

**Returns:** *Promise*<void\>

___

### isPluginInstalled

▸ **isPluginInstalled**(`pluginID`: *string*, `vaultPath`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`pluginID` | *string* |
`vaultPath` | *string* |

**Returns:** *Promise*<boolean\>

___

### isVault

▸ `Const`**isVault**(`vaultPath`: *any*): *boolean*

Determines if the given path is a path to a vault

#### Parameters:

Name | Type |
:------ | :------ |
`vaultPath` | *any* |

**Returns:** *boolean*

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

Async read pre-wrapped with [to](obsidian_utils.md#to)

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

### vaultPathToPluginsPath

▸ `Const`**vaultPathToPluginsPath**(`vaultPath`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`vaultPath` | *string* |

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
