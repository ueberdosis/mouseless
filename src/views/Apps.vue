<template>
  <div>
    <router-link class="item" :to="{ name: 'apps.sketch' }">
      Sketch
    </router-link>
    <router-view />
  </div>
</template>

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
