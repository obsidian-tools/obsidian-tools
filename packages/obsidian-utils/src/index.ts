/**
 * A collections of tools to make programmatically interacting with obsidian simpler.
 *
 * ## Usage
 *
 * @example
 *
 * Using the vault and plugin module to find your open vault and install a plugin
 * from GitHub into it.
 *
 * ```
 * import { vault, plugin } from 'obsidian-utils'
 * const myVault = await vault.findVault();
 * await plugin.installFromGithub('pjeby/hot-reload', 'latest', myVault.path)
 * ```
 *
 * @packageDocumentation
 */

export * from "./plugin/index";
export * from "./vault";
export * from "./utils";
export { registerLogger } from "./log";
