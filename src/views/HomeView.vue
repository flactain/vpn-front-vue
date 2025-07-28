<script setup lang="ts">
import VpnsTable from '@/components/VpnsTable.vue';

</script>

<template>
  <VpnsTable/>

  <v-divider></v-divider>

  <v-container fluid>
    <v-col align-self="start">
      <v-card title="VPN" variant="text">
        <v-card-item v-slot:append>
          <v-btn variant="text" icon="mdi-refresh"></v-btn>
        </v-card-item>
        <v-card-item><v-card-title>Servers</v-card-title></v-card-item>
        <v-card><v-card-title>Clients</v-card-title></v-card>
      </v-card>
    </v-col>
  </v-container>
</template>
