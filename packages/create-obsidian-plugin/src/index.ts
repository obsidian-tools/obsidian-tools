import { PluginInfo, prompt } from "./plugin";
import { renderFile } from "ejs";
import path from "path";
import { write, mkdir } from "./utils/fs";
import { format } from "prettier";
import { run, runCommandText, installCommandText } from "./utils/platform";
import dedent from "dedent";
import { green, cyan, yellow } from "ansi-colors";
import fs from "fs";

const newline = () => console.log();

const pluginPath = (plugin: PluginInfo, ...subPaths: string[]) =>
  path.join(process.cwd(), plugin.id, ...subPaths);

interface WriteTemplateOptions {
  subPath?: string;
  templateData?: Record<string, unknown>;
}

const makeWriteTemplate = (plugin: PluginInfo) => async (
  name: string,
  { subPath = "", templateData = {} }: WriteTemplateOptions = {}
) => {
  const content = await renderFile(
    path.join(__dirname, "templates", `${name}.ejs`),
    { plugin, ...templateData },
    { rmWhitespace: true }
  );
  const destinationDir = pluginPath(plugin, subPath);

  if (!fs.existsSync(destinationDir)) {
    await mkdir(destinationDir, { recursive: true });
  }

  await write(
    pluginPath(plugin, subPath, name),
    path.extname(name) !== "" ? format(content, { filepath: name }) : content
  );
};

(async () => {
  let plugin = await prompt();
  const writeTemplate = makeWriteTemplate(plugin);

  console.log(`Creating a new obsidian plugin at ${green(`./${plugin.id}`)}`);

  await writeTemplate("manifest.json");
  await writeTemplate("package.json");
  await writeTemplate("main.ts", { subPath: "src" });
  await writeTemplate("tsconfig.json");
  await writeTemplate("types.d.ts");
  await writeTemplate(".gitignore");
  await writeTemplate("README.md", {
    templateData: {
      platform: {
        build: runCommandText("build"),
        dev: runCommandText("dev"),
        install: installCommandText,
      },
    },
  });

  await write(
    pluginPath(plugin, "LICENSE"),
    (await import(`spdx-license-list/licenses/${plugin.license}`)).licenseText
  );

  if (plugin.hasStylesheet) {
    await writeTemplate("styles.css", { subPath: "src" });
  }

  console.log("Installing plugin dependencies, this may take a little while.");

  const installProcess = run("install", pluginPath(plugin));
  installProcess.stdout?.pipe(process.stdout);

  await installProcess;

  newline();

  console.log(dedent`
    To get started developing on your plugin run

      ${cyan(`cd ${plugin.id}`)}
      ${cyan(runCommandText("dev"))}

    ${yellow("Please check your LICENSE file to see if any updates are needed")}
  `);

  newline();
})();
