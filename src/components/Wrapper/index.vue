<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <transition :name="transitionName">
      <router-view class="route" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',

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
<style lang="scss" src="./style.scss" scoped></style>
