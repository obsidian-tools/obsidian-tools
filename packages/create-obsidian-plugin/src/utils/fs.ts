import { promisify } from "util";
import fs from "fs";

export const write = promisify(fs.writeFile);
export const read = promisify(fs.readFile);
export const mkdir = promisify(fs.mkdir);
