<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
const { login } = useAuth()
</script>
<template>
  <v-container fluid>
    <div class="text-h6">Get Start</div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          @click="login"
          variant="flat"
          color="blue-grey-darken-4"
          title="Login"
          subtitle="Get start with GitHub account."
          hover
        >
          <template v-slot:prepend>
            <v-icon size="default">mdi-github </v-icon>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
