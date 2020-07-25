<template>
  <div class="home">
    <div v-wechat-title='$route.meta.title'></div>
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

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              @click="fresh"
              v-on="on"
            >
              <v-icon>mdi-rotate-right</v-icon>
            </v-btn>
          </template>
          <span>刷新</span>
        </v-tooltip>

      </v-app-bar>

      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer
        app
        padless
        absolute
      >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <a
            href="http://ticknet.cn"
            target="__blank"
            style="text-decoration:none;color:#272727;"
          ><strong>Ticknet</strong></a>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  components: {},
  methods: {
    fresh() {
      location.reload();
    }
  }
};
</script>
