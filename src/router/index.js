import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/store',
    name:'store',
    component: ()=> import('@/views/store/StoreView.vue')
  },
  {
    path:'/game',
    name:'game',
    component: ()=> import('@/views/game/Game.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  // mode: 'history', // 使用 history 模式
  routes
})

export default router
