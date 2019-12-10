# Setapp lib Node.JS plugin

The only development dependency of this project is [Node.js](https://nodejs.org), so make sure you have it installed.

## Prerequisites

- Download Setapp Library archive at the top of the Add New Version/Edit Version page (`libSetapp<AppName>.zip`) in [vendor account](https://developer.setapp.com).
- Unzip this archive to the root of this project to folder `libSetapp`.

## Build process

1. Initial dependencies installation:

```sh
npm install
```

2. Build `libSetapp` nodejs wrapper:

```sh
npm run build
```

3. Use `setapp.node` in your Electron app project([documentation](https://docs.setapp.com/docs/library-integration)):

```js
const setapp = require(process.resourcesPath + "/setapp.node");
```

4. Run integration script in order to add `libSetapp` to your Electron app:

```sh
./integrate_setapp.sh
```

```
params:
 app - path to your builded application <AppName>.app
 sign - code sign identity to resign your updated build
```
