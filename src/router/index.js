import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Community = () => import('views/community/Community')
const Mall = () => import('views/mall/Mall')
const Cart = () => import('views/cart/Cart')
const Mine = () => import('views/mine/Mine')
const Details = () => import('views/details/Details')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/mall',
    component: Mall
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/details/:id',
    component: Details
  }
]

const router = new VueRouter({
  //mode: 'history',
  routes
})

export default router
