import shajs from 'sha.js'
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'

export default {
  name: 'App',

  props: {
    id: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    category: {
      type: String,
      default: 'App',
    },

    sets: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    shortcuts() {
      return collect(this.sets)
        .pluck('shortcuts')
        .flatten(1)
        .map(this.formatShortcut)
        .filter(shortcut => shortcut.isPossible)
        .toArray()
    },

    learnedShortcuts() {
      return collect(this.runs)
        .pluck('setId')
        .unique()
        .map(setId => this.bestRunBySet(setId))
        .pluck('learnedIds')
        .flatten(1)
        .map(shortcutId => this.shortcuts.find(shortcut => shortcut.id === shortcutId))
        .toArray()
    },

    runs() {
      return this.$db.runs.filter(run => run.appId === this.id)
    },

    latestUpdatedSet() {
      const latestRun = collect(this.runs)
        .sortByDesc('createdAt')
        .first()

      if (!latestRun) {
        return null
      }

      return this.set(latestRun.setId)
    },

    recentSets() {
      return collect(this.runs)
        .pluck('setId')
        .unique()
        .map(setId => this.bestRunBySet(setId))
        .filter(run => run.learnedIds.length > 0)
        .pluck('setId')
        .map(setId => this.set(setId))
        .toArray()
    },

    unrecentSets() {
      const { recentSets } = this
      return this.sets
        .filter(set => !recentSets.find(recentSet => recentSet.id === set.id))
    },
  },

  methods: {
    set(id = null) {
      return this.sets.find(set => set.id === id)
    },

    shortcutsBySet(id = null) {
      const set = this.sets.find(item => item.id === id)

      if (!set) {
        return []
      }

      return set.shortcuts
        .map(this.formatShortcut)
        .filter(shortcut => shortcut.isPossible)
    },

    latestRunBySet(id = null) {
      return collect(this.runs)
        .filter(run => run.setId === id)
        .sortByDesc('createdAt')
        .first()
    },

    bestRunBySet(id = null) {
      return collect(this.runs)
        .filter(run => run.setId === id)
        .sortByDesc(set => set.learnedIds.length)
        .first()
    },

    formatShortcut(shortcut) {
      const resolvedKeys = Keyboard.resolveCodesFromKeys(shortcut.keys)
      const isPossible = Keyboard.isPossible(resolvedKeys)

      return {
        ...shortcut,
        id: this.generateShortcutId(shortcut),
        resolvedKeys,
        isPossible,
      }
    },

    generateShortcutId(shortcut) {
      const string = `${this.id}${collect(shortcut.keys).sort().toArray().toString()}`
      return shajs('sha256').update(string).digest('hex')
    },
  },
}
