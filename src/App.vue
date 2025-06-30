<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const login = () => {
  window.location.href = import.meta.env.VITE_APP_API_URL+'/auth/login';
}
</script>

<template>
  <v-app>
    <v-app-bar elevation="1" color="blue-grey-lighten-5" density="default">
      <template v-slot:prepend>
        <v-btn prepend-icon="mdi-vpn" rounded="xs" size="large">vpn-home</v-btn>
      </template>
      <template v-slot:append>
        <v-btn @click="login" prepend-icon="mdi-github" border="sm"> Login </v-btn>
      </template>
    </v-app-bar>

    <v-main >
      <v-container fluid>
        <RouterView />
    </v-container>
    </v-main>
  </v-app>
</template>
<!-- <nav> -->
<!--   <RouterLink to="/">Home</RouterLink> -->
<!--   <RouterLink to="/about">About</RouterLink> -->
<!-- </nav> -->

<style>
.v-application__wrap {
  width: 100vw !important;
  max-width: none !important;
}
</style>
