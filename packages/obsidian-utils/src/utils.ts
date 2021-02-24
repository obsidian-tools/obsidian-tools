/**
 * A collection of meta utils that simplifies some common Node.js tasks.
 *
 * @packageDocumentation
 */

import { Readable } from "stream";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import type { Response as NodeResponse } from "node-fetch";

export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const write = promisify(fs.writeFile);
export const fileStats = promisify(fs.stat);
export const rmdir = promisify(fs.rmdir);
export const readDir = promisify(fs.readdir);
export const copyFile = promisify(fs.copyFile);

export const readJSON = (filePath: string) =>
  read(filePath, "utf-8").then((contents) => JSON.parse(contents));

/** throws an exception if any falsy value is passed */
export function failIfNot<T = any>(
  condition: T | null | undefined | false | 0,
  message: string
): asserts condition is T {
  if (!condition) throw new Error(message);
}

/** Throws an exception if any truthy vault is passed */
export function failIf(
  condition: any,
  message: string
): asserts condition is false | null | undefined | 0 {
  if (condition) throw new Error(message);
}

/**
 * Inspired by `await-to-js`, this is a simple promise result handler that makes error handling
 * async code much less verbose. No `try`/`catch` statements needed!
 **/
export const to = <T>(p: Promise<T>) => {
  return p.then((v) => [null, v]).catch((e) => [e, null]) as
    | Promise<[null, T]>
    | Promise<[any, null]>;
};

/**
 * Converts a web fetch response to a node readable stream. This is needed
 * when piping data from `fetch` (in electron's rendering process) to a writable stream
 */
const resToReadable = (res: Response | NodeResponse) => {
  failIfNot(res.body, "Response has no body");
  if ("pipe" in res.body) {
    return res.body;
  }
  const reader = res.body.getReader();
  const readable = new Readable();
  readable._read = async () => {
    const { done, value } = await reader.read();
    if (value) readable.push(done ? null : Buffer.from(value));
  };
  return readable;
};

/** Async read pre-wrapped with {@link to} */
export const toRead = (...pathParts: string[]) =>
  to<string>(read(path.join(...pathParts), "utf-8"));

export const toWrite = (payload: string, ...pathParts: string[]) =>
  to(write(path.join(...pathParts), payload));

export const toReadJSON = <T>(...pathParts: string[]) =>
  to<T>(
    read(path.join(...pathParts), "utf-8").then((content) =>
      JSON.parse(content)
    )
  );

/** Helper to fetch and then convert the result to json */
export const fetchJSON = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

/**
 * An isomorphic method of downloading a file to disk. Compatible in both
 * electron's render instance and on node.
 */
export const fetchToDisk = (
  input: RequestInfo,
  outPath: string,
  init?: RequestInit
) =>
  fetch(input, init).then(async (res) => {
    const outputFileStream = fs.createWriteStream(outPath);
    const downloadStream = resToReadable(res);
    downloadStream.pipe(outputFileStream);

    return new Promise((resolve, reject) => {
      outputFileStream.on("error", reject);
      downloadStream.on("error", reject);
      downloadStream.on("end", resolve);
    });
  });
