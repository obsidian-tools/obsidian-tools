import * as esbuild from "esbuild";
import builtinModules from "builtin-modules";

export const build = (options: esbuild.BuildOptions) => {
  return esbuild.build({
    banner: {
      js: `/** GENERATED BY OBSIDIAN-PLUGIN-CLI, DO NOT EDIT */`,
    },
    bundle: true,
    platform: "node",
    external: [
      "obsidian",
      "electron",
      "@codemirror/autocomplete",
      "@codemirror/collab",
      "@codemirror/commands",
      "@codemirror/language",
      "@codemirror/lint",
      "@codemirror/search",
      "@codemirror/state",
      "@codemirror/view",
      "@lezer/common",
      "@lezer/highlight",
      "@lezer/lr",
      ...builtinModules,
    ],
    format: "cjs",
    mainFields: ["browser", "module", "main"],
    ...options,
  });
};
