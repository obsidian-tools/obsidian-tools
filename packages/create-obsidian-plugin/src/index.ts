import prompts from "prompts";

interface PluginInfo {
  id: string;
  name: string;
}

prompts.override({
  id: process.argv.slice(2).join("-").toLowerCase() || undefined,
});

(async () => {
  const plugin = await prompts([
    {
      type: () => "text",
      name: "id",
      message: "Enter the plugin id",
      validate: (text) =>
        !text.includes(" ") || "Plugin ID must not contain spaces",
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
          .map((word: string) => word[0].toUpperCase() + word.slice(1))
          .join(" "),
    },
    {
      type: "text",
      name: "description",
      message: "Plugin description",
    },
  ]);
  console.log(plugin);
})();
