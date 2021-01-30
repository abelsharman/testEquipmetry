import { createRouter } from 'vue-router'
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
  routes
})

export default router
