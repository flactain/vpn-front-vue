<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import router from '@/router'
const authStore = useAuthStore()

const route = useRoute()
const hashParams = new URLSearchParams(route.hash.substring(1))
const accessToken = hashParams.get('access_token')
const idToken = hashParams.get('id_token')

onMounted(() => {
  console.log("back to front callback")
  if (accessToken && idToken) {
    console.log("get idToken and accessToken")
    authStore.setToken(idToken, accessToken)
    router.push('/vpns')
  }
})
</script>

<template>
  <v-container>
    <h1>callbacking</h1>
  </v-container>
</template>
