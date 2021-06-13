#!/usr/bin/env -S node -r esbuild-register

import { program } from "commander";
import pkg from "../../package.json";

program.version(pkg.version);

program.command("plugin", "Manage or develop an obsidian plugin");

program.action(() => {
  program.help();
});

program.parse(process.argv);
