import { useStorage } from '@/composables/useStorage'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { ref } from 'vue'

interface User {
  id: string
  name: string
  imgSrc: string
  profileUrl: string
  exp: number
}

interface JwtPayload {
  preferred_username: string
  name: string
  iss: string
  exp: number
  iat: number
  auth_time: number
}

export const useAuthStore = defineStore('auth', () => {
  const idToken = ref<any | null>(null)
  const accessToken = ref<string | null>(null)
  const userInfo = ref<User | null>(null)
  const storage = useStorage()

  const initToken = () => {
    const { storedIdToken, storedAccessToken, storedUserInfo } = storage.getToken()
    console.log('storedIdToken: ' + storedIdToken)
    console.log('storedAccessToken: ' + storedAccessToken)
    console.log('storedUserInfo: ' + storedUserInfo)
    if (storedIdToken && storedAccessToken && storedUserInfo) {
      console.log('first condition through')
      // if (isValidToken(JSON.parse(storedIdToken))) {

      console.log('get tokens from localStorage')
      idToken.value = storedIdToken
      accessToken.value = storedAccessToken
      const parse = JSON.parse(storedUserInfo)
      userInfo.value = parse
      // }
    }
  }

  const isValidToken = (idToken: any) => {
    console.log('exp*1000: ' + userInfo.value?.exp)
    console.log('Date.now(): ' + Date.now())

    if (userInfo.value?.exp * 1000 > Date.now()) {
      return true
    } else {
      return false
    }
  }

  const isLoggedIn = computed(() => {
    console.debug(idToken.value)
    return !!(idToken.value && isValidToken(idToken.value))
  })

  const setToken = (idTokenJwt: any, accessTokenJwt: string) => {
    if (idTokenJwt && accessTokenJwt) {
      const decodedIdToken = jwtDecode<JwtPayload>(idTokenJwt)

      userInfo.value = {
        id: decodedIdToken.preferred_username,
        name: decodedIdToken.name,
        imgSrc: 'https://github.com/' + decodedIdToken.preferred_username + '.png',
        profileUrl: 'https://github.com/' + decodedIdToken.preferred_username,
        exp: decodedIdToken.exp,
      }
      idToken.value = idTokenJwt
      accessToken.value = accessTokenJwt
      console.log('auth.ts setToken' + idToken.value)
      console.log('auth.ts setToken' + accessToken.value)

      storage.setToken(decodedIdToken, accessToken, userInfo)
    }
  }

  const clearToken = () => {
    storage.clearToken()
    idToken.value = null
    accessToken.value = null
    userInfo.value = null
  }

  initToken()

  return {
    idToken,
    accessToken,
    userInfo,
    setToken,
    clearToken,
    isLoggedIn,
  }
})
