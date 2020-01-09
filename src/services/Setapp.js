// eslint-disable-next-line
import { app, BrowserWindow } from 'electron'

export default new class {

  constructor() {
    this.isActive = process.env.VUE_APP_IS_SETAPP === 'true'

    // eslint-disable-next-line
    console.log('is setapp:', this.isActive)
  }

  init() {
    if (!this.isActive) {
      return
    }

    this.setapp = require('../../setapp-nodejs-wrapper/build/Release/setapp.node')
  }

  reportUsageEvent(name = null) {
    if (!this.isActive || !this.setapp || !name) {
      return
    }

    this.setapp.SCReportUsageEvent(name)
  }

}()
