<template>
  <div class="app-route" :style="`background-color: ${app.color}`">
    <div class="app-route__header">
      <div class="app-route__title">
        {{ app.title }}
        <template v-if="level">
          {{ level.title }}
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

    level() {
      return this.$db.level(this.$route.params.level)
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
