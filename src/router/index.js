import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/tabla/:playerOne',
    name: 'TableOne',
    component: () => import('../views/TablePlayerOne')
  },
  {
    path: '/tabla/:playerTwo',
    name: 'TableTwo',
    component: () => import('../views/TablePlayerTwo')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
