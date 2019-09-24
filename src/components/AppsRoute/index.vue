<template>
  <div class="apps-route">
    <div class="apps-route__items">
      <div class="apps-route__item" v-for="app in apps" :key="app.id">
        <app-item :app="app" />
      </div>
    </div>
  </div>
</template>

<script>
import AppItem from '@/components/AppItem'

export default {
  components: {
    AppItem,
  },

  data() {
    return {
      apps: this.$db.apps,
    }
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
