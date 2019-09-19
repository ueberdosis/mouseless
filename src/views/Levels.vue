<template>
  <div>
    <router-link :to="{ name: 'apps' }">
      ← Apps
    </router-link>

    <router-link
      class="level"
      v-for="level in app.levels"
      :key="level.level"
      :to="{ name: 'app.test', params: { level: level.level } }"
    >
      <div>
        {{ level.title }}
      </div>
      <div>
        {{ app.shortcutsByLevel(level.level).length }} Shortcuts
      </div>
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
  background-color: #222;
  color: #fff;
  border-radius: 9px;
  padding: 16px;
  margin-bottom: 8px;
}
</style>
