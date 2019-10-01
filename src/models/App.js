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

    groups: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    shortcuts() {
      return collect(this.groups)
        .pluck('shortcuts')
        .flatten(1)
        .map(this.formatShortcut)
        .toArray()
    },

    learnedShortcuts() {
      return collect(this.runs)
        .pluck('groupId')
        .unique()
        .map(groupId => this.bestRunByGroup(groupId))
        .pluck('learnedIds')
        .flatten(1)
        .map(shortcutId => this.shortcuts.find(shortcut => shortcut.id === shortcutId))
        .toArray()
    },

    runs() {
      return this.$db.runs.filter(run => run.appId === this.id)
    },

    latestUpdatedGroup() {
      const latestRun = collect(this.runs)
        .sortByDesc('createdAt')
        .first()

      if (!latestRun) {
        return null
      }

      return this.group(latestRun.groupId)
    },

    recentGroups() {
      return collect(this.runs)
        .pluck('groupId')
        .unique()
        .map(groupId => this.bestRunByGroup(groupId))
        .filter(run => run.learnedIds.length > 0)
        .pluck('groupId')
        .map(groupId => this.group(groupId))
        .toArray()
    },

    unrecentGroups() {
      const { recentGroups } = this
      return this.groups
        .filter(group => !recentGroups.find(recentGroup => recentGroup.id === group.id))
    },
  },

  methods: {
    group(id = null) {
      return this.groups.find(group => group.id === id)
    },

    shortcutsByGroup(id = null) {
      const group = this.groups.find(item => item.id === id)

      if (!group) {
        return []
      }

      return group.shortcuts.map(this.formatShortcut)
    },

    latestRunByGroup(id = null) {
      return collect(this.runs)
        .filter(run => run.groupId === id)
        .sortByDesc('createdAt')
        .first()
    },

    bestRunByGroup(id = null) {
      return collect(this.runs)
        .filter(run => run.groupId === id)
        .sortBy('learnedIds')
        .first()
    },

    formatShortcut(shortcut) {
      return {
        ...shortcut,
        id: this.generateShortcutId(shortcut),
        resolvedKeys: Keyboard.resolveCodesFromKeys(shortcut.keys),
      }
    },

    generateShortcutId(shortcut) {
      const string = `${this.id}${collect(shortcut.keys).sort().toArray().toString()}`
      return shajs('sha256').update(string).digest('hex')
    },
  },

  // mounted() {
  //   console.log(this.title, this.learnedShortcuts)
  // },
}
