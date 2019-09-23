<template>
  <div class="apps">
    <div class="apps__items">
      <div class="apps__item" v-for="app in apps" :key="app.id">
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

<style lang="scss" scoped>
.apps {
  padding: 44px 32px 32px 32px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-bottom: -12px;
  }

  &__item {
    width: 50%;
    padding: 0 12px 12px 0;
  }
}
</style>
