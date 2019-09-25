<template>
  <div
    class="app-route"
    :class="{ 'is-inverted': app.invertColor }"
    :style="`background-color: ${app.color}`"
  >
    <div class="app-route__header">
      <div class="app-route__title">
        {{ app.title }}
        <template v-if="group">
          {{ group.title }}
        </template>
      </div>
      <router-link class="app-route__back" :to="{ name: 'apps' }">
        ← Apps
      </router-link>
    </div>
    <div class="app-route__content">
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

    group() {
      return this.app.group(this.$route.params.group)
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
