#!/usr/bin/env -S node -r esbuild-register

import { program } from "commander";
import build from "../procedures/build";

interface ProgramOptions {
  ["output-dir"]: string;
  ["esbuild-config"]: string;
}

program
  .arguments("<entryPoint>")
  .option("-o, --output-dir", "path to write build output to", "dist")
  .option(
    "-c, --esbuild-config",
    "path to a config file containing esbuild options"
  )
  .action(async (entryPoint: string, options: ProgramOptions) => {
    await build.exec({
      entryPoint,
      outDir: options["output-dir"],
      esbuildConfig: {},
      esbuildConfigPath: options["esbuild-config"],
    });
  });

program.parse();
