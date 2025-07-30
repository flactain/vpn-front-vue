<script setup lang="ts">
import { useClient } from '@/composables/useClient'
import { ref, onMounted } from 'vue'
const headers = [
  { key: 'terminal_id', title: '端末ID' },
  { key: 'terminal_name', title: '端末名' },
  { key: 'owner_user_id', title: '所有者' },
  { key: 'public_ip', title: 'パブリックIP' },
  { key: 'private_ip', title: 'プライベートIP' },
  { key: 'created_at', title: '登録日' },
]
//test
const servers = ref([
  // {
  //   vpn_id: '019841d4-3244-77fd-94ef-066f4a1964bf',
  //   vpn_name: 'vpn-sakura-ishikari',
  //   owner_user_id: 'flactain',
  //   server_name: 'server-sakura-ishikari',
  //   public_ip: '153.127.63.174',
  //   clients_count: 1,
  //   created_at: '2025-07-25 22:45:11.369',
  // },
])

const toDisplayDate = (date: string) => {
  return date.split('T')[0]
}

const { client } = useClient()
const searchAllServers = () => {
  client
    .get('/vpn/servers')
    .then((response) => {
      servers.value = response.data.data
    })
    .catch((err) => {
      console.error(err)
    })
}
onMounted(() => {
  searchAllServers()
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
