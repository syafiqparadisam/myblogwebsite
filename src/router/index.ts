import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PGPEncryption from '@/blogs/PGPEncryption.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/blog/tech/pgpencryption",
      name: "PGPEncryption",
      component: PGPEncryption
    },
  ],
})

export default router
