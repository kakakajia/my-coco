<template>
  <div class="row">
    <div class="card mr-2 kgbl" style="flex:1;" v-for="(arr,index) in array" :key="index">
      <img class="card-img-top" :src="arr.src" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title marbot">{{arr.name}}*{{arr.num}}</h5>
        <p class="card-text text-success marbot">已完成支付.</p>
        <a href="#" class="btn btn-danger marbot">点击查看详情</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      myorder: [],
      array: [
        {
          name: "驴肉披萨",
          src: "../../../static/image/2.jpg",
          num: 2
        },
        {
          src: "../../../static/image/1.jpg",
          name: "烤鸭披萨",

          num: 3
        },
        {
          name: "西红柿鸡蛋披萨",
          src: "../../../static/image/3.jpg",
          num: 5
        }
      ]
    };
  },
  mounted() {
    axios.get("./ww-myorder.json").then(res => {
      for (let key in res.data) {
        this.myorder.push(res.data[key]);
      }
    });
    console.log(this.myorder);
    
  }
};
</script>

<style scoped>
.kgbl {
  width: 30%;
  height: 0;
  padding-bottom: 40%;
}
.marbot {
  margin: 3% 0;
}
</style>