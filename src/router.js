import Vue from 'vue'
import Router from 'vue-router'
import Apps from './views/Apps.vue'
import App from './views/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'apps',
      component: Apps,
    },
    {
      path: '/app/:id',
      name: 'app',
      component: App,
    },
  ],
})
