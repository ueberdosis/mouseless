import Vue from 'vue'
import router from '@/router'
import DB from '@/services/DB'
import HealthCheck from '@/services/HealthCheck'
import Keyboard from '@/services/Keyboard'
import Wrapper from '@/components/Wrapper'

import ShortcutsRoute from '@/components/ShortcutsRoute'

Vue.config.productionTip = false
Vue.prototype.$db = DB

Vue.filter('key', value => Keyboard.formatKeyCode(value))

Vue.filter('uppercase', value => {
  const ignoredCharacters = ['ß']

  if (ignoredCharacters.includes(value)) {
    return value
  }

  return value.toUpperCase()
})

if (process.env.NODE_ENV === 'development') {
  HealthCheck.run()
}

new Vue({
  router,
  // render: h => h(Wrapper),
  render: h => h(ShortcutsRoute),
}).$mount('#app')
