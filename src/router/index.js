import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resource from '../views/Resource.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
