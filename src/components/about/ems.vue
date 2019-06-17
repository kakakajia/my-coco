<template>
  <div class="row posi">
    <div class="card mr-2" style="flex:1;" v-for="(arr,index) in array" :key="index">
      <img class="card-img-top" :src="arr.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{arr.name}}</h5>
        <a href="#" class="btn btn-danger">查询快递信息</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          src: "../../../static/image/4.jpg",
          name: "百世快递"
        },
        {
          name: "德邦快递",
          src: "../../../static/image/5.jpg"
        },
        {
          name: "顺丰快递",
          src: "../../../static/image/6.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.posi{
  margin:0 auto;
  
}
</style>