<template>
  <div>
    <router-link
      class="level"
      v-for="level in app.levels"
      :key="level.level"
      :to="{ name: 'app.test', params: { level: level.level } }"
    >
      {{ level.title }}
    </router-link>
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
.level {
  display: block;
}
</style>
