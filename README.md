# Mouseless

[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub)](https://github.com/sponsors/ueberdosis)

Keyboard shortcut training and look-up.

<img width="712" alt="OAJSdfRA10" src="https://user-images.githubusercontent.com/2500670/87651207-08ad2780-c753-11ea-91e7-5f8c32fa1fa1.png">

## Features

* keyboard shortcut lookup (works with every app)
* exercises for 1.000+ keyboard shortcuts (for supported apps)
* translates all shortcuts to your keyboard layout
* works offline
* available for macOS

## Supported apps

Adobe XD, Airtable, Bear, Code, Evernote, Figma, Finder, Firefox, Gmail, Google Chrome, Google Docs, iA Writer, macOS, Notion, Photoshop, Safari, Sketch, Slack, Spotify, Sublime Text, Superhuman, Things, Todoist, Transmit, Trello, Ulysses, Webflow, Xcode

Something’s missing? https://feedback.mouseless.app/

## Using Mouseless

Yes, the code is open source, though we ask you to buy a license to actually use Mouseless. Your support will help us to put more time into our open source work. ✌️

* 🤑 Buy a license here: https://mouseless.app ($20.00)
* 💝 Sponsor our work: https://github.com/sponsors/ueberdosis
* 📚️ Or [subscribe to SetApp](https://go.setapp.com/stp268?refAppID=379&utm_medium=available_on_setapp_button&utm_source=388&utm_campaign=https://github.com/ueberdosis/mouseless) (referral link) and get a ton of apps, including Mouseless

#### Project setup

Feel free to clone the project and fiddle around with our code. You need Node and Yarn.

```
yarn install
```

#### Run the development build

To start the development version of the app run the start script. The app will open and you’ll be able to use it right-away. Changes to the code will be hot loaded.

```
yarn start
```

#### Lint and fix files

If you plan to send a PR with changes, run the lint process to fix code style issues:

```
yarn lint
```

## Builds

Don’t try to build the app, you won’t be able to code sign and/or notarize the app without a developer certificate. We’re running the build process manually and publish new versions on the website: https://mouseless.app

### Build the macOS version

Don’t do this at home. It won’t work without all the certificates and credentials. Hopefully this is helpful to other app developers though.

1. Bump version in /package.json
2. Fill out the .env
3. Install dependencies: `yarn install`
4. Build the macOS version: `yarn run electron:build:mac`
5. Put the notarized version in the Zip file: `yarn run fix:build:mac`
6. Manually upload `Mouseless-*.dmg`, `Mouseless-*.dmg.blockmap`, `Mouseless-*.zip` and `latest-mac.yml` (find them in dist_electron) to the DigitalOcean space.
7. Manually upload the `Mouseless-*.dmg` to Gumroad.
8. Update the download links in `ueberdosis/mouseless-landingpage`.
9. Respond to suggestions on https://feedback.mouseless.app.
10. Tweet about the update. 🐤

### New Release for SetApp

1. Jump to the SetApp Node.js wrapper: `cd setapp-nodejs-wrapper`
2. Install all dependencies: `yarn install`
3. Build the Node.js wrapper: `yarn build`
4. Jump back to the root folder: `cd ../`
5. Actually build the SetApp version: `yarn setapp:build`
6. Fix the Zip file: `yarn fix:build:mac`
7. Manually upload `dist_electron/Mouseless-*.dmg` to SetApp (https://developer.setapp.com/).

## Related projects

* [ueberdosis/mouseless-landingpage](https://github.com/ueberdosis/mouseless-landingpage)
* [ueberdosis/glyphfinder](https://github.com/ueberdosis/mouseless)
* [ueberdosis/glyphfinder-landingpage](https://github.com/ueberdosis/glyphfinder-landingpage)
* [ueberdosis/matter](https://github.com/ueberdosis/matter)
* [ueberdosis/matter-landingpage](https://github.com/ueberdosis/matter-landingpage)
