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
