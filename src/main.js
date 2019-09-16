import Vue from 'vue'
import Store from 'electron-store'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const store = new Store()

// store.set('unicorn', '🦄');
// console.log(store.get('unicorn'))

Vue.filter('key', value => {
  const specialKeys = [
    {
      name: 'shift',
      formatted: '⇧',
    },
    {
      name: 'control',
      formatted: '⌃',
    },
    {
      name: 'alt',
      formatted: '⌥',
    },
    {
      name: 'meta',
      formatted: '⌘',
    },
  ]

  const specialKey = specialKeys.find(key => key.name === value)

  if (specialKey) {
    return specialKey.formatted
  }

  return value.toUpperCase()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
