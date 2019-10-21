<template>
  <div class="options-overlay">
    <div class="options-overlay__header">
      <h2>
        Options
      </h2>
      <btn icon="close" @click.native="close" />
    </div>

    <div class="options-overlay__content">
      <div class="options-overlay__section" v-if="licensed">
        <div>
          License
        </div>
        <div>
          Licenced to {{ licensed }}
        </div>
      </div>

      <div class="options-overlay__section" v-if="licensed">
        <div>
          Menubar
        </div>
        <div>
          Show in menu bar
        </div>
      </div>

      <div class="options-overlay__section" v-if="licensed">
        <div>
          Danger Zone
        </div>
        <div>
          <btn @click.native="resetProgress" is-red>
            Reset Progress
          </btn>
          <btn @click.native="resetAll" is-red v-if="isDevelopment">
            Reset All
          </btn>
        </div>
      </div>
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

  data() {
    return {
      isDevelopment: process.env.NODE_ENV === 'development',
    }
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

    resetProgress() {
      if (confirm('Do you really want to reset your progress?')) { // eslint-disable-line
        this.$db.store.delete('runs')
        window.location.reload()
      }
    },

    resetAll() {
      if (confirm('Do you really want to reset everything?')) { // eslint-disable-line
        this.$db.store.clear()
        window.location.reload()
      }
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
