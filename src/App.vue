<script setup lang="ts">
import AuthHeader from '@/components/AuthHeader.vue'
import GuestHeader from '@/components/GuestHeader.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <v-app>
    <v-main>
      <template v-if="authStore.isLoggedIn"><AuthHeader /></template>
      <template v-else><GuestHeader /></template>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-application__wrap {
  width: 100vw !important;
  max-width: none !important;
}
</style>
