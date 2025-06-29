<script setup lang="ts">
import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL || 'http://127.0.0.1:3000/api/v1',
})
const login = () => {
  httpClient
    .get('/auth/login')
    .then((response) => {
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <main>
    <v-app>
      <h1>vpn-home</h1>
      <v-btn prepend-icon="mdi-github" @click="login">Login with Github</v-btn>
    </v-app>
  </main>
</template>
