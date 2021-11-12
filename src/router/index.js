import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/index')
        }
      ]
    },
    {path: '*', component: () => import('@/views/404')}
  ]
})
