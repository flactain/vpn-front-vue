<template>
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
</template>
