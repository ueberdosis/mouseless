import collect from 'collect.js'
import Store from 'electron-store'
import DB from '@/services/DB'

export default new class {

  store = new Store()

  run() {
    this.cleanUpRuns()
  }

  cleanUpRuns() {
    const runs = collect(this.store.get('runs') || {})
      .values()
      .toArray()

    if (!Array.isArray(runs)) {
      return
    }

    const cleanRuns = runs
      .filter(run => {
        const app = DB.app(run.appId)

        if (!app) {
          return false
        }

        const set = app.sets.find(item => item.id === run.setId)

        if (!set) {
          return false
        }
        return true
      })
      .map(run => {
        if (DB.locale !== run.locale) {
          return run
        }

        const app = DB.app(run.appId)
        const set = app.sets.find(item => item.id === run.setId)
        const shortcuts = app.shortcutsBySet(set.id)
        const learnedIds = run.learnedIds
          .filter(learnedId => shortcuts.find(shortcut => shortcut.id === learnedId))

        return {
          ...run,
          learnedIds,
        }
      })
      .reduce((data, run) => ({
        ...data,
        [run.id]: run,
      }), {})

    if (typeof cleanRuns !== 'undefined') {
      this.store.set('runs', cleanRuns)
    }
  }

}()
