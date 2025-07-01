import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'

interface User {
  id: string,
  name: string,
  imgSrc: string,
  profileUrl: string,
  exp: number,
}

interface JwtPayload {
  user_id: string
  name: string
  iss: string
  exp: number
  iat: number
  auth_time: number
}
export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const user = ref<User | null>(null)

  const initToken = () => {
    const cookieToken = Cookies.get('jwt')
    if (cookieToken) {
      token.value = cookieToken
    }
  }

  const initAuth = () => {
    if (token.value) {
      const decoded = jwtDecode<JwtPayload>(token.value)
      user.value = {
        id: decoded.user_id,
        name: decoded.name,
        imgSrc: "https://github.com/" + decoded.user_id+ ".png",
        profileUrl: "https://github.com/" + decoded.user_id,
        exp: decoded.exp,
      }
      console.log(decoded)
    }
    console.log(user.value)
  }

  const isValidToken = (token: string) => {
    const decoded = jwtDecode<JwtPayload>(token)
    if(decoded.exp*1000 > Date.now()){
      return true
    }else{
      return false
    }
  }

  const isLoggedIn = computed(() => {
    console.debug(token.value)
    return !!(token.value && isValidToken(token.value))
  })

  initToken()
  initAuth()

  return {
    token,
    user,
    isLoggedIn,
  }
})
