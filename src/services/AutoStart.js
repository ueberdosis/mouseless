import { app } from 'electron'
import Store from 'electron-store'

const isProduction = process.env.NODE_ENV === 'production'

export default new class {

  constructor() {
    this.store = new Store()
  }

  init() {
    if (isProduction) {
      app.setLoginItemSettings({
        openAtLogin: this.store.get('autoStart', true),
        path: app.getPath('exe'),
      })
    }
  }

}()
