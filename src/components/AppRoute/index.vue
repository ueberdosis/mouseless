<template>
  <div class="app-route">
    <transition :name="transitionName">
      <router-view class="route" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppRoute',

  computed: {
    transitionName() {
      return this.$route.name === 'app.sets' ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
