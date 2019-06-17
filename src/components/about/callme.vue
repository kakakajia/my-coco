<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header" >Featured</div>
      <div class="card-body">
        <h5 class="card-title">联系我们</h5>
        <p class="card-text">欢迎光临我的Pizza小店</p>

        <router-link class="btn btn-danger" to="/about/address">地址信息</router-link>
        <router-link class="btn btn-danger" to="/about/name">法人代表</router-link>
        <router-link class="btn btn-danger" to="/about/tel">电话热线</router-link>
      </div>
      <router-view></router-view>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
    <!-- <nav></nav> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "联系我们"
    };
  }
};
</script>

<style scoped>
</style>