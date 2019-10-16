import Vue from 'vue'
import Router from 'vue-router'
import AppsRoute from '@/components/AppsRoute'
import AppRoute from '@/components/AppRoute'
import SetsRoute from '@/components/SetsRoute'
import TestRoute from '@/components/TestRoute'
import ShortcutsRoute from '@/components/ShortcutsRoute'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'apps',
      component: AppsRoute,
    },
    {
      path: '/shortcuts',
      name: 'shortcuts',
      component: ShortcutsRoute,
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
