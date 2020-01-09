import { dialog, app, BrowserWindow } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'
import Setapp from './Setapp'

export default new class {

  constructor() {
    autoUpdater.autoDownload = false

    // logs to ~/Library/Logs/Mouseless/log.log
    autoUpdater.logger = log
    autoUpdater.logger.transports.file.level = 'info'

    this.menuItem = null
    this.silent = false

    if (Setapp.isActive) {
      return
    }

    autoUpdater.on('error', this.onError.bind(this))
    autoUpdater.on('update-available', this.onUpdateAvailable.bind(this))
    autoUpdater.on('update-not-available', this.onUpdateNotAvailable.bind(this))
    autoUpdater.on('download-progress', this.onDownloadProgress.bind(this))
    autoUpdater.on('update-downloaded', this.onUpdateDownloaded.bind(this))
    autoUpdater.on('checking-for-update', this.onCheckingForUpdate.bind(this))
  }

  sendStatusToWindow(text) {
    this.browserWindows.forEach(browserWindow => {
      browserWindow.webContents.send('log', text)
    })
  }

  get browserWindows() {
    return BrowserWindow.getAllWindows()
  }

  enableMenuItem() {
    if (this.menuItem) {
      this.menuItem.enabled = true
    }
  }

  disableMenuItem() {
    if (this.menuItem) {
      this.menuItem.enabled = false
    }
  }

  silentlyCheckForUpdates() {
    if (Setapp.isActive) {
      return
    }

    this.silent = true
    this.disableMenuItem()
    autoUpdater.checkForUpdates()
  }

  checkForUpdates(menuItem = null) {
    if (Setapp.isActive) {
      return
    }

    this.menuItem = menuItem
    this.silent = false
    this.disableMenuItem()
    autoUpdater.checkForUpdates()
  }

  ensureSafeQuitAndInstall() {
    if (Setapp.isActive) {
      return
    }

    app.removeAllListeners('window-all-closed')
    this.browserWindows.forEach(browserWindow => browserWindow.removeAllListeners('close'))
    autoUpdater.quitAndInstall()
  }

  onError(error) {
    this.enableMenuItem()
    this.sendStatusToWindow(`Error in auto-updater. ${error}`)
  }

  async onUpdateAvailable() {
    if (Setapp.isActive) {
      return
    }

    this.sendStatusToWindow('Update available.')

    const { response } = await dialog.showMessageBox({
      type: 'info',
      message: 'Oh, there\'s a newer version of this app available.',
      detail: 'Do you want to update now?',
      buttons: ['Yes, Download', 'Later'],
      defaultId: 0,
    })

    if (response === 0) {
      autoUpdater.downloadUpdate()
    } else {
      this.enableMenuItem()
    }
  }

  onUpdateNotAvailable() {
    if (Setapp.isActive) {
      return
    }

    this.sendStatusToWindow('Update not available.')

    this.enableMenuItem()

    if (this.silent) {
      return
    }

    dialog.showMessageBox({
      message: 'No Updates available.',
      detail: 'You already have the latest version installed.',
    })
  }

  async onUpdateDownloaded() {
    if (Setapp.isActive) {
      return
    }

    this.sendStatusToWindow('Update downloaded.')

    const { response } = await dialog.showMessageBox({
      message: 'Download completed.',
      detail: 'To install the update, the application needs to be restarted.',
      buttons: ['Restart', 'Later'],
      defaultId: 0,
    })

    if (response === 0) {
      setImmediate(() => {
        this.ensureSafeQuitAndInstall()
      })
    }
  }

  onCheckingForUpdate() {
    this.sendStatusToWindow('Checking for update…')
  }

  onDownloadProgress(progress) {
    if (Setapp.isActive) {
      return
    }

    let logMessage = `Download speed: ${progress.bytesPerSecond}`
    logMessage = `${logMessage} - Downloaded ${progress.percent}%`
    logMessage = `${logMessage} (${progress.transferred}/${progress.total})`
    this.sendStatusToWindow(logMessage)

    this.browserWindows.forEach(browserWindow => {
      browserWindow.setProgressBar(progress.percent / 100)
    })
  }

}()
