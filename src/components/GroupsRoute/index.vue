<template>
  <page>
    <template v-slot:left>
      <btn icon="arrow-left" @click.native="goBack">
        Apps
      </btn>
    </template>
    <template v-slot:center>
      {{ app.title }}
    </template>
    <template v-slot>
      <list-section title="Recent Sets" v-if="recentGroups.length">
        <groups :groups="recentGroups" :app="app" />
      </list-section>
      <list-section title="Sets" v-if="unrecentGroups.length">
        <groups :groups="unrecentGroups" :app="app" />
      </list-section>
    </template>
  </page>
</template>

<script>
import Btn from '@/components/Btn'
import Page from '@/components/Page'
import Groups from '@/components/Groups'
import ListSection from '@/components/ListSection'

export default {
  components: {
    Btn,
    Page,
    Groups,
    ListSection,
  },

  data() {
    return {
      previousRoute: null,
    }
  },

  computed: {
    app() {
      return this.$db.app(this.$route.params.appId)
    },

    groups() {
      return this.app.groups
    },

    recentGroups() {
      return this.app.recentGroups
    },

    unrecentGroups() {
      return this.app.unrecentGroups
    },
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'apps' })
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
