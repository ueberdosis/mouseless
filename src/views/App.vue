<template>
  <div class="app" :style="`background-color: ${app.color}`">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    app() {
      return this.$db.app(this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  padding: 40px;
}
</style>
