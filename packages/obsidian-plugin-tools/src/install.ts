import { PluginRegistry } from "./registry";
import { failIf, mkdir, resToReadable, to } from "./utils";
import log from "./log";
import fs from "fs";
import path from "path";

export async function installPlugin(
  registry: PluginRegistry,
  pluginsPath: string,
  pluginID: string,
  version: string
) {
  log.info(`Attempting to install ${pluginID}`);

  const pluginPath = path.join(pluginsPath, pluginID);

  log.debug("Trying to retrieve", pluginID, "from plugin registry");
  const plugin = await registry.getPlugin(pluginID);

  failIf(
    !plugin,
    `Unable to install ${plugin}, it wasn't found in the registry.`
  );

  log.success(pluginID, "found in plugin registry");

  log.info("trying to fetch plugin metadata from GitHub");

  // docs: https://docs.github.com/en/rest/reference/repos#get-a-release-by-tag-name
  const [pluginReleaseFetchError, pluginReleaseInfo] = await to(
    fetch(
      `https://api.github.com/repos/${plugin.repo}/releases/tags/${version}`,
      {
        method: "GET",
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    ).then((response) => response.json())
  );

  failIf(
    pluginReleaseFetchError,
    `Failed to get release information from GitHub. You should install this plugin manually.`
  );

  log.success(`retrieved release info from ${plugin.repo}`);

  log.debug("Creating plugin directory if it doesn't exist...");
  if (!fs.existsSync(pluginPath)) {
    await mkdir(pluginPath, { recursive: true });
    log.success("plugin directory successfully created");
  }

  await Promise.all(
    pluginReleaseInfo.assets
      .filter(
        (asset: any) =>
          asset.name.endsWith(".js") || asset.name.endsWith(".json")
      )
      .map((asset: any) =>
        fetch(asset.browser_download_url).then(async (res) => {
          const outputFileStream = fs.createWriteStream(
            path.join(pluginPath, asset.name)
          );
          const downloadStream = resToReadable(res);
          downloadStream.pipe(outputFileStream);

          return new Promise((resolve, reject) => {
            outputFileStream.on("error", reject);
            downloadStream.on("error", reject);
            downloadStream.on("end", resolve);
          });
        })
      )
  );
  log.success(`${pluginID} successfully installed`);
}
