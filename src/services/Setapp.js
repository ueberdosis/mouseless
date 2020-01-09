// eslint-disable-next-line
import { app, BrowserWindow } from 'electron'

export default new class {

  constructor() {
    this.isActive = process.env.VUE_APP_IS_SETAPP === 'true'
  }

  init() {
    if (!this.isActive) {
      return
    }

    this.setapp = require('../../setapp-nodejs-wrapper/build/Release/setapp.node')
    // eslint-disable-next-line
    console.log({ setapp: this.setapp })
  }

  reportUsageEvent(name = null) {
    if (!this.isActive || !this.setapp || !name) {
      return
    }

    // eslint-disable-next-line
    console.log(name)
    this.setapp.SCReportUsageEvent(name)
  }

}()
