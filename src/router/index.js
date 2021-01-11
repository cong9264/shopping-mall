import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'icon-home'
    }
  },
  {
    path: '/classification',
    name: 'Classification',
    component: () => import('views/classification'),
    meta: {
      title: '分类',
      icon: 'icon-classification'
    }
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('views/shoppingCart'),
    meta: {
      title: '购物车',
      icon: 'icon-shopping-cart'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile'),
    meta: {
      title: '我的',
      icon: 'icon-profile'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
