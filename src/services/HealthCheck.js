import collect from 'collect.js'
import DB from '@/services/DB'

export default new class {

  run() {
    this.findDuplicatedShortcuts()
  }

  findDuplicatedShortcuts() {
    DB.apps.forEach(app => {
      app.groups.forEach(group => {
        const shortcuts = app.shortcutsByGroup(group.id)
        const ids = collect(shortcuts)
          .pluck('id')
          .toArray()
        const duplicatedShortcuts = this
          .findDuplicatesInArray(ids)
          .map(id => shortcuts.filter(shortcut => shortcut.id === id))

        if (duplicatedShortcuts.length) {
          console.error(`Duplicated shortcuts in ${app.title} → ${group.title}`)
          console.table(duplicatedShortcuts.flat())
        }
      })
    })
  }

  findDuplicatesInArray(data = []) {
    const result = []

    data.forEach((element, index) => {
      if (data.indexOf(element, index + 1) > -1) {
        if (result.indexOf(element) === -1) {
          result.push(element)
        }
      }
    })

    return result
  }

}()
