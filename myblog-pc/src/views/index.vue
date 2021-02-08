<template>
  <div class="container">
    <common-header />
    <div class="myInfo">
      <h5 class="neirong">    Qyh</h5>
      <h5 class="neirong2"> 唯创网讯</h5>
      <h5 class="neirong2">   欢迎</h5>
    </div>
    <!-- <div class="myDetail">
      <input
        class="search-btn"
        type="text"
        v-model="search"
        placeholder="搜索文章"
      /> -->
      <div class="blog-list">
        <div class="blog" v-for="item in filteredblogList" :key="item.blog_id">
          <h3 class="blog-title">
            <!-- 页面的跳转 -->
            <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
              item.title
            }}</router-link>
          </h3>
          <p class="blog-content">{{ item.content }}</p>
          <span class="post-time">{{ item.post_time }}</span>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import CommonHeader from "../components/CommonHeader.vue";
export default {
  components: { CommonHeader },
  data() {
    return {
      blogList: [],
    //   search: "",
    };
  },
  created() {
    this.getDate();
  },
//   computed: {
//     filteredblogList: function () {
//       return this.blogList.filter((blog) => {
//         return blog.title.match(this.search);
//       });
//     },
//   },
  methods: {
    getDate() {
      this.$http.get("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权-then");
        } else if (state == "success") {
          let { blogs } = res.data;
          this.blogList = blogs;
          console.log(this.blogList);
        }
      });
    },
  },
};
</script>
<style scoped>
.blog-list {
  width: 815px;
  margin: 40px 400px;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
.btn-sendDetail {
  width: 70px;
  height: 35px;
  float: right;
}
/* .search-btn {
  height: 35px;
  width: 200px;
  position: 20px;
} */

.myInfo {
  width: 300px;
  height: 200px;
  float:left;
  position: fixed;
  background-color: rgb(224, 224, 224);
  border-radius: 10px;
  margin: 80px 10px 20px -70px;
  background-repeat: no-repeat;
}
.neirong{
font-size: 15px;
margin-top: 65px;
}
.neirong2{
  margin-top: 10px;
  font-size: 15px;
}
</style>

