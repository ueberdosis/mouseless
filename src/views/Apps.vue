<template>
  <div class="apps">
    <router-link
      v-for="app in apps"
      class="item"
      :key="app.id"
      :to="{ name: 'app.levels', params: { id: app.id } }"
      :style="`background-color: ${app.color}`"
    >
      {{ app.title }}
    </router-link>
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
.apps {
  padding: 42px 12px 12px 12px;
  overflow-x: hidden;
  overflow-y: auto;
}

.item {
  display: block;
  background-color: #FDD231;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 10px;
  text-decoration: none;
  margin: 12px 0;
  font-weight: 700;

  &:first-child {
    margin-top: 0;
  }
}
</style>
