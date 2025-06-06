import { createRouter, createWebHistory } from 'vue-router'
import SCMDashboard from './pages/SCMDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: SCMDashboard
  },
  {
    path: '/dashboard',
    name: 'SCMDashboard',
    component: SCMDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
