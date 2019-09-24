import Vue from 'vue'
import Router from 'vue-router'
import AppsRoute from '@/components/AppsRoute'
import AppRoute from '@/components/AppRoute'
import LevelsRoute from '@/components/LevelsRoute'
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
      path: '/app/:id',
      name: 'app',
      component: AppRoute,
      children: [
        {
          path: 'levels',
          name: 'app.levels',
          component: LevelsRoute,
          children: [
            {
              path: ':level',
              name: 'app.levels.test',
              component: TestRoute,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: AppsRoute,
    },
  ],
})
