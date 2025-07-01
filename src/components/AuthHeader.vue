<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
const { login } = useAuth()
const authStore = useAuthStore()

const getImg = () => {
  console.log(authStore.user?.imgSrc)
  return authStore.user?.imgSrc
}
const logout = () => {}
</script>

<template>
  <v-app-bar elevation="1" color="blue-grey-darken-4" density="default">
    <template v-slot:prepend>
      <v-btn @click="router.push('/')" prepend-icon="mdi-vpn" rounded="xs" size="large"
        >vpn-home</v-btn
      >
    </template>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar class="mr-4" v-bind="props">
          <v-img alt="profile" :src="getImg()"></v-img>
        </v-avatar>
      </template>
      <v-card>
        <v-list>
          <v-list-item
            :prepend-avatar="getImg()"
            :subtitle="authStore.user?.id"
            :title="authStore.user?.name"
            :href="authStore.user?.profileUrl"
            target="_blank"
            append-icon="mdi-open-in-new"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item append-icon="mdi-logout" @click="logout" title="Logout" />
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
