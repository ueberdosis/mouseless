import axios from 'axios'
import { ipcMain } from 'electron'

export default new class {

  constructor() {
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
        this.win.webContents.send('verifyLicenseKey:succeeded', response)
      })
      .catch(error => {
        this.win.webContents.send('verifyLicenseKey:failed', error)
      })
  }

}()
