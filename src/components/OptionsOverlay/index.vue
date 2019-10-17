<template>
  <div class="options-overlay">
    <div>
      <h2>
        Options
      </h2>
    </div>

    <div v-if="licensed">
      Licenced to {{ licensed }}
    </div>

    <div>
      <btn @click.native="close">
        Close
      </btn>
    </div>

    <div>
      <btn @click.native="reset">
        Reset
      </btn>

      <btn @click.native="resetAll">
        Reset All
      </btn>
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'
import Btn from '@/components/Btn'

export default {
  name: 'OptionsOverlay',

  components: {
    Btn,
  },

  computed: {
    licensed() {
      return this.$db.verified
    },
  },

  methods: {
    close() {
      Event.emit('hideOptions')
    },

    reset() {
      this.$db.store.delete('runs')
    },

    resetAll() {
      this.$db.store.clear()
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
