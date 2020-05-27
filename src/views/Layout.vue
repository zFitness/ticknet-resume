<template>
  <div class="home">
    <v-app>
      <v-app-bar
        color="accent-4"
        dark
        app
      >
        <v-btn
          icon
          to="/home"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-toolbar-title v-text="$route.meta.title"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

      </v-app-bar>

      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app padless absolute>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Ticknet</strong>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  components: {}
};
</script>
