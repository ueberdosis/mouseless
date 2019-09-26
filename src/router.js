import Vue from 'vue'
import Router from 'vue-router'
import AppsRoute from '@/components/AppsRoute'
import AppRoute from '@/components/AppRoute'
import GroupsRoute from '@/components/GroupsRoute'
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
          path: 'groups',
          name: 'app.groups',
          component: GroupsRoute,
        },
        {
          path: 'groups/:group',
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
