import { app, ipcMain } from 'electron'

export default new class {

  constructor() {
    this.isActive = !!process.env.IS_SETAPP

    this.reportUsageEvent('launch')

    app.on('window-all-closed', () => {
      console.log('event:window-all-closed')
    })

    app.on('activate', () => {
      console.log('event:activate')
    })

    app.on('browser-window-blur', () => {
      console.log('event:browser-window-blur')
    })

    app.on('browser-window-focus', () => {
      console.log('event:browser-window-focus')
    })

    app.on('before-quit', () => {
      console.log('event:before-quit')

      this.reportUsageEvent('terminate')
    })

    ipcMain.on('showMainWindow', () => {
      console.log('event:showMainWindow')
    })
  }

  init() {
    if (!this.isActive) {
      return
    }

    this.setapp = require('../../setapp-nodejs-wrapper/build/Release/setapp.node')
    console.log({ setapp: this.setapp })
  }

  reportUsageEvent(name = null) {
    console.log('send event:', name)

    // if (!this.isActive || !name) {
    //   return
    // }

    // this.setapp.SCReportUsageEvent(name)
  }

}()
