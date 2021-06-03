const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/obsidian-utils.ts"],
  bundle: true,
  platform: "node",
  external: ["obsidian", "node-fetch"],
  inject: ["./polyfill/fetch.js"],
  define: { fetch: "fetchPolyfill" },
  format: "cjs",
  outfile: "lib/obsidian-utils.js",
  mainFields: ["module", "main"],
  target: "es2019",
  sourcemap: true,
});

esbuild.build({
  entryPoints: ["src/obsidian-utils.ts"],
  bundle: true,
  platform: "node",
  external: ["obsidian", "node-fetch"],
  inject: ["./polyfill/fetch.esm.js"],
  define: { fetch: "fetchPolyfill" },
  format: "esm",
  outfile: "lib/obsidian-utils.esm.js",
  mainFields: ["module", "main"],
  target: "es2019",
  sourcemap: true,
});
