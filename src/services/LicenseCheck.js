import axios from 'axios'
import { ipcMain } from 'electron'
import Store from 'electron-store'
import { nestedValue } from '../helpers'

export default new class {

  constructor() {
    this.store = new Store()
    this.limit = Infinity

    ipcMain.on('verifyLicenseKey', (_, licenseKey) => {
      this.verifyLicenseKey(licenseKey)
    })
  }

  setWindow(win) {
    this.win = win
  }

  verifyLicenseKey(licenseKey) {
    axios
      .post('https://api.gumroad.com/v2/licenses/verify', {
        product_permalink: process.env.VUE_APP_GUMROAD_PRODUCT_ID,
        license_key: licenseKey,
      })
      .then(response => {
        const uses = nestedValue(response, 'data.uses')

        if (uses > 0 && uses > this.limit) {
          this.emitError('Sorry. This license is already in use.')
          return
        }

        this.store.set('verified', true)
        this.emitSuccess()
      })
      .catch(() => {
        this.emitError('Sorry. This license does not exist.')
      })
  }

  emitSuccess() {
    this.win.webContents.send('verifyLicenseKey:succeeded')
  }

  emitError(errorMessage = null) {
    this.win.webContents.send('verifyLicenseKey:failed', errorMessage)
  }

}()
