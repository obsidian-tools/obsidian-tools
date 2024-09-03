#!/usr/bin/env -S node -r esbuild-register

// import { program } from "commander";
import pkg from "../../package.json";
import { Cli } from 'clipanion';
import * as commands from './commands';

const [node, app, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: 'obsidian-cli',
  binaryName: `obsidian`,
  binaryVersion: pkg.version,
})

Object.entries(commands)
  .filter(([name]) => name !== 'default')
  .forEach(([_, command]) => {
    cli.register(command);
  })

cli.runExit(args);
