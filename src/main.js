import Vue from 'vue'
import Store from 'electron-store'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const store = new Store()

// store.set('unicorn', '🦄');
// console.log(store.get('unicorn'))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
