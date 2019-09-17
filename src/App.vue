<template>
  <div class="app" :class="{ 'is-loaded': isLoaded }">
    <div class="inner">
      <div class="navigation">
        <router-link class="navigation-item" :to="{ name: 'apps' }">
          ← Apps
        </router-link>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true
    }, 0)
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>

<style lang="scss" scoped>
.app {
  position: relative;
  height: 100vh;
  overflow: scroll;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-loaded {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    pointer-events: none;
    -webkit-app-region: drag;
  }
}

.inner {
  padding: 40px;
}

.navigation {
  margin-bottom: 1rem;
}

.navigation-item {
  font-weight: bold;
  text-decoration: none;
}
</style>
