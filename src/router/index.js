import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/lunbo',
    //   name: 'Lunbo',
    //   component: Lunbo
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
