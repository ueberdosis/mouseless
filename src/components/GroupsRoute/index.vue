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
      <groups :app="app" />
    </template>
  </page>
</template>

<script>
import Btn from '@/components/Btn'
import Page from '@/components/Page'
import Groups from '@/components/Groups'

export default {
  components: {
    Btn,
    Page,
    Groups,
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
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'apps' })
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
