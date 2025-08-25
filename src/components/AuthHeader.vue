<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
import { ref } from 'vue'
import { useClient } from '@/composables/useClient'
import { onMounted } from 'vue'
const { login, logout } = useAuth()
const authStore = useAuthStore()

const headers = [
  { key: 'resource_type', title: 'リソースタイプ' },
  { key: 'resource_handle', title: '依頼種別' },
  { key: 'vpn_id', title: 'vpn_id' },
  { key: 'resource_id', title: 'リソースID' },
  { key: 'asignee_user_id', title: '承認者' },
  { key: 'request_user_id', title: '依頼者' },
  { key: 'actions', title: '承認' },
]
const requests = ref([])


const { client } = useClient()
const searchApprovalRequest = () => {
  client
    .get('vpn/vpns/requests', {
      params: {
        user_id: authStore.userInfo?.id,
      },
    })
    .then((response) => {
      requests.value = response.data.data
    })
    .catch((err) => {
      console.error(err)
    })
}
const approveRequest = (vpn_id, resource_id) =>{
  console.log(vpn_id)
  console.log(resource_id)
}

const getImg = () => {
  return authStore.userInfo?.imgSrc
}

const approvalDialog = ref(false)
const showRequests = () => {
  approvalDialog.value = true
}

onMounted(() => {
  searchApprovalRequest()
})
</script>

<template>
  <v-app-bar elevation="1" color="blue-grey-darken-4" density="default">
    <template v-slot:prepend>
      <v-btn @click="router.push('/')" prepend-icon="mdi-vpn" rounded="xs" size="large"
        >vpn-home</v-btn
      >
    </template>

    <template>
      <v-btn icon="mdi-email-check-outline"></v-btn>
    </template>

    <v-dialog v-model="approvalDialog" max-width="800" persistent>
      <template v-slot:activator="{ props: activatorProps }">
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
                :subtitle="authStore.userInfo?.id"
                :title="authStore.userInfo?.name"
                :href="authStore.userInfo?.profileUrl"
                target="_blank"
                append-icon="mdi-open-in-new"
              ></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                append-icon="mdi-email-check-outline"
                v-bind="activatorProps"
                title="Approval Requests"
              ></v-list-item>
              <v-list-item append-icon="mdi-logout" @click="logout" title="Logout" />
            </v-list>
          </v-card>
        </v-menu>
      </template>
      <v-card title="Approval Requests">
        <v-data-table hide-default-footer :headers="headers" :items="requests">
          <template v-slot:item.actions="{item}">
            <v-btn color="primary" @click="approveRequest(item.vpn_id, item.resource_id)">approve</v-btn>
          </template>
        </v-data-table>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <v-btn @click="approvalDialog = false">CLOSE</v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
