<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import router from '@/router'
const { login } = useAuth()
</script>
<template>
  <v-app-bar elevation="1" color="blue-grey-lighten-5" density="default">
    <template v-slot:prepend>
      <v-btn @click="router.push('/')" prepend-icon="mdi-vpn" rounded="xs" size="large"
        >vpn-home</v-btn
      >
    </template>
    <template v-slot:append>
      <v-btn @click="login" prepend-icon="mdi-github" border="sm"> Login </v-btn>
    </template>
  </v-app-bar>
</template>
