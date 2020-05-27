<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="id"
      show-select
      show-expand
      v-model="selected"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:expanded-item="{ headers, item }">

        <td :colspan="headers.length">
          <span>参加原因：</span>{{item.reason}} <br>
          <span>自我介绍：</span>{{item.intro}}
        </td>
      </template>

    </v-data-table>
    <!-- 分页 -->
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      selected: [],
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "姓名",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "年纪学院专业", value: "career" },
        { text: "填报岗位", value: "job" },
        { text: "邮箱", value: "email" },
        { text: "联系方式", value: "contact" },
        { text: "", value: "data-table-expand" }
      ],
      desserts: [
        {
          id: 1,
          name: "张三",
          career: "计算机三班",
          contact: "18833333",
          email: "zzs@qq.com",
          job: "前端开发",
          reason: "我喜欢编程",
          intro: "我是一个垃圾"
        },
        {
          id: 2,
          name: "张三",
          career: "计算机三班",
          contact: "18833333",
          email: "zzs@qq.com",
          job: "前端开发",
          reason: "我喜欢编程",
          intro: "我是一个垃圾"
        }
      ]
    };
  }
};
</script>