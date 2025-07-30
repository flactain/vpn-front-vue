<script setup lang="ts">
import VpnsTable from '@/components/TableVpns.vue'
import ServersTable from '@/components/TableServers.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const vpnId = ref(route.params.id)
const hasVpnId = computed(() => {
  console.log(!!route.params.id)
  return !!route.params.id
})
</script>

<template>
  <VpnsTable />

  <v-divider></v-divider>

  <template v-if="hasVpnId">
    <v-container fluid>
      <v-col align-self="start">
        <v-card title="VPN" variant="text">
          <v-card-item v-slot:append>
            <v-btn variant="text" icon="mdi-refresh"></v-btn>
          </v-card-item>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Description</v-expansion-panel-title>
              <v-expansion-panel-text>もりやまとの家のメッシュVPN</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Servers</v-expansion-panel-title>
              <v-expansion-panel-text>
                <ServersTable />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Clients</v-expansion-panel-title>
              <v-expansion-panel-text>test</v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-container>
  </template>
</template>
