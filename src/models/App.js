export default {
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
}
