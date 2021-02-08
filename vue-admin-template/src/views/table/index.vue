<template>
  <div class="app-container">
    <div align="right">
      <el-button type="primary" round @click="addblog">添加文章 </el-button>
    </div>

    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="文章id">
        <template slot-scope="scope">
          {{ scope.row.blog_id }}
        </template>
      </el-table-column>
      <el-table-column label="文章标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column label="文章内容">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column label="发表时间">
        <template slot-scope="scope">
          {{ scope.row.post_time }}
        </template>
      </el-table-column>
      <el-table-column label="用户id">
        <template slot-scope="scope">
          {{ scope.row.user_id }}
        </template>
      </el-table-column>

      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">

          <el-button
            :plain="true"
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.blog_id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
       fetchData() {
      this.listLoading = true;
      this.axios
        .get("http://localhost:3000/blog/list")
        .then((res) => {
          this.list = res.data.blogs;
          this.listLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(id) {
      let blogId = id;
      console.log(blogId);
      this.axios
        .get("http://localhost:3000/blog/delete", {
          params: {
            blogId,
          },
        })
        .then((res) => {
          if(true) {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message({
              showClose: true,
              message: "本条信息错误",
              type: "error",
            });
          }
        })
        .catch((err) => {
         console.log(res)
        });
    },
  },
};
</script>
