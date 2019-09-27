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

  findDuplicatesInArray(items = []) {
    const object = {}
    const result = []

    items.forEach(item => {
      if (!object[item]) { object[item] = 0 }
      object[item] += 1
    })

    for (const prop in object) {
      if (object[prop] >= 2) {
        result.push(prop)
      }
    }

    return result
  }

}()
