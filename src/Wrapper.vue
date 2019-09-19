<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <router-view />
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
.wrapper {
  position: relative;
  height: 100vh;
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
    height: 36px;
    pointer-events: none;
    -webkit-app-region: drag;
  }
}
</style>
