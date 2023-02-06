import { procedure } from "@zephraph/procedure";
import { esbuildConfig, manifest } from "./shared";


export default procedure('dev', {
  prompts: true,
  esbuildConfigPath: '',
  outDir: '',
  entryPoint: ''
}).load(esbuildConfig)
  .load(manifest)
