import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/table',
    name: 'table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ '../views/Table.vue'),
    children: [
      {
        name: 'table-hoc',
        path: 'hoc',
        component: () =>
          import(
            /* webpackChunkName: "table-hoc" */ '@/components/MemeTable/HOC/MemeTable.vue'
          )
      },
      {
        name: 'table-hoc',
        path: 'mixin',
        component: () =>
          import(
            /* webpackChunkName: "table-mixin" */ '@/components/MemeTable/Mixin/MemeTable.vue'
          )
      },
      {
        name: 'table-composition',
        path: 'composition',
        component: () =>
          import(
            /* webpackChunkName: "table-composition" */ '@/components/MemeTable/Composition/MemeTable.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
