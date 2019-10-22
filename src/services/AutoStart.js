import { app } from 'electron'
import Store from 'electron-store'

export default new class {

  constructor() {
    this.store = new Store()
  }

  init() {
    app.setLoginItemSettings({
      openAtLogin: this.store.get('autoStart', true),
      path: app.getPath('exe'),
    })
  }

}()
