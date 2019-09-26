<template>
  <div class="app-route">
    <transition :name="transitionName">
      <router-view class="route" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    transitionName() {
      return this.$route.name === 'app.groups' ? 'slide-right' : 'slide-left'
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
