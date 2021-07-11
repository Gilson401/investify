import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
  },
  {
    path: '/inicial',
    name: 'Inicial',
    component: () => import(/* webpackChunkName: "inicial" */ '../views/Inicial.vue')
  },
  {
    path: '/triste',
    name: 'Triste',
    component: () => import(/* webpackChunkName: "triste" */ '../views/Triste.vue')
  },
  {
    path: '/poker-face',
    name: 'PokerFace',
    component: () => import(/* webpackChunkName: "poker-face" */ '../views/Pokerface.vue')
  },
  {
    path: '/modalcomponent',
    name: 'ModalComponent',
    component: () => import(/* webpackChunkName: "modalcomponent" */ '../views/Modal.vue')
  },
  {
    path: '/feliz',
    name: 'FelizComponente',
    component: () => import(/* webpackChunkName: "felizcomponent" */ '../views/Feliz.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
