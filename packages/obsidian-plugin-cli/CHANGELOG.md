# v0.9.0 (Sun Feb 05 2023)

#### 🚀 Enhancement

- Add more builtins from sample plugin [#79](https://github.com/obsidian-tools/obsidian-tools/pull/79) ([@zephraph](https://github.com/zephraph))

#### 🐛 Bug Fix

- Merge branch 'main' into add-more-builtins ([@zephraph](https://github.com/zephraph))
- Add more builtins from sample plugin ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.8.3 (Sun Feb 05 2023)

#### 🐛 Bug Fix

- Update definitelyTyped [#78](https://github.com/obsidian-tools/obsidian-tools/pull/78) ([@renovate[bot]](https://github.com/renovate[bot]))
- Update definitelyTyped ([@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 1

- [@renovate[bot]](https://github.com/renovate[bot])

---

# v0.8.2 (Sun Feb 05 2023)

#### 🐛 Bug Fix

- Update dependency @types/prompts to v2.4.1 ([@renovate[bot]](https://github.com/renovate[bot]))
- Pin dependencies ([@renovate-bot](https://github.com/renovate-bot))

#### 🏠 Internal

- Update dependency @types/node-fetch to v2.6.2 [#62](https://github.com/obsidian-tools/obsidian-tools/pull/62) ([@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency @types/semver to v7.3.13 [#64](https://github.com/obsidian-tools/obsidian-tools/pull/64) ([@renovate[bot]](https://github.com/renovate[bot]))
- Update dependency @types/prompts to v2.4.1 [#63](https://github.com/obsidian-tools/obsidian-tools/pull/63) ([@renovate[bot]](https://github.com/renovate[bot]))
- Pin dependencies [#57](https://github.com/obsidian-tools/obsidian-tools/pull/57) ([@renovate-bot](https://github.com/renovate-bot) [@renovate[bot]](https://github.com/renovate[bot]))

#### Authors: 2

- [@renovate[bot]](https://github.com/renovate[bot])
- Mend Renovate ([@renovate-bot](https://github.com/renovate-bot))

---

# v0.8.1 (Tue Oct 05 2021)

#### 🐛 Bug Fix

- Make electron an external dependency [#55](https://github.com/obsidian-tools/obsidian-tools/pull/55) ([@zephraph](https://github.com/zephraph))
- Make electron an external dependency ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.8.0 (Sun Jun 06 2021)

#### 🚀 Enhancement

- Add install to plugin [#47](https://github.com/zephraph/obsidian-tools/pull/47) ([@zephraph](https://github.com/zephraph))

#### 🐛 Bug Fix

- Merge branch 'main' into add-install-to-plugin ([@zephraph](https://github.com/zephraph))
- Add an install command ([@zephraph](https://github.com/zephraph))
- WIP ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.7.0 (Sun Jun 06 2021)

#### 🐛 Bug Fix

- Merge branch 'main' into wsl-vault-support ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.6.1 (Fri Jun 04 2021)

#### 🐛 Bug Fix

- Bump esbuild version [#51](https://github.com/zephraph/obsidian-tools/pull/51) ([@zephraph](https://github.com/zephraph))
- Fix type failures ([@zephraph](https://github.com/zephraph))
- Bump esbuild version ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.5.0 (Wed Mar 10 2021)

#### 🚀 Enhancement

- Add CSS support [#40](https://github.com/zephraph/obsidian-tools/pull/40) ([@zephraph](https://github.com/zephraph))

#### 🐛 Bug Fix

- Add CSS support ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.4.5 (Sun Feb 28 2021)

#### 🐛 Bug Fix

- Minify output of "obsidian-plugin build" [#35](https://github.com/zephraph/obsidian-tools/pull/35) ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Minify output of "obsidian-plugin build" ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.4.4 (Sun Feb 28 2021)

#### 🐛 Bug Fix

- improve instructions for enabling hot reload plugin [#36](https://github.com/zephraph/obsidian-tools/pull/36) ([@hipstersmoothie](https://github.com/hipstersmoothie))
- improve instructions for enabling hot reload plugin ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v0.4.3 (Thu Feb 25 2021)

#### 🐛 Bug Fix

- Ensure entrypoint gets properly passed [#34](https://github.com/zephraph/obsidian-tools/pull/34) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.4.2 (Thu Feb 25 2021)

#### 🐛 Bug Fix

- Fix esbuild error [#33](https://github.com/zephraph/obsidian-tools/pull/33) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.4.1 (Thu Feb 25 2021)

### Release Notes

#### Support esbuild config files, change esbuild-override to esbuild-config ([#32](https://github.com/zephraph/obsidian-tools/pull/32))

This release introduces the ability to automatically include config for esbuild without having to pass the option via the command line. All you need to do is create a `esbuild.config.json` (or any other format supported by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)) and it'll automatically be included in your build. You can still manually specify a path to the config using `--esbuild-config`. 

This release also updates the default resolution strategy that esbuild will use to find modules. The new order is `browser`, `module`, `main`.  You can learn more by reading esbuild's [main fields](https://esbuild.github.io/api/#main-fields) docs and you can also override this option by specifying you're own `mainFields` options in your esbuild config. 

💥 BREAKING CHANGES 💥 

The `--esbuild-override` command is now `--esbuild-config`

---

#### 🐛 Bug Fix

- Support esbuild config files, change esbuild-override to esbuild-config [#32](https://github.com/zephraph/obsidian-tools/pull/32) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.4.0 (Wed Feb 24 2021)

#### 🚀 Enhancement

- Example `obsidian-utils` so that each function is individually importable... again. [#31](https://github.com/zephraph/obsidian-tools/pull/31) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.3.0 (Wed Feb 24 2021)

#### 🚀 Enhancement

- Add hot reloading to dev build [#30](https://github.com/zephraph/obsidian-tools/pull/30) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.2.0 (Wed Feb 24 2021)

#### 🚀 Enhancement

- Update obsidian-plugin-cli to use new utils [#29](https://github.com/zephraph/obsidian-tools/pull/29) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.1.1 (Mon Feb 22 2021)

#### ⚠️ Pushed to `main`

- Update argument styles and docs ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.1.0 (Mon Feb 22 2021)

#### 🚀 Enhancement

- Add notification when update is available [#26](https://github.com/zephraph/obsidian-tools/pull/26) ([@zephraph](https://github.com/zephraph))

#### 🐛 Bug Fix

- Add notification when update is available ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.0.3 (Mon Feb 22 2021)

#### 🐛 Bug Fix

- Infer or prompt for vault path [#24](https://github.com/zephraph/obsidian-tools/pull/24) ([@zephraph](https://github.com/zephraph))
- Update obsidian utils to the latest ([@zephraph](https://github.com/zephraph))
- Infer or prompt for path ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# v0.0.2 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- Prepare for release ([@zephraph](https://github.com/zephraph))
- Add cli tool ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))
