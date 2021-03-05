# (Fri Mar 05 2021)

#### 🚀 Enhancement

- `create-obsidian-plugin@0.1.0`
  - Initial, working `create-obsidian-plugin` [#38](https://github.com/zephraph/obsidian-tools/pull/38) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 28 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.4.5`
  - Minify output of "obsidian-plugin build" [#35](https://github.com/zephraph/obsidian-tools/pull/35) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 28 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.4.4`
  - improve instructions for enabling hot reload plugin [#36](https://github.com/zephraph/obsidian-tools/pull/36) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Thu Feb 25 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.4.3`
  - Ensure entrypoint gets properly passed [#34](https://github.com/zephraph/obsidian-tools/pull/34) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Thu Feb 25 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.4.2`
  - Fix esbuild error [#33](https://github.com/zephraph/obsidian-tools/pull/33) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Thu Feb 25 2021)

### Release Notes

#### Support esbuild config files, change esbuild-override to esbuild-config ([#32](https://github.com/zephraph/obsidian-tools/pull/32))

This release introduces the ability to automatically include config for esbuild without having to pass the option via the command line. All you need to do is create a `esbuild.config.json` (or any other format supported by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)) and it'll automatically be included in your build. You can still manually specify a path to the config using `--esbuild-config`. 

This release also updates the default resolution strategy that esbuild will use to find modules. The new order is `browser`, `module`, `main`.  You can learn more by reading esbuild's [main fields](https://esbuild.github.io/api/#main-fields) docs and you can also override this option by specifying you're own `mainFields` options in your esbuild config. 

💥 BREAKING CHANGES 💥 

The `--esbuild-override` command is now `--esbuild-config`

---

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.4.1`
  - Support esbuild config files, change esbuild-override to esbuild-config [#32](https://github.com/zephraph/obsidian-tools/pull/32) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Wed Feb 24 2021)

#### 🚀 Enhancement

- `obsidian-plugin-cli@0.4.0`, `obsidian-utils@0.8.0`
  - Example `obsidian-utils` so that each function is individually importable... again. [#31](https://github.com/zephraph/obsidian-tools/pull/31) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Wed Feb 24 2021)

#### 🚀 Enhancement

- `obsidian-plugin-cli@0.3.0`, `obsidian-utils@0.7.0`
  - Add hot reloading to dev build [#30](https://github.com/zephraph/obsidian-tools/pull/30) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Wed Feb 24 2021)

#### 🚀 Enhancement

- `obsidian-plugin-cli@0.2.0`
  - Update obsidian-plugin-cli to use new utils [#29](https://github.com/zephraph/obsidian-tools/pull/29) ([@zephraph](https://github.com/zephraph))

#### 🐛 Bug Fix

- `obsidian-utils@0.6.0`
  - Major utils refactor with some CI updates [#27](https://github.com/zephraph/obsidian-tools/pull/27) ([@zephraph](https://github.com/zephraph))

#### 📝 Documentation

- `obsidian-utils@0.6.0`
  - Update docs [#28](https://github.com/zephraph/obsidian-tools/pull/28) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### ⚠️ Pushed to `main`

- `obsidian-plugin-cli@0.1.1`
  - Update argument styles and docs ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🚀 Enhancement

- `obsidian-plugin-cli@0.1.0`
  - Add notification when update is available [#26](https://github.com/zephraph/obsidian-tools/pull/26) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### ⚠️ Pushed to `main`

- `obsidian-utils@0.5.2`
  - Remove fs promises ref from utils ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🐛 Bug Fix

- `obsidian-utils@0.5.1`
  - Set node compat for utils to node v12 [#25](https://github.com/zephraph/obsidian-tools/pull/25) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-cli@0.0.3`
  - Infer or prompt for vault path [#24](https://github.com/zephraph/obsidian-tools/pull/24) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🚀 Enhancement

- `obsidian-utils@0.5.0`
  - Add isVault util, rename failIfNot for clarity [#23](https://github.com/zephraph/obsidian-tools/pull/23) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🚀 Enhancement

- `obsidian-utils@0.4.0`
  - Pass along vault open state from obsidian config [#22](https://github.com/zephraph/obsidian-tools/pull/22) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🚀 Enhancement

- `obsidian-utils@0.3.0`
  - Export utils, update findVault to optionally take a vaultPath [#21](https://github.com/zephraph/obsidian-tools/pull/21) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🐛 Bug Fix

- `obsidian-utils@0.2.1`
  - Fix `obsidian-utils` types [#20](https://github.com/zephraph/obsidian-tools/pull/20) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Mon Feb 22 2021)

#### 🚀 Enhancement

- `obsidian-utils@0.2.0`
  - Add typescript types to obsidian-utils [#19](https://github.com/zephraph/obsidian-tools/pull/19) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `auto-plugin-obsidian@0.1.4`
  - fix versions.json updates [#17](https://github.com/zephraph/obsidian-tools/pull/17) ([@hipstersmoothie](https://github.com/hipstersmoothie))
  - don't include dist folder in zip file structure [#15](https://github.com/zephraph/obsidian-tools/pull/15) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- `obsidian-utils@0.1.1`
  - Update attribution, other small copy updates [#16](https://github.com/zephraph/obsidian-tools/pull/16) ([@zephraph](https://github.com/zephraph))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

#### 🚀 Enhancement

- `obsidian-utils@0.1.0`
  - Add function to find vault from disk [#14](https://github.com/zephraph/obsidian-tools/pull/14) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `auto-plugin-obsidian@0.1.3`
  - calculate zip filename in constructor so it's picked up by upload-asset-plugin [#13](https://github.com/zephraph/obsidian-tools/pull/13) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `auto-plugin-obsidian@0.1.2`
  - fix versions.json lookup and verification [#12](https://github.com/zephraph/obsidian-tools/pull/12) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `auto-plugin-obsidian@0.1.1`
  - correct copy usage [#11](https://github.com/zephraph/obsidian-tools/pull/11) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 21 2021)

#### 🚀 Enhancement

- `auto-plugin-obsidian@0.1.0`
  - Fix manfest path and make zip a first class feature [#10](https://github.com/zephraph/obsidian-tools/pull/10) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🐛 Bug Fix

- Remove deprecated obsidian-plugin-tools [#6](https://github.com/zephraph/obsidian-tools/pull/6) ([@zephraph](https://github.com/zephraph))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-utils@0.0.5`
  - skip publish for package to get release out [#8](https://github.com/zephraph/obsidian-tools/pull/8) ([@hipstersmoothie](https://github.com/hipstersmoothie))
- `auto-plugin-obsidian@0.0.3`
  - Fix auto plugin build [#7](https://github.com/zephraph/obsidian-tools/pull/7) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-utils@0.0.4`
  - Adding publish config to try to get it to publish [#5](https://github.com/zephraph/obsidian-tools/pull/5) ([@zephraph](https://github.com/zephraph))

#### 📝 Documentation

- Add auto plugin to readme [#4](https://github.com/zephraph/obsidian-tools/pull/4) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

#### 🐛 Bug Fix

- `obsidian-plugin-utils@0.0.3`, `obsidian-utils@0.0.2`
  - Adds obsidian-utils [#3](https://github.com/zephraph/obsidian-tools/pull/3) ([@zephraph](https://github.com/zephraph))

#### 📝 Documentation

- Update docs [#2](https://github.com/zephraph/obsidian-tools/pull/2) ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie)), for all your work!

#### 🐛 Bug Fix

- `auto-plugin-obsidian@0.0.2`
  - add auto-plugin-obsidian [#1](https://github.com/zephraph/obsidian-tools/pull/1) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- `create-obsidian-plugin@0.0.3`
  - Make create-obsidian-plugin public ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))

---

# (Sun Feb 21 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Justin Bennett ([@zephraph](https://github.com/zephraph)), for all your work!

#### ⚠️ Pushed to `main`

- Disable lerna verify access so it works w/ automation token ([@zephraph](https://github.com/zephraph))
- Add autorc ([@zephraph](https://github.com/zephraph))
- Create LICENSE ([@zephraph](https://github.com/zephraph))
- Add readme ([@zephraph](https://github.com/zephraph))
- `create-obsidian-plugin@0.0.2`, `obsidian-plugin-cli@0.0.2`, `obsidian-plugin-tools@0.0.2`
  - Prepare for release ([@zephraph](https://github.com/zephraph))
- `create-obsidian-plugin@0.0.2`, `obsidian-plugin-tools@0.0.2`
  - Remove test failures ([@zephraph](https://github.com/zephraph))
  - Wrap up plugin tools ([@zephraph](https://github.com/zephraph))
- `obsidian-plugin-cli@0.0.2`
  - Add cli tool ([@zephraph](https://github.com/zephraph))
- `create-obsidian-plugin@0.0.2`
  - init ([@zephraph](https://github.com/zephraph))

#### Authors: 1

- Justin Bennett ([@zephraph](https://github.com/zephraph))
