import axios from 'axios'
import { ipcMain } from 'electron'
import Store from 'electron-store'
import { nestedValue } from '../helpers'
import MenuBar from './MenuBar'

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
        increment_uses_count: true,
      })
      .then(response => {
        // if (!data?.success) {
        //   this.emitError('Sorry. Something went wrong.')
        //   return
        // }

        const uses = nestedValue(response, 'data.uses')

        if (uses > this.limit) {
          this.emitError('Sorry. This license is already in use.')
          return
        }

        const refunded = nestedValue(response, 'data.purchase.refunded')

        if (refunded) {
          this.emitError('Sorry. This purchase has been refunded.')
          return
        }

        const chargebacked = nestedValue(response, 'data.purchase.chargebacked')

        if (chargebacked) {
          this.emitError('Sorry. This purchase has been chargebacked.')
          return
        }

        this.store.set('verification', response.data)
        this.store.set('showMenubar', true)
        MenuBar.create()
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
