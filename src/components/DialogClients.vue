<script setup lang="ts">
import VpnsTable from '@/components/TableVpns.vue'
import ServersTable from '@/components/TableServers.vue'
import ClientsTable from '@/components/TableClients.vue'
import ClientsDialog from '@/components/DialogClients.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { shallowRef } from 'vue'
import { useClient } from '@/composables/useClient'

import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'
const authStore = useAuthStore()

const dialog = shallowRef(false)
const terminals = ref([
  'moriyamato-home-ubuntu',
  'moriyamato-laptop-ubutu',
  'moriyamato-nuc-windows',
])

//form config
const autocompleteRef = ref(null)

//form value
const selectedClient = ref('')
const privateIp = ref('')
const subnetMask = ref('10.100.0.0/24')
const publicKey = ref('')
const terminalName = ref('')
const os = ref('')
const step = ref(1)

//actions
const createNew = () => {
  selectedClient.value = ''
  autocompleteRef.value.blur()
}
const selectClient = computed(() => {
  return !selectedClient.value
})
const submit = () => {
  dialog.value = false

}

// functions
const { client } = useClient()
const searchAllTerminals = () => {
  client
    .get('/vpn/terminals', {
      params: {
        owner_user_id: authStore.userInfo?.id,
      },
    })
    .then((response) => {
      terminals.value = response.data.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  searchAllTerminals()
})
</script>

<template>
  <v-card-item v-slot:append>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn color="orange-darken-1" class="ma-2" v-bind="activatorProps">
          <v-icon start icon="mdi-vector-polyline-plus"></v-icon>
          Join
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5">Join this VPN!</div>
          <v-btn icon="mdi-close" variant="text" @click="dialog = false"></v-btn>
        </v-card-title>
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-form>
                <v-autocomplete
                  ref="autocompleteRef"
                  v-model="selectedClient"
                  label="Terminal"
                  :items="terminals"
                  item-title="terminal_name"
                  item-value="terminal_id"
                  prepend-inner-icon="mdi-monitor"
                  variant="underlined"
                  density="comfortable"
                >
                  <template v-slot:append-item>
                    <v-divider></v-divider>
                    <v-list-item prepend-icon="mdi-plus" @click="createNew" class="text-primary">
                      <v-list-item-title>Create new client.</v-list-item-title>
                    </v-list-item>
                  </template>
                </v-autocomplete>

                <template v-if="selectClient">
                  <v-text-field
                    v-model="terminalName"
                    label="terminal name"
                    prepend-inner-icon="mdi-tag-text-outline"
                    hint="Recomend format: ${your-name}-${terminal-type}-${OS}"
                    placeholder="moriyamato-nuc-ubuntu"
                    variant="underlined"
                  ></v-text-field>

                  <v-text-field
                    v-model="os"
                    label="OS"
                    prepend-inner-icon="mdi-cpu-64-bit"
                    hint="OS name"
                    placeholder="Ubuntu 22.04"
                    variant="underlined"
                  ></v-text-field>
                </template>

                <v-text-field
                  v-model="privateIp"
                  label="Private IP"
                  prepend-inner-icon="mdi-ip-network-outline"
                  :hint="'Subnet CIDR:   ' + subnetMask"
                  persistent-hint
                  placeholder="10.100.10.1"
                  variant="underlined"
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="2">
            <v-card-text>
              <v-text-field
                v-model="publicKey"
                label="your public key"
                prepend-inner-icon="mdi-key-variant"
                persistent-hint
                placeholder="s7Pk0WuD38StoAC3t+fz5pWvkG5TEFsJGA68eba+v1c="
                variant="underlined"
              ></v-text-field>
            </v-card-text>
          </v-window-item>
        </v-window>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            v-if="step !== 1"
            prepend-icon="mdi-arrow-left"
            text="BACK"
            variant="text"
            @click="step--"
          ></v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step !== 2"
            append-icon="mdi-arrow-right"
            text="NEXT"
            color="primary"
            variant="flat"
            @click="step++"
          ></v-btn>
          <v-btn
            v-if="step === 2"
            append-icon="mdi-send"
            text="submit"
            color="orange-darken-1"
            variant="flat"
            @click="submit"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn variant="text" icon="mdi-refresh"></v-btn>
  </v-card-item>
</template>
