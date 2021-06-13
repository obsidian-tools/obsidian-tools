@echo off

node -r esbuild-register "%~dp0\obsidian.ts" %*
