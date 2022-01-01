import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('./views/Signup/Signup.vue'),
    children: [
      {
        path: 'form',
        name: 'signup-form',
        component: () => import('./views/Signup/Form.vue')
      },
      {
        path: 'completed',
        name: 'signup-completed',
        component: () => import('./views/Signup/Completed.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
