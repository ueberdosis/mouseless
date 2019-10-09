import Vue from 'vue'
import Router from 'vue-router'
import AppsRoute from '@/components/AppsRoute'
import AppRoute from '@/components/AppRoute'
import SetsRoute from '@/components/SetsRoute'
import TestRoute from '@/components/TestRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'apps',
      component: AppsRoute,
    },
    {
      path: '/app/:appId',
      name: 'app',
      component: AppRoute,
      children: [
        {
          path: 'sets',
          name: 'app.sets',
          component: SetsRoute,
        },
        {
          path: 'sets/:setId',
          name: 'app.test',
          component: TestRoute,
        },
      ],
    },
    {
      path: '*',
      component: AppsRoute,
    },
  ],
})
