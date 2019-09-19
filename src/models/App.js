import collect from 'collect.js'

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
    levels() {
      return collect(this.shortcuts)
        .pluck('level')
        .unique()
        .sort()
        .map(level => this.$db.level(level))
        .filter()
        .toArray()
    },
  },
}
