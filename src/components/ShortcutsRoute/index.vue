<template>
  <page :title="title" :traffic-light-spacing="false">
    <template v-slot>
      <template v-if="app">
        <div v-for="set in app.sets" :key="set.id">
          <div>
            {{ set.title }}
          </div>
          <div v-for="shortcut in app.shortcutsBySet(set.id)" :key="shortcut.id">
            {{ shortcut.title }}
            <div v-for="key in shortcut.resolvedKeys" :key="key">
              {{ key }}
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

  mounted() {
    ipcRenderer.on('currentApp', (event, systemTitle) => {
      console.log({ systemTitle })

      if (systemTitle !== 'Electron') {
        this.systemTitle = systemTitle
      }
    })
  },
}
</script>
