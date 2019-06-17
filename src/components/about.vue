<template>
  <div class="container">
    <div style="height:220px;"></div>
    <div class="row">
      <nav class="col-4">
        <router-link to="/about/hot" class="btn btn-danger btn-block btn-lg mb-2">热门活动</router-link>
        <router-link to="/about/callme" class="btn btn-warning btn-block btn-lg mb-2">联系我们</router-link>
        <router-link to="/about/history" class="btn btn-danger btn-block btn-lg mb-2">历史订单</router-link>
        <router-link to="/about/ems" class="btn btn-warning btn-block btn-lg mb-2">快递信息</router-link>
      </nav>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "关于我们"
    };
  }
};
</script>

<style scoped>
</style>