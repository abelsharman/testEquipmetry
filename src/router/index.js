import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resource from '../views/Resource.vue'
import Engine from '../views/Engine.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resource',
    name: 'Resource',
    component: Resource
  },
  {
    path: '/engine',
    name: 'Engine',
    component: Engine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
