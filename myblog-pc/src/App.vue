<template>
  <div id="app">
    <div id="nav">
      <p class="nav-left">
        MyBlog
        <a id="link-detail" href="http://localhost:8080/">博客首页</a>
      </p>
      <p class="nav-right">
        <a href="" v-if="this.user.username">{{
          this.user.username
        }}</a>
        <a href="http://localhost:8080/login" v-else>登录</a>
      
      </p>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
    };
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
  },
  methods: {
    postBlog() {
      this.$router.push("/blog/goarticle");
    },
  },
};
</script>
<style lang="scss">
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/bg.jpg);
  background-repeat: repeat;
  background-size: contain;
}

#nav {
  padding: 30px;
  width: 1300px;
  height: 20px;
  color: white;
  margin: 0 auto;
  font-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  a {
    font-weight: bold;
    color: #ffffff;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-left {
    float: left;
  }
  .nav-right {
    float: right;
  }
}

/* css reset */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

/* 能用样式 */
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
