import { Base64 } from 'js-base64'
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

    formatShortcut(shortcut) {
      return {
        ...shortcut,
        id: Base64.encode(`${this.id}${shortcut.keys.sort().toString()}`),
        resolvedKeys: Keyboard.resolveCodesFromKeys(shortcut.keys),
      }
    },
  },
}
