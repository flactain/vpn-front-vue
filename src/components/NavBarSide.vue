<template>
    <v-navigation-drawer expand-on-hover permanent rail>
      <v-list density="compact" nav>
      <v-list-item title="VPNs" value="vpns" prepend-icon="md:vpn_lock" to="/vpns"> </v-list-item>
        <v-list-item title="Subnets" value="subnets" prepend-icon="mdi-network-outline"> </v-list-item>
        <v-list-item title="Servers" value="servers" prepend-icon="mdi-server-network-outline"> </v-list-item>
        <v-list-item title="Clients" value="clients" prepend-icon="mdi-monitor"> </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
