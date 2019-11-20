import path from 'path'
import { menubar } from 'menubar'
import activeWin from 'active-win'
import windowShortcuts from 'window-shortcuts'
import Store from './Store'

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

export default new class {

  create() {
    const verification = Store.get('verification', null)
    const verified = verification
      ? !!verification.success
      : false

    if (
      this.menubar
      || !verified
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
    })

    this.menubar.on('show', () => {
      const activeWindow = activeWin.sync()
      const appName = activeWindow ? activeWindow.owner.name : null
      const defaultResponse = {
        app: appName,
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
      this.menubar.app.hide()
    })
  }

  hide() {
    if (!this.menubar) {
      return
    }

    this.menubar.hideWindow()
  }

}()
