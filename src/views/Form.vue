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
          :counter="10"
          :rules="classRules"
          label="2.年级，学院，专业，班级"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :counter="11"
          :rules="phoneRules"
          label="3.电话号码"
          required
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
            label="研发组"
            value="1"
          ></v-radio>
          <v-radio
            label="运营组"
            value="2"
          ></v-radio>
        </v-radio-group>

        <v-select
          :items="department_id==1?items1:items2"
          label="6.请选择岗位"
          v-model="group_id"
        ></v-select>

        <v-textarea
          solo
          v-model="reason"
          name="input-7-4"
          label="7.为什么想加入工作室"
        ></v-textarea>

        <v-textarea
          solo
          v-model="about_myself"
          name="input-7-4"
          label="8.自我介绍"
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
      classRules: [],
      phone: "",
      phoneRules: [],
      group_id: "",
      reason: "",
      about_myself: "",
      department_id: 1,
      items1: [
        { text: "前端", value: 1 },
        { text: "后端", value: 2 },
        { text: "运维", value: 3 }
      ],
      items2: [
        { text: "策划", value: 6 },
        { text: "产品", value: 4 },
        { text: "新媒体", value: 5 }
      ],
      email: "",
      emailRules: [
        v => !!v || "必须输入邮箱",
        v => /.+@.+\..+/.test(v) || "邮箱格式不正确"
      ],
      toast: "提交成功",
      snackbar: false
    };
  },
  methods: {
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

        apiForm(data).then(resp => {
          console.log(resp);
          this.toast = resp.message;
          this.snackbar = true;
        });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
</style>