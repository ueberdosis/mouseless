import Vue from 'vue'
import Store from 'electron-store'
import App from './App.vue'
import router from './router'
import Keyboard from '@/services/Keyboard'

// store.set('unicorn', '🦄');
// console.log(store.get('unicorn'))
// const store = new Store()

Vue.config.productionTip = false

Vue.filter('key', value => Keyboard.formatKeyCode(value))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
