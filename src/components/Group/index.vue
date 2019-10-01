<template>
  <router-link class="group" :to="{ name: 'app.test', params: { groupId: group.id }}">
    <div class="group__content">
      <div class="group__title">
        {{ group.title }}
      </div>
    </div>
    <div class="group__meta">
      <template v-if="bestRun && finished">
        finished
      </template>
      <template v-else-if="bestRun && !finished && bestRun.learnedIds.length">
        {{ bestRun.learnedIds.length }} / {{ shortcuts.length }}
        <circle-progress
          class="group__progress"
          :value="bestRun.learnedIds.length"
          :max-value="shortcuts.length"
        />
      </template>
      <template v-else>
        {{ shortcuts.length }}
      </template>
      <icon class="group__arrow" name="arrow-right" />
    </div>
  </router-link>
</template>

<script>
import Icon from '@/components/Icon'
import CircleProgress from '@/components/CircleProgress'

export default {
  components: {
    Icon,
    CircleProgress,
  },

  props: {
    app: {
      required: true,
      type: Object,
    },

    group: {
      required: true,
      type: Object,
    },
  },

  computed: {
    shortcuts() {
      return this.app.shortcutsByGroup(this.group.id)
    },

    bestRun() {
      return this.app.bestRunByGroup(this.group.id)
    },

    finished() {
      return this.bestRun && this.bestRun.finishedAt
    },
  },

  methods: {
    onClick() {
      this.$router.push({
        name: 'app.test',
        params: { groupId: this.group.id },
      })
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
