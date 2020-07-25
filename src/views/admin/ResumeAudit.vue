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
          <span>自我介绍：</span>{{item.about_myself}}
        </td>
      </template>

    </v-data-table>

  </div>
</template>

<script>
import { apiGetAll } from "../../request/api";
export default {
  data() {
    return {
      current: 1,
      selected: [],
      size: 10,
      itemsPerPage: 10,
      headers: [
        {
          text: "姓名",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "年纪学院专业", value: "classes" },
        { text: "填报岗位", value: "group_name" },
        { text: "邮箱", value: "email" },
        { text: "联系方式", value: "phone" },
        { text: "", value: "data-table-expand" }
      ],
      desserts: []
    };
  },
  methods: {
    getAll() {
      let params = {
        _ajax: 1,
        current: this.current,
        size: this.size
      };
      apiGetAll(params).then(resp => {
        this.desserts = resp.data.data;
      });
    }
  },
  mounted() {
    this.getAll();
  }
};
</script>