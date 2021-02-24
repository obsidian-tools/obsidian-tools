const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: false,
  platform: "node",
  // external: ["obsidian", "node-fetch"],
  inject: ["./polyfill/fetch.js"],
  define: { fetch: "fetchPolyfill" },
  format: "cjs",
  outfile: "lib/index.js",
  mainFields: ["module", "main"],
  target: "es2019",
});
