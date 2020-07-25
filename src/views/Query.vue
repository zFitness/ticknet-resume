<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="姓名"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="邮箱"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        查询
      </v-btn>
    </v-form>

    <p class="mt-2">{{ result }}</p>
  </div>

</template>

<script>
import { apiProgress } from "../request/api";

export default {
  name: "Query",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "姓名不能为空",
      v => (v && v.length <= 10) || "姓名不能超过10个字符"
    ],
    email: "",
    emailRules: [
      v => !!v || "邮箱不能为空",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    result: ""
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let data = {
          name: this.name,
          email: this.email
        };
        apiProgress(data)
          .then(resp => {
            // console.log(resp);
            this.result = resp.message;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>