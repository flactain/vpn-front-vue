<script setup lang="ts">
import AuthHeader from '@/components/AuthHeader.vue'
import GuestHeader from '@/components/GuestHeader.vue'
import NavBarSide from '@/components/NavBarSide.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <v-app>
    <template v-if="authStore.isLoggedIn">
      <AuthHeader />
      <NavBarSide />
    </template>
    <template v-else>
      <GuestHeader />
    </template>

    <v-main width="1400px">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.v-application__wrap {
  /* width: 1280px !important; */
  /* max-width: 100% !important; */
}
</style>
