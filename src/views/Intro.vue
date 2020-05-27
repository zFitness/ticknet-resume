<template>
  <div class="form">
    <div class="d-flex flex-column">
      <p>您好，下面是tickent工作室的一些岗位。</p>
      <div>
        <p class="headline">
          <!-- <v-icon>mdi-spin mdi-microsoft-visual-studio</v-icon> -->
          研发组
        </p>
        <div>
          <p class="title">
            <v-icon>mdi-microsoft-visual-studio</v-icon>
            前端工程师
          </p>
          <p>
            负责PC和移动端网页开发
            小程序、Web App开发
            JavaScript、CSS、HTML
          </p>
        </div>

        <div>
          <p class="title">
            <v-icon>mdi-language-java</v-icon>
            后端工程师
          </p>
          <p>
            编写运行在服务器端的代码
            为产品提供可靠的数据接口
            PHP/Node/Java/Python
          </p>
        </div>

        <div>
          <p class="title">
            <v-icon>mdi-server</v-icon>
            运维工程师
          </p>
          <p>
            进行日常的服务器运维
            负责系统稳定和安全工作
            Linux、Web安全
          </p>
        </div>
      </div>

      <v-divider></v-divider>
      <div class="mt-2">
        <p class="headline">
          <!-- <v-icon>mdi-spin mdi-microsoft-visual-studio</v-icon> -->
          运营组
        </p>
        <div>
          <p class="title">
            <v-icon>mdi-battery-heart</v-icon>
            产品
          </p>
          <p>
            负责工作室产品项目管理
            完成用户调研、需求分析
            Axure、墨刀、Xmind等
          </p>
        </div>

        <div>
          <p class="title">
            <v-icon>mdi-newspaper</v-icon>
            新媒体
          </p>
          <p>
            「湖南科技服务号」运营
            负责团队的外宣工作
            Alexa、Spss、场景秀等
          </p>
        </div>

        <div>
          <p class="title">
            <v-icon>mdi-brain</v-icon>
            策划
          </p>
          <p>
            负责日常活动、招新策划
            团队规章制度制定与监督
            Word、Excel等
          </p>
        </div>
      </div>
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
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
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