<template>
  <div class="options-overlay" v-if="user.isVerified">
    <div class="options-overlay__header">
      <h2>
        Options
      </h2>
      <btn icon="close" @click.native="close" />
    </div>

    <div class="options-overlay__content">
      <div class="options-overlay__section">
        <div>
          Support
        </div>
        <div>
          <a href="mailto:support@mouseless.app">
            support@mouseless.app
          </a>
        </div>
      </div>

      <div class="options-overlay__section" v-if="user.email">
        <div>
          License
        </div>
        <div>
          Licenced to {{ user.email }}
        </div>
      </div>

      <div class="options-overlay__section">
        <div>
          Shortcut
        </div>
        <div>
          <template v-if="isListening">
            <span class="grey">
              Press any shortcut…
            </span>
            <btn @click.native="cancelListening">
              Cancel
            </btn>
          </template>
          <template v-else>
            <span>
              <small-key
                v-for="key in shortcut"
                :key="key"
                :name="key"
              />
            </span>
            <btn @click.native="listenToNewShortcut">
              Change
            </btn>
          </template>
        </div>
      </div>

      <div class="options-overlay__section">
        <div>
          Menu bar
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showMenubar">
            <span>
              Show in menu bar
            </span>
            <btn @click.native="restart" is-red-text v-if="showMenubarRestartButton">
              Restart App
            </btn>
          </label>
        </div>
      </div>

      <div class="options-overlay__section">
        <div>
          Dock icon
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showDockIcon">
            <span>
              Show in dock
            </span>
            <btn @click.native="restart" is-red-text v-if="showDockIconRestartButton">
              Restart App
            </btn>
          </label>
        </div>
      </div>

      <div class="options-overlay__section">
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

      <div class="options-overlay__section">
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
import { remote, ipcRenderer } from 'electron'
import Event from '@/services/Event'
import Keyboard from '@/services/Keyboard'
import User from '@/services/User'
import Btn from '@/components/Btn'
import Store from '@/services/Store'
import SmallKey from '@/components/SmallKey'

export default {
  name: 'OptionsOverlay',

  components: {
    Btn,
    SmallKey,
  },

  data() {
    return {
      isDevelopment: process.env.NODE_ENV === 'development',
      showDockIcon: Store.get('showDockIcon', true),
      showMenubar: Store.get('showMenubar', true),
      autoStart: Store.get('autoStart', true),
      showDockIconRestartButton: false,
      showMenubarRestartButton: false,
      keyboard: null,
      shortcut: Store.get('shortcut'),
      user: User,
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
    isListening() {
      return !!this.keyboard
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

    listenToNewShortcut() {
      this.keyboard = new Keyboard()

      this.keyboard.on('shortcut', event => {
        event.preventDefault()
        Store.set('shortcut', this.keyboard.resolvedKeys)
        ipcRenderer.send('shortcutChanged')
        this.shortcut = this.keyboard.resolvedKeys
        this.cancelListening()
      })
    },

    cancelListening() {
      this.keyboard.destroy()
      this.keyboard = null
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
