<template>
  <div>
    <router-link class="item" :to="{ name: 'courses.sketch' }">
      Sketch
    </router-link>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: block;
  background-color: rgba(black, 0.05);
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 700;
}
</style>
