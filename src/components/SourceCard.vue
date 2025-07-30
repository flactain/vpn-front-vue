<template>
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
</template>
