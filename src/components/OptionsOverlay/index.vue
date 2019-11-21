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
          Support
        </div>
        <div>
          <a href="mailto:support@mouseless.app">
            support@mouseless.app
          </a>
        </div>
      </div>

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
          Dock icon
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showDockIcon">
            <span>
              Show in dock
            </span>
            <button
              class="options-overlay__restart"
              type="button"
              @click="restart"
              v-if="showDockIconRestartButton"
            >
              Restart App
            </button>
          </label>
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
              v-if="showMenubarRestartButton"
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
import Store from '@/services/Store'

export default {
  name: 'OptionsOverlay',

  components: {
    Btn,
  },

  data() {
    return {
      isDevelopment: process.env.NODE_ENV === 'development',
      showDockIcon: Store.get('showDockIcon', true),
      showMenubar: Store.get('showMenubar', true),
      autoStart: Store.get('autoStart', true),
      showDockIconRestartButton: false,
      showMenubarRestartButton: false,
    }
  },

  watch: {
    showDockIcon() {
      Store.set('showDockIcon', this.showDockIcon)
      this.showDockIconRestartButton = true
    },

    showMenubar() {
      Store.set('showMenubar', this.showMenubar)
      this.showMenubarRestartButton = true
    },

    autoStart() {
      Store.set('autoStart', this.autoStart)
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
        Store.delete('runs')
        window.location.reload()
      }
    },

    resetAll() {
      if (confirm('Do you really want to reset everything?')) { // eslint-disable-line
        Store.clear()
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
