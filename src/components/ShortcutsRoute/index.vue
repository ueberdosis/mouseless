<template>
  <page
    class="shortcuts-route"
    :title="title"
    :traffic-light-spacing="false"
    :blur="false"
  >
    <template v-slot>
      <template v-if="app">
        <div class="shortcuts-route__set" v-for="set in app.sets" :key="set.id">
          <div class="shortcuts-route__title">
            {{ set.title }}
          </div>
          <div class="shortcuts-route__shortcut" v-for="shortcut in app.shortcutsBySet(set.id)" :key="shortcut.id">
            <div class="shortcuts-route__shortcut-title">
              {{ shortcut.title }}
            </div>
            <div class="shortcuts-route__shortcut-keys">
              <div class="shortcuts-route__shortcut-key" v-for="key in shortcut.resolvedKeys" :key="key">
                {{ key | key | uppercase }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </page>
</template>

<script>
import { ipcRenderer } from 'electron'
import Page from '@/components/Page'

export default {
  components: {
    Page,
  },

  data() {
    return {
      systemTitle: null,
    }
  },

  computed: {
    title() {
      return this.app ? this.app.title : this.systemTitle
    },

    app() {
      if (!this.systemTitle) {
        return null
      }

      return this.$db.apps.find(app => app.systemTitle === this.systemTitle)
    },
  },

  methods: {
    onCurrentApp(event, systemTitle) {
      console.log({ systemTitle })

      if (systemTitle !== 'Electron') {
        this.systemTitle = systemTitle
      }
    },
  },

  mounted() {
    ipcRenderer.on('currentApp', this.onCurrentApp)
  },

  beforeDestroy() {
    ipcRenderer.removeListener('currentApp', this.onCurrentApp)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
