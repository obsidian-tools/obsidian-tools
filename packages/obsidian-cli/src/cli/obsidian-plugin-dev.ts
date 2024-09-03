#!/usr/bin/env -S node -r esbuild-register

import { program } from "commander";

program.action(() => {
  program.help();
});

program.parse(process.argv);
