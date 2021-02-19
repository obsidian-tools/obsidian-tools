import { Readable } from "stream";
import { promisify } from "util";
import fs from "fs";
import path from "path";

export const mkdir = promisify(fs.mkdir);
export const read = promisify(fs.readFile);
export const fileStats = promisify(fs.stat);

export const failIf = (condition: boolean, message: string) => {
  if (condition) throw new Error(message);
};

export const to = <T>(p: Promise<T>) => {
  return p.then((v) => [null, v]).catch((e) => [e, null]) as
    | Promise<[null, T]>
    | Promise<[any, null]>;
};

/**
 * Converts a web fetch response to a node readable stream
 */
export const resToReadable = (res: Response) => {
  const reader = res.body.getReader();
  const readable = new Readable();
  readable._read = async () => {
    const { done, value } = await reader.read();
    readable.push(done ? null : Buffer.from(value));
  };
  return readable;
};

export const toReadFromPath = (...pathParts: string[]) =>
  to(read(path.join(...pathParts), "utf-8"));
