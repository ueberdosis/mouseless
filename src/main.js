import Vue from 'vue'
// import Store from 'electron-store'
import Wrapper from './Wrapper.vue'
import router from './router'
import Keyboard from '@/services/Keyboard'
import DB from '@/services/DB'

// store.set('unicorn', '🦄');
// console.log(store.get('unicorn'))
// const store = new Store()

Vue.config.productionTip = false
Vue.prototype.$db = DB

Vue.filter('key', value => Keyboard.formatKeyCode(value))

new Vue({
  router,
  render: h => h(Wrapper),
}).$mount('#app')
