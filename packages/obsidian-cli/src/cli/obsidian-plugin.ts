#!/usr/bin/env -S node -r esbuild-register

import { program } from "commander";

program
  .command("install", "Install a plugin from GitHub or Obsidian's registry")
  .command("build", "Prepare a plugin for release")
  .command("dev", "Develop a plugin against a vault");

program.action(() => {
  program.help();
});

program.parse(process.argv);
