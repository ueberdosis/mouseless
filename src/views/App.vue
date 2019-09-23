<template>
  <div class="app" :style="`background-color: ${app.color}`">
    <div class="app__header">
      <router-link :to="{ name: 'apps' }">
        ← Apps
      </router-link>
    </div>
    <div class="app__content">
      <router-view />
    </div>
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

  &__header {
    padding: 8px;
    padding-left: 80px;
  }
}
</style>
