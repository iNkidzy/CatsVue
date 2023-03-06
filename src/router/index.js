import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path:'/cats',
      name:'cats',
      component: () => import('../views/CatsView.vue')
    },
    {
      path:'/docs',
      name:'docs',
      component: () => import('../views/DocsView.vue')
    },
  ]
})

export default router
