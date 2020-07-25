<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#515B79"
                dark
                flat
              >
                <v-toolbar-title>Ticknet招新系统登录</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="admin_name"
                    label="用户名"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#515B79"
                  dark
                  @click="login"
                >登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- 错误提示 -->
          <v-snackbar
            v-model="fail_status"
            multi-line
          >
            {{ toast }}
            <v-btn
              color="red"
              text
              @click="fail_status = false"
            >
              关闭
            </v-btn>
          </v-snackbar>
          <!-- 登陆成功提示框 -->
          <v-dialog
            v-model="success_status"
            width="500"
            persistent
          >

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                提交成功
              </v-card-title>

              <v-card-text>
                恭喜你，登陆成功。
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="handleSubmitSuccess"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { apiLogin } from "../../request/api";
export default {
  data() {
    return {
      admin_name: "",
      password: "",
      success_status: false,
      fail_status: false,
      toast: ""
    };
  },
  props: {
    source: String
  },
  methods: {
    handleSubmitSuccess() {
      this.$router.push("/admin/");
    },
    login() {
      let data = {
        admin_name: this.admin_name,
        password: this.password
      };
      apiLogin(data).then(resp => {
        if (resp.code == 0) {
          localStorage.setItem("token", resp.data.token);
          this.success_status = true;
        } else {
          this.toast = resp.message;
          this.fail_status = true;
        }
      });
    }
  }
};
</script>