<script setup lang="ts">
import { useClient } from '@/composables/useClient'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const headers = [
  { key: 'vpn_name', title: 'VPN名' },
  { key: 'vpn_id', title: 'VPN ID' },
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

const toDisplayDate = (date: string) => {
  return date.split('T')[0]
}

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
      <v-card title="VPNs" variant="flat">
        <v-card-item v-slot:append>
          <v-btn variant="text" icon="mdi-refresh"></v-btn>
        </v-card-item>
        <v-data-table density="compact" :headers="headers" :items="vpns" fixed-header hover>
          <template v-slot:item.vpn_name="{ item }">
            <router-link
              :to="{
                name: 'VpnDetail',
                params: { id: item.vpn_name },
              }"
            >
              {{ item.vpn_name }}
            </router-link>
          </template>
          <template v-slot:item.owner_user_id="{ item }">
            <v-avatar size="24"><v-img src="https://github.com/flactain.png"></v-img></v-avatar
            ><span>{{ ' ' + item.owner_user_id }}</span>
          </template>
          <template v-slot:item.created_at="{ item }">
            {{ toDisplayDate(item.created_at) }}
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
  </v-container>
</template>
