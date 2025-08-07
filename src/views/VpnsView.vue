<script setup lang="ts">
import VpnsTable from '@/components/TableVpns.vue'
import ServersTable from '@/components/TableServers.vue'
import ClientsTable from '@/components/TableClients.vue'
import ClientsDialog from '@/components/DialogClients.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const hasVpnId = computed(() => {
  return !!route.params.id
})
</script>
:loading="isSaving" color="primary" icon="mdi-content-save" variant="flat" @click="onClickSave"
<template>
  <VpnsTable />

  <v-divider></v-divider>

  <template v-if="hasVpnId">
    <v-container fluid>
      <v-col align-self="start">
        <v-card title="VPN" variant="text">
          <ClientsDialog />

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
              <v-expansion-panel-text>
                <ClientsTable :vpnId="route.params.id" />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-container>
  </template>
</template>
