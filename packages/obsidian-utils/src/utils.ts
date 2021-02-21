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
const resToReadable = (res: Response) => {
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
