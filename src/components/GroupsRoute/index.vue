<template>
  <page>
    <template v-slot:left>
      <router-link class="hover-button" :to="{ name: 'apps' }">
        ← Apps
      </router-link>
    </template>
    <template v-slot:center>
      {{ app.title }}
    </template>
    <template v-slot>
      <groups :app="app" :animate="animate" />
    </template>
  </page>
</template>

<script>
import Groups from '@/components/Groups'
import Page from '@/components/Page'

export default {
  components: {
    Groups,
    Page,
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

    animate() {
      return this.previousRoute && this.previousRoute.name === 'apps'
    },
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from
    })
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
