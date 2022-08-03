import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import ('../views/ProjectsView.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import ('../views/ScheduleView.vue')
  },
  {
    path: '/about-me',
    name: 'about',
    component: () => import ('../views/AboutMeView.vue')
  },
  {
    path: '/projects/1',
    name: 'dashboard',
    component: () => import ('../views/Projects/DashboardView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router