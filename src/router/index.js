import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WHDBooleans from "@/components/WHDBooleans.vue";
import WHDEnums from "@/components/WHDEnums.vue";
import WHDEnums2 from "@/components/WHDEnums2.vue";
import WHDStateMachine from "@/components/WHDStateMachine.vue";
import WHDStateMachine2 from "@/components/WHDStateMachine2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/whd-bools',
      name: 'whd-bools',
      component: WHDBooleans
    },
    {
      path: '/whd-enums',
      name: 'whd-enums',
      component: WHDEnums
    },
    {
      path: '/whd-enums-redux',
      name: 'whd-enums-redux',
      component: WHDEnums2
    },
    {
      path: '/whd-state-machine',
      name: 'whd-state-machine',
      component: WHDStateMachine
    },
    {
      path: '/whd-state-machine-2',
      name: 'whd-state-machine-2',
      component: WHDStateMachine2
    }
  ]
})

export default router
