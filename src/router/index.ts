import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/app-index.vue')
    },
    {
      path: '/datav',
      name: 'Datav',
      redirect: '/datav/security',
      component: () => import('../views/data-v.vue'),
      children: [
        {
          path: 'security',
          name: 'Security',
          component: () => import('../views/security/security-management.vue')
        }
      ]
    }
  ]
})

export default router
