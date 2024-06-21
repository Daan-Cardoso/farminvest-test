import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/VHome.vue')
    },
    {
      path: '/:country/provinces',
      name: 'provinces',
      component: () => import('@/views/VProvinces.vue')
    }
  ]
})

export default router
