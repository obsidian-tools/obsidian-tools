/**
 * A collections of tools to make programmatically interacting with obsidian simpler.
 *
 * **Note**: This is the only directly importable file. Access to any other module _must_ come from here.
 *
 * ## Usage
 *
 * @example
 * Using the vault and plugin module to find your open vault and install a plugin
 * from GitHub into it.
 * ```
 * import { vault, plugin } from 'obsidian-utils'
 * ```
 * const myVault = await vault.findVault();
 * await plugin.installFromGithub('pjeby/hot-reload', 'latest', myVault.path)
 *
 * @packageDocumentation
 */

export * as plugin from "./plugin";
export * as vault from "./vault";
export * as utils from "./utils";
export * as log from "./log";
