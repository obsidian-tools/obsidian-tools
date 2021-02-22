const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  external: ["obsidian"],
  format: "cjs",
  outfile: "lib/index.js",
  mainFields: ["module", "main"],
  target: "es2019",
});
