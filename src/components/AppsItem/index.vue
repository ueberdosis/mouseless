<template>
  <router-link class="apps-item" :to="{ name: 'app.sets', params: { appId: app.id } }">
    <img class="apps-item__logo" :src="logo">
    <div class="apps-item__content">
      <div class="apps-item__title">
        {{ app.title }}
      </div>
      <div class="apps-item__meta">
        <template v-if="learnedShortcuts.length">
          {{ learnedShortcuts.length }} / {{ shortcuts.length }} mastered
          <circle-progress
            :value="learnedShortcuts.length"
            :max-value="shortcuts.length"
          />
        </template>
        <template v-else>
          {{ shortcuts.length }} Shortcuts
        </template>
      </div>
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
  },

  computed: {
    logo() {
      return require(`@/assets/logos/${this.app.id}.svg`)
    },

    learnedShortcuts() {
      return this.app.learnedShortcuts
    },

    shortcuts() {
      return this.app.shortcuts
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
