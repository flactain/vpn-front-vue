<script setup lang="ts">
import { useClient } from '@/composables/useClient'
import { ref, onMounted } from 'vue'
const headers = [
  { key: 'vpn_id', title: 'VPN ID' },
  { key: 'vpn_name', title: 'VPN名' },
  { key: 'owner_user_id', title: '所有者' },
  { key: 'server_name', title: 'サーバー' },
  { key: 'public_ip', title: 'パブリックIP' },
  { key: 'private_ip', title: 'プライベートIP' },
  { key: 'clients_count', title: '登録端末数' },
  { key: 'created_at', title: '登録日' },
  { key: 'is_approved', title: '承認' },
]
//test
const vpns = ref([
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

const { client } = useClient()
const searchAllVpns = () => {
  client
    .get('/vpn/vpns')
    .then((response) => {
      vpns.value = response.data.data
    })
    .catch((err) => {
      console.error(err)
    })
}
onMounted(() => {
  searchAllVpns()
})
</script>

<template>
  <v-container fluid>
    <v-col align-self="start">
      <v-card title="VPNs" variant="outlined">
        <v-card-item v-slot:append>
          <v-btn variant="text" icon="mdi-refresh"></v-btn>
        </v-card-item>
        <!-- <v-card-item> -->
        <v-data-table :headers="headers" :items="vpns" fixed-header class="text-caption">
          <template v-slot:item.vpn_id="{ item }">
            <router-link :to="{ path: 'vpns', params: {vpn_id: item.vpn_id}}">{{ item.vpn_id }}</router-link>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-container>
</template>
