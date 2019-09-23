<template>
  <div class="app" :style="`background-color: ${app.color}`">
    <div class="app__header">
      <router-link class="app__back" :to="{ name: 'apps' }">
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
    padding: 6px;
    padding-left: 80px;
  }

  &__content {
    flex: 1 1 auto;
  }

  &__back {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 8px;
    cursor: pointer;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: '';
      display: block;
      background-color: currentColor;
      opacity: 0;
      border-radius: 6px;
      transition: 0.2s $ease;
    }

    &:hover::after {
      opacity: 0.1;
    }
  }
}
</style>
