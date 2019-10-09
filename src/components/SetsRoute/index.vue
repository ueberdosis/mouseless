<template>
  <page>
    <template v-slot:left>
      <btn icon="arrow-left" @click.native="goBack">
        Apps
      </btn>
    </template>
    <template v-slot>
      <div class="sets-route">
        <div class="sets-route__header">
          <img class="sets-route__logo" :src="logo">
          <div class="sets-route__title">
            {{ app.title }}
          </div>
        </div>
        <list-section title="Recent" v-if="recentSets.length">
          <sets :sets="recentSets" :app="app" />
        </list-section>
        <list-section title="Sets" v-if="unrecentSets.length">
          <sets :sets="unrecentSets" :app="app" />
        </list-section>
      </div>
    </template>
  </page>
</template>

<script>
import Btn from '@/components/Btn'
import Page from '@/components/Page'
import Sets from '@/components/Sets'
import ListSection from '@/components/ListSection'

export default {
  name: 'SetsRoute',

  components: {
    Btn,
    Page,
    Sets,
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

    sets() {
      return this.app.sets
    },

    recentSets() {
      return this.app.recentSets
    },

    unrecentSets() {
      return this.app.unrecentSets
    },

    logo() {
      return require(`@/assets/logos/${this.app.id}.svg`)
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
