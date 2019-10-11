<template>
  <router-link class="apps-item" :to="{ name: 'app.sets', params: { appId: app.id } }">
    <img class="apps-item__logo" :src="logo">
    <div class="apps-item__content">
      <div class="apps-item__title truncate">
        {{ app.title }}
      </div>
      <div class="apps-item__meta">
        <template v-if="learnedShortcuts.length">
          <div>
            <text-progress
              :value="learnedShortcuts.length"
              :max-value="shortcuts.length"
            />
            mastered
          </div>
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
import TextProgress from '@/components/TextProgress'
import CircleProgress from '@/components/CircleProgress'

export default {
  name: 'AppsItem',

  components: {
    TextProgress,
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
