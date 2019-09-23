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
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    flex: 0 0 auto;
    padding: 8px;
    padding-left: 80px;
  }

  &__content {
    flex: 1 1 auto;
  }
}
</style>
