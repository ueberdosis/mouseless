<template>
  <router-link class="app-item" :to="{ name: 'app.levels', params: { id: app.id } }">
    <div class="app-item__media" :style="`background-color: ${app.color}`">
      <img class="app-item__logo" :src="logo">
    </div>
    <div class="app-item__content">
      <div class="app-item__title">
        {{ app.title }}
      </div>
      <div class="app-item__meta">
        <div class="app-item__meta-item">
          <icon name="shortcut" />
          <span>
            {{ app.shortcuts.length }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },

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
