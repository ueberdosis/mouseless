<template>
  <div>
    <router-link
      v-for="app in apps"
      class="item"
      :key="app.id"
      :to="{ name: 'app', params: { id: app.id } }"
      :style="`background-color: ${app.color}`"
    >
      {{ app.title }}
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: this.$db.apps,
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: block;
  background-color: #FDD231;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 700;
}
</style>
