import { PluginInfo, prompt } from "./plugin";
import { renderFile } from "ejs";
import path from "path";
import { write, mkdir } from "./utils/fs";
import { format } from "prettier";
import { install, runCommandText } from "./utils/platform";
import dedent from "dedent";
import { green, cyan, yellow } from "ansi-colors";
import fs from "fs";

const newline = () => console.log();

const pluginPath = (plugin: PluginInfo, ...subPaths: string[]) =>
  path.join(process.cwd(), plugin.id, ...subPaths);

const makeWriteTemplate = (plugin: PluginInfo) => async (
  name: string,
  relativePathToProjectRoot = ""
) => {
  const content = await renderFile(
    path.join(__dirname, "templates", `${name}.ejs`),
    { plugin },
    { rmWhitespace: true }
  );
  const destinationDir = pluginPath(plugin, relativePathToProjectRoot);

  if (!fs.existsSync(destinationDir)) {
    await mkdir(destinationDir, { recursive: true });
  }

  await write(
    pluginPath(plugin, relativePathToProjectRoot, name),
    path.extname(name) !== "" ? format(content, { filepath: name }) : content
  );
};

(async () => {
  let plugin = await prompt();
  const writeTemplate = makeWriteTemplate(plugin);

  console.log(`Creating a new obsidian plugin at ${green(`./${plugin.id}`)}`);

  await writeTemplate("manifest.json");
  await writeTemplate("package.json");
  await writeTemplate("main.ts", "src");
  await writeTemplate("tsconfig.json");
  await writeTemplate("types.d.ts");
  await writeTemplate(".gitignore");

  await write(
    pluginPath(plugin, "LICENSE"),
    (await import(`spdx-license-list/licenses/${plugin.license}`)).licenseText
  );

  if (plugin.hasStylesheet) {
    await writeTemplate("styles.css", "src");
  }

  console.log("Installing plugin dependencies, this may take a little while.");

  const installProcess = install(pluginPath(plugin));
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
