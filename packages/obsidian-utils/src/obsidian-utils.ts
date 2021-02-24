/**
 * A collections of tools to make programmatically interacting with obsidian simpler.
 *
 * ## Usage
 *
 * @example
 *
 * Use the utils to find your open vault and install a plugin from GitHub into it.
 *
 * ```
 * import { findVault, installPluginFromGithub } from 'obsidian-utils'
 * const myVault = await findVault();
 * await installPluginFromGithub('pjeby/hot-reload', 'latest', myVault.path)
 * ```
 *
 * @packageDocumentation
 */

export * from "./plugin";
export * from "./vault";
export * from "./utils";
export { registerLogger } from "./log";
