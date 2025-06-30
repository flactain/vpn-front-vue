<script setup lang="ts">
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <Header />
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
