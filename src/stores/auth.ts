import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)

  const isValidToken = (token: string | null) => {
    return true
  }
  const initToken = () => {
    const cookieToken = Cookies.get('jwt')
    if (cookieToken && isValidToken(cookieToken)) {
      token.value = cookieToken
    }
  }

  const isLoggedIn = computed(() => {
    console.debug(token.value)
    return !!(token.value && isValidToken(token.value))
  })

  initToken()

  return {
    token,
    isLoggedIn,
  }
})
