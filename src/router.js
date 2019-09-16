import Vue from 'vue'
import Router from 'vue-router'
import Apps from './views/Apps.vue'
import Sketch from './views/Sketch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'apps',
      component: Apps,
      // children: [
      //   {
      //     path: 'profile',
      //     name: 'apps.sketch',
      //     component: Sketch,
      //   },
      // ],
    },
    {
      path: '/apps/sketch',
      name: 'apps.sketch',
      component: Sketch,
    },
  ],
})
