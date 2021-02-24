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
type LogLevel = "debug" | "info" | "warn" | "error";
let logger = (level: LogLevel, ...args: any[]): void => {};

/** Allows a consuming library to provide its own logger */
export const registerLogger = (
  fn: (namespace: string, level: LogLevel, ...args: any[]) => void
) => {
  logger = (level: LogLevel, ...args: any[]) => {
    fn("obsidian-utils", level, ...args);
  };
};

export const debug = (...args: any[]) => logger("debug", ...args);
export const info = (...args: any[]) => logger("info", ...args);
export const warn = (...args: any[]) => logger("warn", ...args);
export const error = (...args: any[]) => logger("error", ...args);
