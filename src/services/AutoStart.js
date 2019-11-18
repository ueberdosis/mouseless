import { app } from 'electron'
import Store from './Store'

const isProduction = process.env.NODE_ENV === 'production'

export default new class {

  init() {
    if (isProduction) {
      app.setLoginItemSettings({
        openAtLogin: Store.get('autoStart', true),
        openAsHidden: true,
        path: app.getPath('exe'),
      })
    }
  }

}()
