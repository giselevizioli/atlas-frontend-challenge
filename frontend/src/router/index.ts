import { createRouter, createWebHistory } from 'vue-router'
import ProfessionalsView from '../views/ProfessionalsView.vue'
import ProfessionalDetailsView from '../views/ProfessionalDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/professionals',
    },
    {
      path: '/professionals',
      name: 'professionals',
      component: ProfessionalsView,
    },
    {
      path: '/professionals/:id',
      name: 'professional-details',
      component: ProfessionalDetailsView,
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: ListingView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
