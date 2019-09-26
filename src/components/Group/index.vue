<template>
  <div class="group" :class="{ 'is-active': isActive, 'has-animation': animate }">
    <div class="group__card">
      <div class="group__content">
        <!-- <img class="group__image" src="@/assets/images/illustration.png"> -->
        <div class="group__title">
          {{ group.title }}
        </div>
        <div class="group__sub-title">
          {{ shortcuts.length }} Shortcuts
        </div>
        <div v-if="latestRun">
          <div v-if="finished">
            finished
          </div>
          <div v-else>
            {{ latestRun.learnedIds.length }} / {{ shortcuts.length }} learned
          </div>
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

  computed: {
    shortcuts() {
      return this.app.shortcutsByGroup(this.group.id)
    },

    latestRun() {
      return this.app.latestRunByGroup(this.group.id)
    },

    finished() {
      return this.latestRun && this.latestRun.finishedAt
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
