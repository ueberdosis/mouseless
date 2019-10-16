<template>
  <div>
    current app: {{ app }}
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  data() {
    return {
      app: null,
    }
  },

  mounted() {
    ipcRenderer.on('currentApp', (event, app) => {
      this.app = app
    })
  },
}
</script>
