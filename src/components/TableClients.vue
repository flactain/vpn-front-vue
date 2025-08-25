<script setup lang="ts">
import { useClient } from '@/composables/useClient'
import { watch } from 'vue'
import { inject } from 'vue'
import { ref, onMounted } from 'vue'

const headers = [
  { key: 'terminal_name', title: '端末名' },
  { key: 'terminal_id', title: '端末ID' },
  { key: 'owner_user_id', title: '所有者' },
  { key: 'allowed_ip', title: 'プライベートIP' },
  { key: 'is_approved', title: '承認' },
]
const toDisplayDate = (date: string) => {
  return date.split('T')[0]
}

interface Props {
  vpnId: string
}
const props = defineProps<Props>()

const servers = ref([])

const { client } = useClient()
const searchAllClients = () => {
  client
    .get('/vpn/clients', {
      params: {
        vpn_id: props.vpnId,
      },
    })
    .then((response) => {
      servers.value = response.data.data
    })
    .catch((err) => {
      console.error(err)
    })
}

// props
const refreshCount = inject('clientRefreshCount')
watch(refreshCount, ()=>{
  console.log('refresh so search client')
  searchAllClients()
})

onMounted(() => {
  searchAllClients()
})
</script>

<template>
  <v-col align-self="start">
    <v-card variant="flat">
      <v-data-table
        density="compact"
        :headers="headers"
        :items="servers"
        fixed-header
        hide-default-footer
      >
        <template v-slot:item.owner_user_id="{ item }">
          <v-avatar size="24"><v-img src="https://github.com/flactain.png"></v-img></v-avatar
          ><span>{{ ' ' + item.owner_user_id }}</span>
        </template>
        <template v-slot:item.created_at="{ item }">
          {{ toDisplayDate(item.created_at) }}
        </template>
        <template v-slot:item.vpn_id="{ item }">
          <router-link :to="{ path: 'vpns', params: { vpn_id: item.vpn_id } }">{{
            item.vpn_id
          }}</router-link>
        </template>
        <template v-slot:item.is_approved="{ item }">
          <v-chip
            v-if="item.is_approved"
            color="success"
            variant="outlined"
            prepend-icon="mdi-checkbox-marked-circle"
            >Confirmed</v-chip
          >
          <v-chip v-else color="warning" variant="outlined" prepend-icon="mdi-help-circle-outline"
            >Confirmed</v-chip
          >
        </template>
      </v-data-table>
    </v-card>
  </v-col>
</template>
