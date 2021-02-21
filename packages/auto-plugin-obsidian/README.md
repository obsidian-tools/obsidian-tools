# `auto-plugin-obsidian`

An auto plugin for automating the release of an [obsidian.md](https://obsidian.md/) plugin.

- Updates the version in your `manifest.json`
- Automates `versions.json` compatibility
- Supports `next`, `canary`, and manual installs
- Uploads all distribution files (`main.js`, `manifest.json` and optionally `style.css`) to a GitHub release with a changelog

## Installation

To install:

```bash
npm i --save-dev auto-plugin-obsidian
# or
yarn add -D auto-plugin-obsidian
```

## Usage

Add the following to your `.autorc`.
Without the `dir` option the plugin assumes all distribution files are in the current working directory.

This plugin expects the following project structure.

```txt
📜 main.js
📜 styles.css
📜.autorc
📜manifest.json
📜versions.json
```

```json
{
  "plugins": [
    "obsidian",
    // or if you build your code and store it in a folder
    ["obsidian", { "dir": "./path/to/dist/dir" }]
  ]
}
```

### Automated `versions.json`

`auto` handles updating the version in the `manifest.json`, so you should never have to touch that property.
When depending on a new version of obsidian you need to change the `minAppVersion` to match that version.
During the next release `auto` will update your compatibility map with the new information.

### Manual Installation

Your plugin might not be on the registry yet but you might still want to work on it and makes releases.
If the directory where `auto` looks for your distribution files has a `.zip` file in it, that file will also get uploaded to the release.
This way you can direct users in your `README.md` to manually install the plugin with the zip file.

```txt
📜 main.js
📜 styles.css
📜.autorc
📜manifest.json
📜versions.json
📜my-plugin.zip
```
