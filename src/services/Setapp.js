import { app, BrowserWindow } from 'electron'

export default new class {

  constructor() {
    this.heartBeatInterval = 1000
    this.isActive = !!process.env.IS_SETAPP
    this.beforeQuit = false
  }

  init() {
    if (!this.isActive) {
      return
    }

    this.reportUsageEvent('launch')

    this.startHeartBeat()

    app.on('browser-window-focus', () => {
      this.reportUsageEvent('activate')
    })

    app.on('browser-window-blur', () => {
      if (!this.visibleWindows.length) {
        this.reportUsageEvent('deactivate')
      }
    })

    app.on('before-quit', () => {
      this.reportUsageEvent('terminate')
      this.beforeQuit = true
    })

    this.setapp = require('../../setapp-nodejs-wrapper/build/Release/setapp.node')
    // console.log({ setapp: this.setapp })
  }

  setMainWindow(win) {
    this.mainWindow = win

    this.mainWindow.on('close', () => {
      this.reportUsageEvent('deactivate')
    })

    this.mainWindow.on('hide', () => {
      this.reportUsageEvent('deactivate')
    })
  }

  get visibleWindows() {
    return BrowserWindow
      .getAllWindows()
      .filter(window => {
        if (window.isDestroyed()) {
          return false
        }

        return window.isFocused() || window.webContents.isDevToolsFocused()
      })
  }

  startHeartBeat() {
    if (!this.isActive) {
      return
    }

    setInterval(() => {
      if (this.visibleWindows.length) {
        this.reportUsageEvent('heart-beat-active')
      } else {
        this.reportUsageEvent('heart-beat-inactive')
      }
    }, this.heartBeatInterval)
  }

  reportUsageEvent(name = null) {
    if (!this.isActive || this.beforeQuit || !name) {
      return
    }

    console.log(name)
    // this.setapp.SCReportUsageEvent(name)
  }

}()
