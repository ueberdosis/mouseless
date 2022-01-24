import Store from 'electron-store'
import electronModule from 'electron'

const electron = process.type === 'browser' ? electronModule : require('@electron/remote')

export default new Store({
  // configName: process.env.NODE_ENV === 'development'
  //   ? 'config_dev'
  //   : 'config',
  // encryptionKey: '123',
  projectVersion: electron.app.getVersion(),
  migrations: {
    '1.0.0': store => {
      store.clear()
    },
    '1.1.0': store => {
      store.set('shortcut', ['Meta', 'Shift', 'm'])
    },
  },
})
