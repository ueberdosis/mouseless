<template>
  <page class="apps-route">
    <template v-slot>
      <list-section title="Recent" v-if="recentApps.length">
        <apps-list :apps="recentApps" />
      </list-section>
      <list-section v-for="category in categories" :title="category.title" :key="category.title">
        <apps-list :apps="category.apps" />
      </list-section>
      <button
        class="apps-route__feedback"
        type="button"
        data-focusable
        @click="openFeedbackBoard"
      >
        Your favorite app is not yet included?<br>
        Vote for it to be part of the next update →
      </button>
    </template>
  </page>
</template>

<script>
import { shell } from 'electron'
import collect from 'collect.js'
import Page from '@/components/Page'
import AppsList from '@/components/AppsList'
import ListSection from '@/components/ListSection'

export default {
  name: 'AppsRoute',

  components: {
    Page,
    AppsList,
    ListSection,
  },

  data() {
    return {
      apps: this.$db.apps,
    }
  },

  computed: {
    recentApps() {
      return this.apps.filter(app => app.learnedShortcuts.length > 0)
    },

    categories() {
      return collect(this.apps)
        .pluck('category')
        .unique()
        .sort()
        .map(category => ({
          title: category,
          apps: this.apps.filter(app => app.category === category),
        }))
        .toArray()
    },
  },

  methods: {
    openFeedbackBoard() {
      shell.openExternal('https://feedback.mouseless.app')
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
