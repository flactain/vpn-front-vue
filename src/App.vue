<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header> -->
  <!--   <div class="wrapper"> -->
  <!--     <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <!--   </div> -->
  <!-- </header> -->
  <v-app>
    <v-app-bar elevation="1">
      <v-app-bar-title>moriyamato-vpn-home</v-app-bar-title>
      <template v-slot:append>
        <v-btn prepend-icon="mdi-github">Login </v-btn>
      </template>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>
<!-- <nav> -->
<!--   <RouterLink to="/">Home</RouterLink> -->
<!--   <RouterLink to="/about">About</RouterLink> -->
<!-- </nav> -->
