import { dialog, app, BrowserWindow } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

export default new class {

  constructor() {
    autoUpdater.autoDownload = false

    if (process.env.NODE_ENV === 'development') {
      autoUpdater.logger = log
      autoUpdater.logger.transports.file.level = 'info'
    }

    this.menuItem = null
    this.silent = false

    autoUpdater.on('error', this.onError.bind(this))
    autoUpdater.on('update-available', this.onUpdateAvailable.bind(this))
    autoUpdater.on('update-not-available', this.onUpdateNotAvailable.bind(this))
    autoUpdater.on('download-progress', this.onDownloadProgress.bind(this))
    autoUpdater.on('update-downloaded', this.onUpdateDownloaded.bind(this))
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
    this.silent = true
    this.disableMenuItem()
    autoUpdater.checkForUpdates()
  }

  checkForUpdates(menuItem = null) {
    this.menuItem = menuItem
    this.silent = false
    this.disableMenuItem()
    autoUpdater.checkForUpdates()
  }

  ensureSafeQuitAndInstall() {
    app.removeAllListeners('window-all-closed')
    const browserWindows = BrowserWindow.getAllWindows()
    browserWindows.forEach(browserWindow => {
      browserWindow.removeAllListeners('close')
    })
    autoUpdater.quitAndInstall()
  }

  onError() {
    this.enableMenuItem()
  }

  onUpdateAvailable() {
    dialog.showMessageBox({
      type: 'info',
      message: 'Oh, there\'s a newer version of this app available.',
      detail: 'Do you want to update now?',
      buttons: ['Yes, Download', 'Later'],
      defaultId: 0,
    }, buttonIndex => {
      if (buttonIndex === 0) {
        autoUpdater.downloadUpdate()
      } else {
        this.enableMenuItem()
      }
    })
  }

  onUpdateNotAvailable() {
    this.enableMenuItem()

    if (this.silent) {
      return
    }

    dialog.showMessageBox({
      message: 'No Updates available.',
      detail: 'You already have the latest version installed.',
    })
  }

  onUpdateDownloaded() {
    dialog.showMessageBox({
      message: 'Download completed.',
      detail: 'To install the update, the application needs to be restarted.',
      buttons: ['Restart', 'Later'],
      defaultId: 0,
    }, buttonIndex => {
      if (buttonIndex === 0) {
        setImmediate(() => {
          this.ensureSafeQuitAndInstall()
        })
      }
    })
  }

  onDownloadProgress(progress) {
    const browserWindows = BrowserWindow.getAllWindows()
    browserWindows.forEach(browserWindow => {
      browserWindow.setProgressBar(progress.percent / 100)
    })
  }

}()
