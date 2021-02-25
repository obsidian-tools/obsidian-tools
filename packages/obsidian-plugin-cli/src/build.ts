import * as esbuild from "esbuild";

export const build = (options: esbuild.BuildOptions) => {
  return esbuild.build({
    bundle: true,
    platform: "node",
    external: ["obsidian"],
    format: "cjs",
    mainFields: ["browser", "module", "main"],
    ...options,
  });
};
