<template>
  <div class="shortcuts-route">
    <div class="shortcuts-route__loader" v-if="loading">
      Loading…
    </div>
    <div class="shortcuts-route__header" v-if="!loading">
      <div class="shortcuts-route__header-bar">
        <div class="shortcuts-route__title">
          <img class="shortcuts-route__logo" :src="logo" v-if="logo">
          {{ appTitle || 'Mouseless' }}
        </div>
        <button class="shortcuts-route__maximize" @click="maximize">
          <icon name="maximize" />
        </button>
      </div>
      <input
        class="shortcuts-route__search"
        placeholder="Search…"
        v-model="query"
        type="text"
        autofocus
        ref="search"
        v-if="sets.length || query"
      >
    </div>
    <div class="shortcuts-route__content" v-if="!loading">
      <div class="shortcuts-route__placeholder" v-if="showPlaceholder">
        <img class="shortcuts-route__placeholder-image" src="~@/assets/images/logo.png">
        <p>
          Open this to see the keyboard shortcuts for your current app.
          Nothing to see for Mouseless here though.
        </p>
      </div>
      <template v-else>
        <template v-for="set in sets">
          <div class="shortcuts-route__set" :key="set.id" v-if="set.shortcuts.length">
            <div class="shortcuts-route__set-title">
              {{ set.title }}
            </div>
            <div
              class="shortcuts-route__shortcut"
              v-for="shortcut in set.shortcuts"
              :key="shortcut.id"
            >
              <div class="shortcuts-route__shortcut-title">
                {{ shortcut.title }}
              </div>
              <div class="shortcuts-route__shortcut-keys">
                <div
                  class="shortcuts-route__shortcut-key"
                  v-for="key in shortcut.resolvedKeys"
                  :key="key"
                >
                  {{ key | key | uppercase }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import collect from 'collect.js'
import Fuse from 'fuse.js'
import uuidv4 from 'uuid/v4'
import { ipcRenderer } from 'electron'
import Icon from '@/components/Icon'
import Keyboard from '@/services/Keyboard'

export default {
  components: {
    Icon,
  },

  data() {
    return {
      loading: true,
      activeWindow: null,
      title: null,
      query: null,
    }
  },

  computed: {
    appTitle() {
      return this.app ? this.app.title : this.title
    },

    logo() {
      if (!this.app) {
        return null
      }

      return require(`@/assets/logos/${this.app.id}.svg`)
    },

    app() {
      if (!this.title) {
        return null
      }

      return this.$db.apps.find(app => app.title === this.title)
    },

    sets() {
      if (this.app) {
        return this.app.sets
          .map(set => ({
            ...set,
            shortcuts: this.filterShortcuts(this.app.shortcutsBySet(set.id)),
          }))
          .filter(set => set.shortcuts.length)
      }

      if (!this.activeWindow) {
        return []
      }

      const resolvedShortcuts = this.activeWindow.shortcuts
        .map(item => {
          const id = uuidv4()
          const resolvedKeys = Keyboard.resolveCodesFromKeys(item.keys)
          const isPossible = Keyboard.isPossible(resolvedKeys)

          return {
            ...item,
            id,
            resolvedKeys,
            isPossible,
          }
        })
        .filter(shortcut => shortcut.isPossible)

      const sets = collect(resolvedShortcuts)
        .pluck('group')
        .unique()
        .map(group => ({
          id: uuidv4(),
          title: group,
          shortcuts: this.filterShortcuts(resolvedShortcuts
            .filter(resolvedShortcut => resolvedShortcut.group === group)),
        }))
        .filter(set => set.shortcuts.length)
        .toArray()

      return sets
    },

    showPlaceholder() {
      return this.title === 'Mouseless'
    },
  },

  methods: {
    onLoading() {
      this.query = null
      this.loading = true
    },

    onHide() {
      this.query = null
      this.loading = true
    },

    onActiveWindow(event, activeWindow) {
      this.loading = false
      this.activeWindow = activeWindow
      this.title = activeWindow.app

      this.$nextTick(() => {
        if (this.$refs.search) {
          this.$refs.search.focus()
        }
      })
    },

    maximize() {
      ipcRenderer.send('showMainWindow')
    },

    filterShortcuts(shortcuts) {
      if (!this.query) {
        return shortcuts
      }

      const fuse = new Fuse(shortcuts, {
        threshold: 0.3,
        keys: ['title'],
      })

      return fuse.search(this.query)
    },
  },

  mounted() {
    ipcRenderer.on('activeWindow:loading', this.onLoading)
    ipcRenderer.on('activeWindow:response', this.onActiveWindow)
    ipcRenderer.on('activeWindow:hide', this.onHide)
  },

  beforeDestroy() {
    ipcRenderer.removeListener('activeWindow:loading', this.onLoading)
    ipcRenderer.removeListener('activeWindow:response', this.onActiveWindow)
    ipcRenderer.removeListener('activeWindow:hide', this.onHide)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
