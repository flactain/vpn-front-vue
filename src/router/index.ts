import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import RootView from '../views/RootView.vue'
import VpnsView from '@/views/VpnsView.vue'
import CallbackView from '@/views/CallbackView.vue'
import { useStorage } from '@/composables/useStorage'

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
      path: '/vpns',
      component: VpnsView,
      name: 'VpnHome',
      meta: { requiresAuth: true },
    },
    {
      path: '/vpns/:id',
      component: VpnsView,
      name: 'VpnDetail',
      meta: {requiresAuth: true}
    },
    {
      path: '/callback',
      component: CallbackView,
      meta: { requiresAuth: false},
    },
    // {
    //   path: 'vpns/:vpn_id',
    //   component:VpnsView,
    //   meta: {requiresAuth: false}
    // }
  ],
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  console.log('isLoggedIn?: ' + authStore.isLoggedIn)

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/')
  } else if (to.meta.requiresGuest && authStore.isLoggedIn) {
    next('/vpns')
  } else {
    next()
  }
})

export default router
