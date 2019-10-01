<template>
  <router-link class="app-item" :to="{ name: 'app.groups', params: { appId: app.id } }">
    <img class="app-item__logo" :src="logo">
    <div class="app-item__content">
      <div class="app-item__title">
        {{ app.title }}
      </div>
      <div class="app-item__meta">
        {{ app.shortcuts.length }} Shortcuts
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
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
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
