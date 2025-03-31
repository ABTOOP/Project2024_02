import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomeView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../components/ExperienceView.vue'),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../components/EducationView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/ContactView.vue'),
    },
  ],
})

export default router
