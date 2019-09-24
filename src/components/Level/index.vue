<template>
  <div class="level">
    <div class="level__card">
      <div class="level__content">
        <img class="level__image" src="@/assets/images/illustration.png">
        <div class="level__title">
          {{ level.title }}
        </div>
        <div class="level__sub-title">
          {{ app.shortcutsByLevel(level.level).length }} Shortcuts
        </div>
      </div>
      <div class="level__footer">
        <div class="level__button" @click="onClick" v-if="isActive">
          Training
        </div>
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
