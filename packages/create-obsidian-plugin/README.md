# `create-obsidian-plugin`

A tool to easily create a plugin for [obsidian](https://obsidian.md/)

## Getting started

Run

```
npm init obsidian-plugin
```

or

```
yarn create obsidian-plugin
```

and a plugin will be created in your current directory. It'll prompt you for needed info (like plugin-id, name, etc).

You can optionally pass a plugin-id to the command like

```
yarn create obsidian-plugin my-plugin
```

In this case a plugin with the id `my-plugin` will be created in the current directory

afterwards follow the directions from the plugin to get started

### Building the plugin for development

```
npm run dev
```

or

```
yarn dev
```

### Building the plugin for publish

```
npm run build
```

or

```
yarn build
```
