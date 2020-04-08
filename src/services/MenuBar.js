import path from 'path'
import { menubar } from 'menubar'
import {
  Menu,
  app,
  globalShortcut,
  ipcMain,
} from 'electron'
import activeWin from 'active-win'
import windowShortcuts from 'window-shortcuts'
import Store from './Store'
import User from './User'
import Setapp from './Setapp'

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

export default new class {

  constructor() {
    this.mainWindow = null
  }

  getShortcut() {
    const electronKeyMap = {
      Meta: 'Command',
    }

    const shortcut = Store.get('shortcut')
      .map(key => (electronKeyMap[key] ? electronKeyMap[key] : key))
      .join('+')

    return shortcut
  }

  create() {
    if (
      this.menubar
      || !User.isVerified
      || !Store.get('showMenubar', true)
    ) {
      return
    }

    this.menubar = menubar({
      index: process.env.WEBPACK_DEV_SERVER_URL
        ? process.env.WEBPACK_DEV_SERVER_URL
        : 'app://./index.html',
      browserWindow: {
        transparent: true,
        backgroundColor: '#000',
        width: 300,
        height: 480,
        movable: false,
        // alwaysOnTop: isDevelopment,
        webPreferences: {
          nodeIntegration: true,
        },
      },
      /* global __static */
      icon: path.join(__static, 'MenuIconTemplate.png'),
      preloadWindow: true,
      showDockIcon: true,
      tooltip: 'Mouseless',
    })

    this.menubar.on('after-create-window', () => {
      this.menubar.window.webContents.executeJavaScript('window.location.hash = "/shortcuts"')

      this.menubar.tray.on('right-click', () => {
        this.handleRightClick()
      })

      this.menubar.tray.on('click', event => {
        if (event.ctrlKey) {
          this.handleRightClick()
        }
      })
    })

    this.menubar.on('show', () => {
      Setapp.reportUsageEvent('user-interaction')

      const activeWindow = activeWin.sync()
      const appName = activeWindow ? activeWindow.owner.name : null
      const defaultResponse = {
        app: 'Mouseless',
        shortcuts: [],
      }

      if (!appName) {
        return
      }

      this.menubar.window.webContents.send('activeWindow:loading')

      if (['Electron', 'Mouseless'].includes(appName)) {
        this.menubar.window.webContents.send('activeWindow:response', defaultResponse)
      } else {
        windowShortcuts(appName)
          .then(shortcuts => {
            this.menubar.window.webContents.send('activeWindow:response', {
              app: appName,
              shortcuts,
            })
          })
          .catch(() => {
            this.menubar.window.webContents.send('activeWindow:response', defaultResponse)
          })
      }

      // if (isDevelopment) {
      //   this.menubar.window.openDevTools()
      // }
    })

    this.menubar.on('hide', () => {
      // if (isDevelopment) {
      //   this.menubar.window.closeDevTools()
      // }

      this.menubar.window.webContents.send('activeWindow:hide')
    })

    this.menubar.on('after-hide', () => {
      // restore focus of previous app only if there is no main window of mouseless
      if (!this.isWindowVisible(this.mainWindow)) {
        this.menubar.app.hide()
      }
    })

    this.addShortcutListener()

    ipcMain.on('shortcutChanged', () => {
      this.addShortcutListener()
    })

    ipcMain.on('hide', () => {
      if (this.isWindowVisible(this.menubar.window)) {
        this.hide()
      }
    })

    app.on('will-quit', () => {
      globalShortcut.unregisterAll()
    })
  }

  handleRightClick() {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => {
          this.menubar.app.quit()
        },
      },
    ])

    this.menubar.tray.popUpContextMenu(contextMenu)
    Setapp.reportUsageEvent('user-interaction')
  }

  isWindowVisible(window) {
    return !window.isDestroyed() && window.isVisible()
  }

  setMainWindow(win) {
    this.mainWindow = win
  }

  show() {
    if (!this.menubar) {
      return
    }

    this.menubar.showWindow()
  }

  hide() {
    if (!this.menubar) {
      return
    }

    this.menubar.hideWindow()
  }

  addShortcutListener() {
    // unregister previously added event listener
    globalShortcut.unregisterAll()

    const shortcut = this.getShortcut()

    globalShortcut.register(shortcut, () => {
      if (this.isWindowVisible(this.menubar.window)) {
        this.hide()
      } else {
        this.show()
      }
    })
  }

}()
