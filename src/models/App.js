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

    color: {
      type: String,
      default: '#FFF',
    },

    lightColor: {
      type: String,
      default: '#FFF',
    },

    shortcuts: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    levels() {
      return collect(this.shortcuts)
        .pluck('level')
        .unique()
        .sort()
        .map(level => this.$db.level(level))
        .filter()
        .toArray()
    },

    formattedShortcuts() {
      return this.shortcuts.map(item => ({
        ...item,
        resolvedShortcut: Keyboard.resolveCodesFromKeys(item.shortcut),
      }))
    },
  },

  methods: {
    shortcutsByLevel(level = null) {
      return this.formattedShortcuts.filter(shortcut => shortcut.level === level)
    },
  },
}
