import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PGPEncryption from '@/views/blog/PGPEncryption.vue'
import TechBlog from '@/views/TechBlog.vue'
import EducationBlog from '@/views/EducationBlog.vue'
import HealthyBlog from '@/views/HealthyBlog.vue'
import PoliticBlog from '@/views/PoliticBlog.vue'

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
    {
      path: "/blog/tech",
      name: "TechBlog",
      component: TechBlog
    },
    {
      path: "/blog/education",
      name: "EducationBlog",
      component: EducationBlog
    },
    {
      path: "/blog/healthy",
      name: "HealthyBlog",
      component: HealthyBlog
    },
    {
      path: "/blog/politic",
      name: "PoliticBlog",
      component: PoliticBlog
    }
  ],
})

export default router
