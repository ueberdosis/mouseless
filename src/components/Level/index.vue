<template>
  <div class="level">
    <div class="level__card">
      <div class="level__title">
        {{ level.title }}
      </div>
      <div>
        {{ app.shortcutsByLevel(level.level).length }} Shortcuts
      </div>
      <div class="level__button" @click="onClick" v-if="isActive">
        Animated Test
      </div>
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'

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

    isActive: {
      default: false,
      type: Boolean,
    },
  },

  methods: {
    onClick() {
      Event.emit('beforeAnimation', this.$el)
      this.$router.push({
        name: 'app.levels.test',
        params: { level: this.level.level },
      })
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
