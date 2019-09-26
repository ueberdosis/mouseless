<template>
  <div class="group" :class="{ 'has-animation': animate }">
    <div class="group__card">
      <div class="group__content">
        <img class="group__image" src="@/assets/images/illustration.png">
        <div class="group__title">
          {{ group.title }}
        </div>
        <div class="group__sub-title">
          {{ app.shortcutsByGroup(group.id).length }} Shortcuts
        </div>
      </div>
      <div class="group__footer">
        <div class="group__button" @click="onClick" v-if="isActive">
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

    group: {
      required: true,
      type: Object,
    },

    isActive: {
      default: false,
      type: Boolean,
    },

    animate: {
      default: false,
      type: Boolean,
    },
  },

  methods: {
    onClick() {
      Event.emit('beforeAnimation', this.$el)
      this.$router.push({
        name: 'app.test',
        params: { groupId: this.group.id },
      })
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
