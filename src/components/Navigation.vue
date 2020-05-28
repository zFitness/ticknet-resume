<template>
  <v-navigation-drawer
    width="240"
    color="#515B79"
    :dark="backgroundNav"
    hide-overlay
    app
    :expand-on-hover="expandOnHover"
    v-model="drawer"
  >
    <!-- 头部 -->
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>

        <v-list-item-title class="title">
          小郑博客
        </v-list-item-title>
        <v-list-item-subtitle>
          我思故我在
        </v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
    <v-list flat>
      <template v-for="list in navList">
        <v-list-group
          class="white--text"
          v-if="list.items != null"
          :key="list.path"
          :prepend-icon="list.icon"
          :active-class="backgroundNav||$vuetify.theme.dark?'white--text':'grey--text text--darken-3'"
          :group="list.group"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="list.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item in list.items"
            :key="item.title"
            active-class="secondary white--text"
            :to="item.path"
          >
            <v-list-item-action>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          :key="list.title"
          active-class="secondary white--text"
          :to="list.path"
          v-else
        >
          <v-list-item-action>
            <v-icon v-text="list.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="list.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block to="/admin/login">退出</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    miniNav: Boolean,
    backgroundNav: Boolean,
    expandOnHover: Boolean
  },
  data() {
    return {
      drawer: true,
      navList: [
        {
          title: "报名简历信息",
          path: "/dashboard",
          icon: "mdi-view-dashboard"
        },
        {
          title: "待审核简历信息",
          icon: "mdi-speedometer",
          path: "/article"
        },
        {
          title: "设置岗位信息",
          icon: "mdi-speedometer",
          path: "/plugin",
        },
        {
          title: "设置表单信息",
          icon: "mdi-speedometer",
          path: "/plugin",
        }
        // {
        //   title: "思维进阶",
        //   icon: "mdi-lightbulb-outline",
        //   group: "/bulb",
        //   items: [
        //     {
        //       title: "转场动画",
        //       path: "/bulb/motion",
        //       icon: "mdi-transition-masked"
        //     }
        //   ]
        // }
      ]
    };
  },
  methods: {
    toggleNav() {
      this.drawer = !this.drawer;
    }
  }
};
</script>