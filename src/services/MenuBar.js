import path from 'path'
import { menubar } from 'menubar'
import activeWin from 'active-win'

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

export default new class {

  create() {
    if (this.menubar) {
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
        alwaysOnTop: isDevelopment,
        webPreferences: {
          nodeIntegration: true,
        },
      },
      /* global __static */
      icon: path.join(__static, 'MenuIconTemplate.png'),
      preloadWindow: true,
    })

    this.menubar.on('after-create-window', () => {
      this.menubar.window.webContents.executeJavaScript('window.location.hash = "/shortcuts"')
    })

    this.menubar.on('show', () => {
      const currentApp = activeWin.sync()

      if (currentApp) {
        this.menubar.window.webContents.send('currentApp', currentApp.owner.name)
      }

      if (!process.env.IS_TEST) {
        this.menubar.window.openDevTools()
      }
    })

    this.menubar.on('hide', () => {
      if (!process.env.IS_TEST) {
        this.menubar.window.closeDevTools()
      }
    })
  }

  hide() {
    if (!this.menubar) {
      return
    }

    this.menubar.hideWindow()
  }

}()
