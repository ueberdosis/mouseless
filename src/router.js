import Vue from 'vue'
import Router from 'vue-router'
import Apps from './views/Apps.vue'
import App from './views/App.vue'
import Levels from './views/Levels.vue'
import Test from './views/Test.vue'

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
      children: [
        {
          path: '/app/:id/levels',
          name: 'app.levels',
          component: Levels,
        },
        {
          path: '/app/:id/test/:level',
          name: 'app.test',
          component: Test,
        },
      ],
    },
  ],
})
