<template>
  <div class="components-container">
    <div class="editor-container" style="padding: 20px">
      <div class="inputDeep" style="margin-bottom: 20px; display: flex">
        <el-tag type="success">标题</el-tag>
        <el-input v-model="input" placeholder="请输入标题"></el-input><br />
      </div>
      <div style="margin-bottom: 20px; display: flex">
        <el-tag>内容</el-tag>
        <el-input
          v-model="inputMsg"
          placeholder="请输入内容"
          type="textarea"
          maxlength="500"
          show-word-limit
          :rows="10"
        ></el-input
        ><br />
      </div>
    </div>
    <el-button type="success" plain @click="getblog">发布</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      inputMsg: "",
    };
  },
  methods: {
    getblog() {
      if (this.input.trim() == "" || this.inputMsg.trim() == "") {
        this.$message({
          message: "发布失败!!!",
          type: "warning",
        });
      } else {
        this.axios
          .post("http://localhost:3000/blog/goarticle", {
            title: this.input,
            content: this.inputMsg,
            userId:5
          })
          //添加文章成功，返回到文章列表
          .then((res) => {
            this.$router.push("/example/table");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>