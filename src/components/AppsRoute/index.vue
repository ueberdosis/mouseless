<template>
  <page>
    <template v-slot>
      <list-section title="Recent Apps" v-if="recentApps.length">
        <apps-list :apps="recentApps" />
      </list-section>
      <list-section title="Apps">
        <apps-list :apps="apps" />
      </list-section>
    </template>
  </page>
</template>

<script>
import Page from '@/components/Page'
import AppsList from '@/components/AppsList'
import ListSection from '@/components/ListSection'

export default {
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
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
