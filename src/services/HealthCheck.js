import collect from 'collect.js'
import DB from '@/services/DB'
import { findDuplicatesInArray } from '@/helpers'

export default new class {

  run() {
    this.findDuplicatedShortcuts()
    this.findImpossibleShortcuts()
  }

  findDuplicatedShortcuts() {
    DB.apps.forEach(app => {
      app.groups.forEach(group => {
        const shortcuts = app.shortcutsByGroup(group.id)
        const ids = collect(shortcuts)
          .pluck('id')
          .toArray()
        const duplicatedShortcuts = findDuplicatesInArray(ids)
          .map(id => shortcuts.filter(shortcut => shortcut.id === id))

        if (duplicatedShortcuts.length) {
          console.warn(`Duplicated shortcuts in ${app.title} → ${group.title}`)
          console.table(duplicatedShortcuts.flat())
        }
      })
    })
  }

  findImpossibleShortcuts() {
    const impossibleShortcuts = []

    DB.apps.forEach(app => {
      app.groups.forEach(group => {
        const shortcuts = app.shortcutsByGroup(group.id)

        shortcuts.forEach(shortcut => {
          if (!shortcut.isPossible) {
            impossibleShortcuts.push({
              app: app.title,
              group: group.title,
              title: shortcut.title,
              keys: shortcut.resolvedKeys.join(', '),
            })
          }
        })
      })
    })

    if (impossibleShortcuts.length) {
      console.warn(`${impossibleShortcuts.length} impossible shortcuts found`)
      console.table(impossibleShortcuts)
    }
  }

}()
