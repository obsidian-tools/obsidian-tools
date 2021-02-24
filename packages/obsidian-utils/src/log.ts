/**
 * An injectable logger than can be provided by a consuming library
 *
 * `obsidian-utils` itself uses logger itself to provide extra context as to what's going on.
 * Given that it could be consumed in different environments (inside of obsidian, in a cli, etc) when
 * and how to display the logs seems outside the scope of this module. Instead, it provides a `registerLogger`
 * function that provides the ability to set the top level logger and control how it behaves.
 *
 * @packageDocumentation
 */
type LogLevel = "debug" | "log" | "info" | "warn" | "error";
let logger = (level: LogLevel, ...args: any[]): void => {};

/** Allows a consuming library to provide its own logger */
export const registerLogger = (
  fn: (namespace: string, level: LogLevel, ...args: any[]) => void
) => {
  logger = fn.bind(null, "obsidian-utils");
};

export const debug = logger.bind(null, "debug");
export const log = logger.bind(null, "log");
export const info = logger.bind(null, "info");
export const warn = logger.bind(null, "warn");
export const error = logger.bind(null, "error");
