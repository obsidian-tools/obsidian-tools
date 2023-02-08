import { procedure } from "@zephraph/procedure";
import { esbuildConfig, manifest } from "./shared";
import * as esbuild from 'esbuild'
import promptForVault, { Context as VaultContext } from './promptForVault'

type Context = {
  entryPoint: string
  esbuildConfigPath: string
  esbuildConfig: esbuild.BuildOptions;
  vaultPath: string
}

export default procedure<Context>('dev')
  .load(esbuildConfig)
  .load(manifest)
  .do(promptForVault)
