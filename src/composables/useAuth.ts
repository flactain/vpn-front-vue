import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

export const useAuth = () => {
  const authStore = useAuthStore()
  // const axios.create({
  //   baseURL: import.meta.env.VITE_APP_API_URL
  // })
  const login = () => {
    window.location.href = import.meta.env.VITE_APP_API_URL + '/auth/login'
  }
  const logout = () => {
    console.log(authStore.idToken.vaue)
    window.location.href =
      import.meta.env.VITE_APP_API_URL + '/auth/logout?idToken=' + authStore.idToken
    authStore.clearToken()
    console.log('logout!')
  }

  return { login, logout }
}
