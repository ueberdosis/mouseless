// eslint-disable-next-line
import { app, BrowserWindow } from 'electron'

export default new class {

  constructor() {
    this.heartBeatInterval = 10000
    this.isActive = process.env.VUE_APP_IS_SETAPP === 'true'
    this.beforeQuit = false
  }

  init() {
    if (!this.isActive) {
      return
    }

    this.setapp = require('../../setapp-nodejs-wrapper/build/Release/setapp.node')
    // eslint-disable-next-line
    console.log({ setapp: this.setapp })

    this.reportUsageEvent('launch')

    // this.startHeartBeat()

    // app.on('browser-window-focus', () => {
    //   this.reportUsageEvent('activate')
    // })

    // app.on('browser-window-blur', () => {
    //   if (!this.visibleWindows.length) {
    //     this.reportUsageEvent('deactivate')
    //   }
    // })

    // app.on('before-quit', () => {
    //   this.reportUsageEvent('terminate')
    //   this.beforeQuit = true
    // })
  }

  setMainWindow(win) {
    this.mainWindow = win

    // this.mainWindow.on('close', () => {
    //   this.reportUsageEvent('deactivate')
    // })

    // this.mainWindow.on('hide', () => {
    //   this.reportUsageEvent('deactivate')
    // })
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
    if (!this.isActive || !this.setapp || this.beforeQuit || !name) {
      return
    }

    // eslint-disable-next-line
    console.log(name)
    this.setapp.SCReportUsageEvent(name, name)
  }

}()
