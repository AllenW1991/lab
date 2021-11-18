import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Allen from '../views/Allen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/allen',
    name: 'allen',
    component: () => import(/* webpackChunkName: "allen" */ '../views/Allen.vue'),
    children: [
      {
        path: 'info',
        name: 'allen-info',
        component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
      },
      {
        path: 'youtube',
        name: 'allen-youtube',
        component: () => import(/* webpackChunkName: "youtube" */ '../views/Youtube.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
