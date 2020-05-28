<template>
  <!-- App.vue -->

  <v-app>
    <Navigation
      :miniNav="miniNav"
      :backgroundNav="backgroundNav"
      :expandOnHover="expandOnHover"
      ref="navigation"
    />

    <v-app-bar
      height="64"
      color="#7796B7"
      :elevation="appbarShadow"
      app
      dark
    >
      <!-- 点击时，切换侧边栏状态 -->
      <v-app-bar-nav-icon @click.stop="$refs.navigation.toggleNav()" />
      <v-toolbar-title>
        <v-avatar tile>
          <v-icon
            size="40"
            style="transform: rotate(180deg)"
          >mdi-steam</v-icon>
        </v-avatar>Ticknet招新管理系统
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          class="d-md-flex d-none"
          @click="fullscreen"
          text
        >
          <v-icon>mdi-fullscreen</v-icon>
        </v-btn>

        <v-btn
          text
          to="/admin/login"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "../../components/Navigation";

export default {
  data() {
    return {
      miniNav: false,
      expandOnHover: false,
      appbarShadow: 4,
      backgroundNav: true
    };
  },
  components: {
    Navigation
  },
  methods: {
    fullscreen() {
      this.fullscreenIcon = screenfull.isFullscreen
        ? "mdi-fullscreen"
        : "mdi-fullscreen-exit";
      screenfull.toggle();
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/admin/login");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>