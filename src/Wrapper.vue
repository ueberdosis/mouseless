<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <transition :name="transitionName">
      <router-view class="route" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },

  computed: {
    transitionName() {
      return this.$route.name === 'apps' ? 'slide-right' : 'slide-left'
    },
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

.route {
  width: 100%;
  border-radius: 4px;
  position: absolute;
  will-change: transform;
  transition:
    opacity 0.7s $easeInOutQuint,
    transform 0.7s $easeInOutQuint
  ;
}

.slide-left-enter,
.slide-right-leave-active {
  transform: translate(100%, 0);
}

.slide-right-enter,
.slide-left-leave-active {
  transform: scale(0.9);
  opacity: 0.5;
}

.slide-right-enter-active {
  z-index: -1;
}
</style>
