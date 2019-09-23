<template>
  <button
    class="level"
    type="button"
    :to="{ name: 'app.test', params: { level: level.level } }"
  >
    <div class="level__card">
      <div class="level__title">
        {{ level.title }}
      </div>
      <div>
        {{ app.shortcutsByLevel(level.level).length }} Shortcuts
      </div>
      <router-link
        class="level__button"
        :to="{ name: 'app.test', params: { level: level.level } }"
      >
        Test
      </router-link>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    app: {
      required: true,
      type: Object,
    },

    level: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
