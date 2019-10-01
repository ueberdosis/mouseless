<template>
  <router-link class="group" :to="{ name: 'app.test', params: { groupId: group.id }}">
    <div class="group__content">
      <div class="group__title">
        {{ group.title }}
      </div>
    </div>
    <div class="group__meta">
      <template v-if="latestRun && finished">
        finished
      </template>
      <template v-else-if="latestRun && !finished">
        {{ latestRun.learnedIds.length }} / {{ shortcuts.length }}
        <circle-progress
          class="group__progress"
          :value="latestRun.learnedIds.length"
          :max-value="shortcuts.length"
        />
      </template>
      <template v-else>
        {{ shortcuts.length }}
      </template>
    </div>
  </router-link>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'

export default {
  components: {
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

    latestRun() {
      return this.app.latestRunByGroup(this.group.id)
    },

    finished() {
      return this.latestRun && this.latestRun.finishedAt
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
