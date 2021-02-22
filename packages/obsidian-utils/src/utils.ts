import { Readable } from "stream";
import { promisify } from "util";
import fs from "fs";
import path from "path";

export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const write = promisify(fs.writeFile);
export const fileStats = promisify(fs.stat);

export const readJSON = (filePath: string) =>
  read(filePath, "utf-8").then((contents) => JSON.parse(contents));

export function failIfNot<T = any>(
  condition: T | null | undefined | false | 0,
  message: string
): asserts condition is T {
  if (!condition) throw new Error(message);
}

export function failIf(
  condition: any,
  message: string
): asserts condition is false | null | undefined | 0 {
  if (condition) throw new Error(message);
}

export const to = <T>(p: Promise<T>) => {
  return p.then((v) => [null, v]).catch((e) => [e, null]) as
    | Promise<[null, T]>
    | Promise<[any, null]>;
};

/**
 * Converts a web fetch response to a node readable stream
 */
const resToReadable = (res: Response) => {
  failIfNot(res.body, "Response has no body");
  const reader = res.body.getReader();
  const readable = new Readable();
  readable._read = async () => {
    const { done, value } = await reader.read();
    if (value) readable.push(done ? null : Buffer.from(value));
  };
  return readable;
};

export const toRead = (...pathParts: string[]) =>
  to<string>(read(path.join(...pathParts), "utf-8"));

export const toReadJSON = <T>(...pathParts: string[]) =>
  to<T>(
    read(path.join(...pathParts), "utf-8").then((content) =>
      JSON.parse(content)
    )
  );

export const fetchJSON = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

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
