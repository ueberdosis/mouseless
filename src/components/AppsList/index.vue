<template>
  <div class="apps-list">
    <div class="apps-list__item" v-for="app in apps" :key="app.id">
      <apps-item :app="app" />
    </div>
  </div>
</template>

<script>
import AppsItem from '@/components/AppsItem'

export default {
  components: {
    AppsItem,
  },

  props: {
    apps: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
