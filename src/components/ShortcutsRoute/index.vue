<template>
  <page :title="title" :traffic-light-spacing="false">
    <template v-slot>
      <div>
        current app: {{ app }}
      </div>
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
      app: null,
    }
  },

  computed: {
    title() {
      return this.app || 'Mouseless'
    },
  },

  mounted() {
    ipcRenderer.on('currentApp', (event, app) => {
      this.app = app
    })
  },
}
</script>
