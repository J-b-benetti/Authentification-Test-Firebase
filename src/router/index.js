import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: () => import('../components/Signin.vue')
    },
    {
      path: '/espace-membre',
      name: 'espace-membre',
      component: () => import('../components/EspaceMembre.vue')
    }
  ]
})

export default router;
