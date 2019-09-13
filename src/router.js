import Vue from 'vue'
import Router from 'vue-router'
import Courses from './views/Courses.vue'
import Sketch from './views/Sketch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'courses',
      component: Courses,
      children: [
        {
          path: 'profile',
          name: 'courses.sketch',
          component: Sketch,
        },
      ],
    },
  ],
})
