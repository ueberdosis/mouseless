import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from 'electron-store'

Vue.config.productionTip = false

const store = new Store()

// store.set('unicorn', '🦄');
// console.log(store.get('unicorn'))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
