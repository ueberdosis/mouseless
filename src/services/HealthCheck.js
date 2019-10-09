import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import DB from '@/services/DB'
import { findDuplicatesInArray, getArrayDepth } from '@/helpers'

export default new class {

  run() {
    this.findDuplicatedShortcuts()
    this.findImpossibleShortcuts()
    this.findMultipleTriggers()
    this.findMisspelling()
  }

  findDuplicatedShortcuts() {
    DB.apps.forEach(app => {
      app.sets.forEach(set => {
        const shortcuts = app.shortcutsBySet(set.id)
        const ids = collect(shortcuts)
          .pluck('id')
          .toArray()
        const duplicatedShortcuts = findDuplicatesInArray(ids)
          .map(id => shortcuts.filter(shortcut => shortcut.id === id))

        if (duplicatedShortcuts.length) {
          console.warn(`Duplicated shortcuts in ${app.title} → ${set.title}`)
          console.table(duplicatedShortcuts.flat())
        }
      })
    })
  }

  findImpossibleShortcuts() {
    const impossibleShortcuts = []

    DB.apps.forEach(app => {
      app.sets.forEach(set => {
        const shortcuts = app.shortcutsBySet(set.id)

        shortcuts.forEach(shortcut => {
          if (!shortcut.isPossible) {
            impossibleShortcuts.push({
              app: app.title,
              set: set.title,
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

  findMultipleTriggers() {
    const impossibleShortcuts = []

    DB.apps.forEach(app => {
      app.sets.forEach(set => {
        const shortcuts = app.shortcutsBySet(set.id)

        shortcuts.forEach(shortcut => {
          const triggers = shortcut.resolvedKeys
            .filter(key => !Keyboard.specialKeyNames.includes(key))

          if (triggers.length > 1) {
            impossibleShortcuts.push({
              app: app.title,
              set: set.title,
              title: shortcut.title,
              keys: shortcut.resolvedKeys.join(', '),
            })
          }
        })
      })
    })

    if (impossibleShortcuts.length) {
      console.warn(`${impossibleShortcuts.length} shortcuts with multiple trigger keys found`)
      console.table(impossibleShortcuts)
    }
  }

  findMisspelling() {
    const misspelledShortcuts = []

    DB.apps.forEach(app => {
      app.sets.forEach(set => {
        const shortcuts = app.shortcutsBySet(set.id)

        shortcuts.forEach(shortcut => {
          const groups = getArrayDepth(shortcut.keys) > 1 ? shortcut.keys : [shortcut.keys]

          const misspelled = groups.some(group => group.some(key => {
            if (key.length === 1) {
              return false
            }

            if (Keyboard.specialKeyNames.includes(key)) {
              return false
            }

            return !Keyboard.keymap.find(item => item.code === key)
          }))

          if (misspelled) {
            misspelledShortcuts.push({
              app: app.title,
              set: set.title,
              title: shortcut.title,
              keys: shortcut.keys.join(', '),
            })
          }
        })
      })
    })

    if (misspelledShortcuts.length) {
      console.warn(`${misspelledShortcuts.length} shortcuts with misspelled keys found`)
      console.table(misspelledShortcuts)
    }
  }

}()
