<template>
  <router-link class="set" :to="{ name: 'app.test', params: { setId: set.id }}">
    <div class="set__content">
      <div class="set__title truncate">
        {{ set.title }}
      </div>
    </div>
    <div class="set__meta">
      <span class="set__finished" v-if="bestRun && finished">
        {{ shortcuts.length }}
        <img class="set__finished-image" src="@/assets/images/check.svg">
      </span>
      <template v-else-if="bestRun && !finished && bestRun.learnedIds.length">
        <text-progress
          :value="bestRun.learnedIds.length"
          :max-value="shortcuts.length"
        />
        <circle-progress
          class="set__progress"
          :value="bestRun.learnedIds.length"
          :max-value="shortcuts.length"
        />
      </template>
      <template v-else>
        {{ shortcuts.length }}
      </template>
      <icon class="set__arrow" name="arrow-right" />
    </div>
  </router-link>
</template>

<script>
import Icon from '@/components/Icon'
import TextProgress from '@/components/TextProgress'
import CircleProgress from '@/components/CircleProgress'

export default {
  name: 'Set',

  components: {
    Icon,
    TextProgress,
    CircleProgress,
  },

  props: {
    app: {
      required: true,
      type: Object,
    },

    set: {
      required: true,
      type: Object,
    },
  },

  computed: {
    shortcuts() {
      return this.app.shortcutsBySet(this.set.id)
    },

    bestRun() {
      return this.app.bestRunBySet(this.set.id)
    },

    finished() {
      return this.bestRun && this.bestRun.finishedAt
    },
  },

  methods: {
    onClick() {
      this.$router.push({
        name: 'app.test',
        params: { setId: this.set.id },
      })
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
