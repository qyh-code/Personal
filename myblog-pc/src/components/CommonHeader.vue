<template>
<div class="header">
     
      </div>
</template>
<script>
export default {
    data() {
    return {
      user:'',
   
    };
  },
    created() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    this.user = user;
    
  },
}
</script>
<style>
.header{
  width: 1200px;
  height: 60px;
  color: aliceblue;
  font-size: 20px;
  background-image: url(../assets/carousel-ct.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
  .nav-left {
    float: left;
  }
  .nav-right {
    float: right;
  }
</style>