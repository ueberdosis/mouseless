import path from 'path'
import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib'
import { menubar } from 'menubar'
import activeWin from 'active-win'
import LicenseCheck from './services/LicenseCheck'
import Updater from './services/Updater'
import MenuBuilder from './services/MenuBuilder'


const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !!isProduction

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let secondWin
let createdAppProtocol = false

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow(winVar, devPath, prodPath, windowOptions) {

  MenuBuilder.setMenu()

  // Create the browser window.
  winVar = new BrowserWindow({
    width: 600,
    height: 480,
    resizable: false,
    fullscreen: false,
    // maximizable: false,
    titleBarStyle: 'hiddenInset',
    transparent: true,
    backgroundColor: '#000',
    webPreferences: {
      nodeIntegration: true,
    },
    /* global __static */
    icon: path.join(__static, 'icon.png'),
    ...windowOptions,
  })

  LicenseCheck.setWindow(win)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    winVar.loadURL(process.env.WEBPACK_DEV_SERVER_URL + devPath)
    // if (!process.env.IS_TEST) winVar.webContents.openDevTools()
  } else {
    if (!createdAppProtocol) {
      createProtocol('app')
      createdAppProtocol = true
    }
    // Load the index.html when not in development
    winVar.loadURL(`app://./${prodPath}`)
  }

  // winVar.webContents.executeJavaScript('window.location.hash = "/shortcuts"')

  if (isProduction) {
    Updater.silentlyCheckForUpdates()
  }

  winVar.on('closed', () => {
    winVar = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }

  }
  // createWindow()
  createWindow(win, '', 'index.html', {})
  // createWindow(secondWin, 'menubar', 'menubar.html', { show: false })

  const mb = menubar({
    // index: process.env.WEBPACK_DEV_SERVER_URL ? `http://${
    //   process.env.WEBPACK_DEV_SERVER_URL}menubar` : 'app://./menubar.html',
    index: process.env.WEBPACK_DEV_SERVER_URL
      ? process.env.WEBPACK_DEV_SERVER_URL
      : 'app://./index.html',
    browserWindow: {
      transparent: true,
      backgroundColor: '#000',
      width: 300,
      height: 400,
      movable: false,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true,
      },
    },
    icon: path.join(__static, 'MenuIconTemplate.png'),
    preloadWindow: true,
  })

  mb.on('after-create-window', () => {
    mb.window.webContents.executeJavaScript('window.location.hash = "/shortcuts"')
    mb.window.openDevTools()
  })

  mb.on('show', () => {
    const app = activeWin.sync()

    if (app) {
      mb.window.webContents.send('currentApp', app.owner.name)
    }
  })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
