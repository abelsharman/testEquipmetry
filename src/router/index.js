import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resource from '../views/Resource.vue'
import Engine from '../views/Engine.vue'
import About from '../views/About.vue'
import Golden from '../views/GoldenBridge.vue'
import Example from  '../views/Example.vue'
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
  }, 
  {
    path: '/about',
    name: 'About',
    component: About
  }, 

  {
    path: '/golden',
    name: 'Golden',
    component: Golden
  },
  {
    path: '/Example',
    name: 'Example',
    component: Example

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
