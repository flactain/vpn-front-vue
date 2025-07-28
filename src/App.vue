<script setup lang="ts">
import AuthHeader from '@/components/AuthHeader.vue'
import GuestHeader from '@/components/GuestHeader.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <v-app>
    <v-main width="1400px">
      <template v-if="authStore.isLoggedIn"><AuthHeader /></template>
      <template v-else><GuestHeader /></template>
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
