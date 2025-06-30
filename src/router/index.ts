import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import RootView from '../views/RootView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: RootView,
      meta: { requiresGuest: true },
    },
    {
      path: '/home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
  ],
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  console.log('isLoggedIn?: ' + authStore.isLoggedIn)

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/')
  } else if (to.meta.requiresGuest && authStore.isLoggedIn) {
    next('/home')
  } else {
    next()
  }
})

export default router
