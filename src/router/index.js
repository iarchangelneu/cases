import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('../components/Cases.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../components/Shop.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../components/Account.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/CartPage.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsOfUse.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
