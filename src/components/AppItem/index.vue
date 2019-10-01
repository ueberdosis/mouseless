<template>
  <router-link class="app-item" :to="{ name: 'app.groups', params: { appId: app.id } }">
    <img class="app-item__logo" :src="logo">
    <div class="app-item__content">
      <div class="app-item__title">
        {{ app.title }}
      </div>
      <div class="app-item__meta">
        <template v-if="learnedShortcuts.length">
          {{ learnedShortcuts.length }} / {{ shortcuts.length }}
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
