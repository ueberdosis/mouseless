import chroma from 'chroma-js'
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

    color: {
      type: String,
      default: '#FFF',
    },

    groups: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    invertColor() {
      return chroma(this.color).luminance() < 0.5
    },

    shortcuts() {
      return collect(this.groups)
        .pluck('shortcuts')
        .flatten(1)
        .map(this.formatShortcut)
        .toArray()
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

    formatShortcut(shortcut) {
      return {
        ...shortcut,
        id: Base64.encode(`${this.id}${shortcut.keys.toString()}`),
        resolvedKeys: Keyboard.resolveCodesFromKeys(shortcut.keys),
      }
    },
  },
}
