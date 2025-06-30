<script setup lang="ts">
import axios from 'axios'

const login = () => {
  window.location.href = import.meta.env.VITE_APP_API_URL+'/auth/login';
}
</script>

<template>
  <main>
    <v-container fluid>
      <div class="text-h6">What is vpn-home</div>
      <div class="text-body-1">the application to login moriyamato VPN.</div>
    </v-container>
    <v-container fluid>
      <div class="text-h6">Get Start</div>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
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
    <v-container fluid>
      <div class="text-h6 text-blue-grey-darken-4">References</div>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            variant="outlined"
            color="blue-grey-darken-3"
            append-icon="mdi-open-in-new"
            rel="nooper"
            target="_blank"
            href="https://www.wireguard.com/"
            title="Wireguard"
            subtitle="fast, modern, secure VPN tunnel"
            text="install wireguard to join VPN"
          >
            <template v-slot:prepend>
              <v-icon size="default">
                <v-img
                  src="https://raw.githubusercontent.com/WireGuard/wireguard-windows/8e6558eba6665b51de35779bffa46803dbc4c10d/ui/icon/wireguard.svg"
                ></v-img>
              </v-icon>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <div class="text-h6">Source Code</div>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            append-icon="mdi-open-in-new"
            rel="nooper"
            variant="outlined"
            color="blue-grey-darken-3"
            target="_blank"
            href="https://github.com/flactain/vpn-server-rs"
            title="vpn-home-rust on GitHub"
            subtitle="coded by Rust"
            text="see implementation details."
          >
            <template v-slot:prepend>
              <v-icon size="large">mdi-github</v-icon>
              <!-- <v-icon>mdi-language-rust</v-icon> -->
              <v-avatar size="small">
                <v-img src="https://prev.rust-lang.org/logos/rust-logo-blk.svg"></v-img>
              </v-avatar>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            append-icon="mdi-open-in-new"
            variant="outlined"
            color="blue-grey-darken-3"
            rel="nooper"
            target="_blank"
            href="https://github.com/flactain/vpn-server-rs"
            title="vpn-home-vue on GitHub"
            subtitle="coded by vue.js(ts)"
            text="see implementation details."
          >
            <template v-slot:prepend>
              <v-icon size="large">mdi-github</v-icon>
              <!-- <v-icon>mdi-language-rust</v-icon> -->
              <v-icon size="default">
                <v-img
                  src="https://raw.githubusercontent.com/vuejs/art/366e8fad63e6210fcbc610f06ca56fcfbf30ed11/logo.svg"
                ></v-img>
              </v-icon>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
