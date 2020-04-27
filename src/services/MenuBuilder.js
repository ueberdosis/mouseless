import { app, Menu, BrowserWindow } from 'electron'
import Updater from './Updater'
import Setapp from './Setapp'

export default new class {

  template() {
    return [
      {
        label: app.getName(),
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          {
            label: 'Preferences',
            accelerator: 'CmdOrCtrl+,',
            click() {
              BrowserWindow
                .getAllWindows()
                .forEach(browserWindow => {
                  browserWindow.webContents.send('showOptions')
                  browserWindow.show()
                })
            },
          },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideothers' },
          { role: 'unhide' },
          { type: 'separator' },
          ...(!Setapp.isActive ? [
            {
              label: 'Check for Updates',
              click(menuItem) {
                Updater.checkForUpdates(menuItem)
              },
            },
          ] : []),
          { type: 'separator' },
          { role: 'quit' },
        ],
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteAndMatchStyle' },
          { role: 'selectAll' },
          { role: 'delete' },
        ],
      },
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { type: 'separator' },
          { role: 'resetzoom' },
          { role: 'zoomin' },
          { role: 'zoomout' },
          { type: 'separator' },
          { role: 'togglefullscreen' },
          {
            label: 'Show Developer Tools',
            accelerator: 'Alt+Command+I',
            click(item, focusedWindow) {
              if (focusedWindow) {
                focusedWindow.toggleDevTools()
              }
            },
          },
        ],
      },
      {
        role: 'window',
        submenu: [
          { role: 'minimize' },
          { role: 'close' },
          { role: 'minimize' },
          { role: 'zoom' },
          { type: 'separator' },
          { role: 'front' },
        ],
      },
    ]
  }

  setMenu() {
    Menu.setApplicationMenu(Menu.buildFromTemplate(this.template()))
  }

}()
