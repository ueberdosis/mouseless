<template>
  <div class="options-overlay">
    <div class="options-overlay__header">
      <h2>
        Options
      </h2>
      <btn icon="close" @click.native="close" />
    </div>

    <div class="options-overlay__content">
      <div class="options-overlay__section" v-if="verified">
        <div>
          License
        </div>
        <div>
          Licenced to {{ licenseEmail }}
        </div>
      </div>

      <div class="options-overlay__section" v-if="verified">
        <div>
          Menubar
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showMenubar">
            <span>
              Show in menu bar
            </span>
            <button
              class="options-overlay__restart"
              type="button"
              @click="restart"
              v-if="showRestartButton"
            >
              Restart App
            </button>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="verified">
        <div>
          Autostart
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="autoStart">
            <span>
              Start app on launch
            </span>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="verified">
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
import { remote } from 'electron'
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
      showMenubar: this.$db.store.get('showMenubar', true),
      autoStart: this.$db.store.get('autoStart', true),
      showRestartButton: false,
    }
  },

  watch: {
    showMenubar() {
      this.$db.store.set('showMenubar', this.showMenubar)
      this.showRestartButton = true
    },

    autoStart() {
      this.$db.store.set('autoStart', this.autoStart)
    },
  },

  computed: {
    verified() {
      return this.$db.verified
    },

    licenseEmail() {
      return this.$db.verification.purchase.email
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

    restart() {
      remote.app.relaunch()
      remote.app.exit(0)
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
