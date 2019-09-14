<template>
  <div class="app">
    <div class="inner">
      <div class="navigation">
        <router-link class="navigation-item" :to="{ name: 'courses' }">
          ← Courses
        </router-link>
      </div>

      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./fonts.scss"></style>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  margin-bottom: 1rem;
}

p {
  margin: 1rem 0;
}

a {
  color: inherit;
}
</style>

<style lang="scss" scoped>
.app {
  position: relative;
  height: 100vh;
  overflow: scroll;
  background-color: #ffd300;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    pointer-events: none;
    -webkit-app-region: drag;
  }
}

.inner {
  padding: 40px;
}

.navigation {
  margin-bottom: 1rem;
}

.navigation-item {
  font-weight: bold;
  text-decoration: none;
}
</style>
