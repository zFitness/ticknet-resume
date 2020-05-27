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
          v-model="name"
          :counter="10"
          :rules="gradeRules"
          label="2.年级，学院，专业，班级"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="3.联系方式"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="4.邮箱"
          required
        ></v-text-field>

        <v-radio-group
          v-model="radioGroup"
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
          :items="radioGroup==1?items1:items2"
          label="6.请选择岗位"
        ></v-select>

        <v-textarea
          solo
          name="input-7-4"
          label="7.为什么想加入工作室"
        ></v-textarea>

        <v-textarea
          solo
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
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      valid: true,
      name: "",
      radioGroup: 1,
      items1: [
        { text: "前端", value: 1 },
        { text: "后端", value: 2 },
        { text: "运维", value: 3 }
      ],
      items2: [
        { text: "策划", value: 1 },
        { text: "产品", value: 2 },
        { text: "新媒体", value: 3 }
      ],
      nameRules: [
        v => !!v || "必须输入姓名",
        v => (v && v.length <= 10) || "姓名不能超过10个字符"
      ],
      email: "",
      emailRules: [
        v => !!v || "必须输入邮箱",
        v => /.+@.+\..+/.test(v) || "邮箱格式不正确"
      ]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>


<style lang="scss" scoped>
</style>