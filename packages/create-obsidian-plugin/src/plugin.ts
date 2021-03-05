import prompts from "prompts";
import fs from "fs";
import { yellow, green, dim, reset } from "ansi-colors";
import dedent from "dedent";
import { cmd } from "./utils/platform";

const capitalize = (word: string) => word[0].toUpperCase() + word.slice(1);
const empty = (v: any) => Boolean(v);

const validatePluginID = (pluginID: string, includeReason = false) => {
  if (fs.existsSync(pluginID) && fs.lstatSync(pluginID).isDirectory()) {
    return includeReason
      ? dedent`
          A directory ${green(pluginID)} already exists

          Either choose a different id or press ${yellow(
            `${cmd} + C`
          )} to cancel`
      : false;
  }
  return (
    !pluginID.includes(" ") ||
    (includeReason ? `The id must not contain spaces` : false)
  );
};

export interface PluginInfo {
  id: string;
  name: string;
  className: string;
  description: string;
  author: string;
  authorUrl: string;
}

export async function prompt(): Promise<PluginInfo> {
  const defaultID = process.argv.slice(2).join("-").toLowerCase();
  prompts.override({
    id: defaultID && validatePluginID(defaultID) ? defaultID : undefined,
  });
  const answers = await prompts(
    [
      {
        type: () => "text",
        name: "id",
        message: `Enter the plugin id ${reset(dim("(lowercase, no spaces)"))}`,
        initial: defaultID,
        format: (text) => text.trim().toLowerCase(),
        validate: (text) => validatePluginID(text, true),
      },
      {
        type: "text",
        name: "name",
        message: "Enter the plugin name",
        // @ts-ignore
        initial: (prev) =>
          prev
            .replace("obsidian-plugin", "")
            .split("-")
            .filter((x: string) => x)
            .map(capitalize)
            .join(" "),
      },
      {
        type: "text",
        name: "description",
        message: "Write a short description of what the plugin does",
      },
      {
        type: "text",
        name: "author",
        message:
          "Enter your name or username you'd like the plugin to show as the author",
        initial: process.env.npm_config_init_author_name,
      },
      {
        type: "text",
        name: "authorUrl",
        message: "Add your website or social media account (optional)",
      },
    ],
    {
      onCancel() {
        process.exit();
      },
    }
  );

  return {
    ...answers,
    className: answers.name.split(" ").filter(empty).map(capitalize).join(""),
  };
}
