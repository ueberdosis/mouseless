import chroma from 'chroma-js'
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

    shortcuts: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    invertColor() {
      return chroma(this.color).luminance() < 0.5
    },

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
      return this.shortcuts.map(shortcut => ({
        ...shortcut,
        resolvedKeys: Keyboard.resolveCodesFromKeys(shortcut.keys),
      }))
    },
  },

  methods: {
    shortcutsByLevel(level = null) {
      return this.formattedShortcuts.filter(shortcut => shortcut.level === level)
    },
  },
}
