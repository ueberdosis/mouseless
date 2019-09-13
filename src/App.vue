<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>
      <router-link :to="{ name: 'courses.sketch' }">
        Sketch
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  padding: 40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  a {
    font-weight: bold;
    color: black;
    &.router-link-exact-active {
      color: tomato;
    }
  }
}
</style>
