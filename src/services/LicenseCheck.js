import axios from 'axios'
import { ipcMain } from 'electron'
import Store from './Store'
import { nestedValue } from '../helpers'
import MenuBar from './MenuBar'

export default new class {

  constructor() {
    this.limit = process.env.NODE_ENV === 'development'
      ? Infinity
      : 2

    ipcMain.on('verifyLicenseKey', (_, licenseKey) => {
      this.verifyLicenseKey(licenseKey)
    })
  }

  setWindow(win) {
    this.win = win
  }

  verifyLicenseKey(licenseKey) {
    if (process.env.MASTER_KEY && licenseKey === process.env.MASTER_KEY) {
      Store.set('verification', {
        success: true,
        purchase: {
          license_key: licenseKey,
        },
      })
      Store.set('showMenubar', true)
      MenuBar.create()
      this.emitSuccess()
      return
    }

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

        Store.set('verification', response.data)
        Store.set('showMenubar', true)
        MenuBar.create()
        this.emitSuccess()
      })
      .catch(error => {
        if (!error.response) {
          this.emitError('Please check your internet connection.')
        } else if (error.response.status && error.response.status >= 500) {
          this.emitError('Oh no. Gumroad can\'t be reached. Please try again later.')
        } else {
          this.emitError('Sorry. This license does not exist.')
        }
      })
  }

  emitSuccess() {
    this.win.webContents.send('verifyLicenseKey:succeeded')
  }

  emitError(errorMessage = null) {
    this.win.webContents.send('verifyLicenseKey:failed', errorMessage)
  }

}()
