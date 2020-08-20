<template>
  <div class="form">
    <div class="d-flex flex-column">
      <p>您好，欢迎您参加TickNet工作室招新，
        请根据您的实际情况认真填写报名表。</p>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="1.姓名"
          required
        ></v-text-field>

        <v-text-field
          v-model="classes"
          :rules="classRules"
          label="2.年级，学院，专业，班级(18-计科-xx)"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :counter="11"
          :rules="phoneRules"
          label="3.电话号码(选填)"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="4.邮箱"
          required
        ></v-text-field>

        <v-radio-group
          v-model="department_id"
          hint="hhhh"
          label="5.本次想加入"
          :mandatory="true"
        >

          <v-radio
            v-for="(item, key) in items4"
            :key="key"
            :label="item.department_name"
            :value="key"
          ></v-radio>
          
        </v-radio-group>

        <v-select
          :items="items4[department_id].groups"
          label="6.请选择岗位"
          v-model="group_rank"
          :item-text="'group_name'"
          :item-value="'rank'"
          :rules="groupRules"
        ></v-select>

        <v-select
          :items="group_rank"
          label="7.请选择等级"
          :item-text="'name'"
          :rules="groupRules"
        ></v-select>

        <v-textarea
          solo
          v-model="reason"
          name="input-7-4"
          label="7.为什么想加入工作室(选填)"
        ></v-textarea>

        <v-textarea
          solo
          v-model="about_myself"
          name="input-7-4"
          label="8.自我介绍"
          :rules="myselfRules"
        ></v-textarea>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          写好了，提交
        </v-btn>

      </v-form>
    </div>
    <v-snackbar
      v-model="snackbar"
      multi-line
    >
      {{ toast }}
      <v-btn
        color="red"
        text
        @click="snackbar = false"
      >
        关闭
      </v-btn>
    </v-snackbar>
    <v-dialog
      v-model="snackbar_success"
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
          恭喜你，提交成功。请等待审核， 你可以在主页面查看进度。
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
  </div>
</template>

<script>
import { apiForm } from "../request/api";

export default {
  name: "Form",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "必须输入姓名",
        v => (v && v.length <= 10) || "姓名不能超过10个字符"
      ],
      classes: "",
      classRules: [v => !!v || "必须输入专业信息"],
      phone: "",
      phoneRules: [],
      group_rank: [],
      groupRules: [v => v != 0 || "必须选择专业"],
      reason: "",
      about_myself: "",
      myselfRules: [v => !!v || "请输入自我介绍"],
      department_id: 1,
      items4: [
        {
          id: 1,
          department_name: "研发组",
          desc: null,
          groups: [
            {
              id: 1,
              department_id: 1,
              group_name: "前端工程师",
              desc: null,
              rank: [
                {
                  id: 2,
                  group_id: 1,
                  rank: 2,
                  name: "初级工程师",
                  status: 1,
                  desc: "初级前端工程师"
                },
                {
                  id: 3,
                  group_id: 1,
                  rank: 3,
                  name: "中级工程师",
                  status: 1,
                  desc: "中级前端工程师"
                }
              ]
            },
            {
              id: 2,
              department_id: 1,
              group_name: "后端工程师",
              desc: null,
              rank: [
                {
                  id: 5,
                  group_id: 2,
                  rank: 2,
                  name: "初级工程师",
                  status: 1,
                  desc: "初级后端工程师"
                },
                {
                  id: 6,
                  group_id: 2,
                  rank: 3,
                  name: "中级工程师",
                  status: 1,
                  desc: "中级后端工程师"
                }
              ]
            },
            {
              id: 3,
              department_id: 1,
              group_name: "运维与安全工程师",
              desc: null,
              rank: [
                {
                  id: 8,
                  group_id: 3,
                  rank: 2,
                  name: "初级",
                  status: 1,
                  desc: "初级运维与安全工程师"
                },
                {
                  id: 9,
                  group_id: 3,
                  rank: 3,
                  name: "中级",
                  status: 1,
                  desc: "中级运维与安全工程师"
                }
              ]
            },
            {
              id: 7,
              department_id: 1,
              group_name: "实习生",
              desc: "研发实习生",
              rank: [
                {
                  id: 1,
                  group_id: 7,
                  rank: 1,
                  name: "实习生",
                  status: 1,
                  desc: "研发实习生"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          department_name: "运营组",
          desc: null,
          groups: [
            {
              id: 4,
              department_id: 2,
              group_name: "产品运营",
              desc: null,
              rank: [
                {
                  id: 11,
                  group_id: 4,
                  rank: 2,
                  name: "初级",
                  status: 1,
                  desc: "初级产品运营"
                },
                {
                  id: 12,
                  group_id: 4,
                  rank: 3,
                  name: "中级",
                  status: 1,
                  desc: "中级产品运营"
                }
              ]
            },
            {
              id: 5,
              department_id: 2,
              group_name: "新媒体",
              desc: null,
              rank: [
                {
                  id: 14,
                  group_id: 5,
                  rank: 2,
                  name: "初级",
                  status: 1,
                  desc: "初级新媒体"
                },
                {
                  id: 15,
                  group_id: 5,
                  rank: 3,
                  name: "中级",
                  status: 1,
                  desc: "中级新媒体"
                }
              ]
            },
            {
              id: 6,
              department_id: 2,
              group_name: "策划",
              desc: null,
              rank: [
                {
                  id: 17,
                  group_id: 6,
                  rank: 2,
                  name: "初级",
                  status: 1,
                  desc: "初级策划"
                },
                {
                  id: 18,
                  group_id: 6,
                  rank: 3,
                  name: "中级",
                  status: 1,
                  desc: "中级策划"
                }
              ]
            },
            {
              id: 8,
              department_id: 2,
              group_name: "实习生",
              desc: "运营实习生",
              rank: [
                {
                  id: 10,
                  group_id: 8,
                  rank: 1,
                  name: "实习生",
                  status: 1,
                  desc: "运营实习生"
                }
              ]
            }
          ]
        }
      ],
      email: "",
      emailRules: [
        v => !!v || "必须输入邮箱",
        v => /.+@.+\..+/.test(v) || "邮箱格式不正确"
      ],
      toast: "提交成功",
      snackbar: false,
      snackbar_success: false
    };
  },
  methods: {
    handleSubmitSuccess() {
      this.$router.push("/");
    },
    validate() {
      if (this.$refs.form.validate()) {
        let data = {
          name: this.name,
          classes: this.classes,
          phone: this.phone,
          email: this.email,
          department_id: this.department_id,
          group_id: this.group_id,
          reason: this.reason,
          about_myself: this.about_myself
        };

        apiForm(data)
          .then(resp => {
            console.log(resp);
            if (resp.code == 0) {
              this.snackbar_success = true;
            } else {
              this.toast = resp.message;
              this.snackbar = true;
            }
          })
          .catch(err => {
            this.toast = err;
            this.snackbar = true;
          });
      } else {
        this.toast = "请填写完整信息";
        this.snackbar = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
</style>