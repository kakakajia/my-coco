<template>
  <div class="er">
    <div style="height:220px;"></div>
    <table class="text-center">
      <tr>
        <th colspan="6">订单详情</th>
      </tr>
      <tr style="height:40px;">
        <th colspan="2">品名</th>
        <th>尺寸</th>
        <th>数量</th>
        <th>价格</th>
        <th>金额</th>
      </tr>
      <tbody>
        <tr class="thisone" v-for="(arr,index) in pizzased" :key="index">
          <td class="imgtd">
            <img src="../../static/image/2.jpg" alt>
          </td>
          <td>{{arr.name}}</td>
          <td>{{arr.size}}</td>
          <td>{{arr.num}}个</td>
          <td>{{arr.price}}元</td>
          <td>{{arr.num*arr.price}}元</td>
        </tr>
        <tr style="height:40px;">
          <td
            colspan="6"
            style="text-align:right;padding:0 30px;font-weight:bold;color:darkred"
          >总金额:{{allmoney}}元</td>
        </tr>
        <!--  {{pizzased}} -->
      </tbody>
      <span class="btn btn-danger" @click="goBack">点击返回</span>
    </table>
  </div>
</template>

<script>
export default {
  name: "Thisone",
  data() {
    return {
      pizzased: {},
      allmoney:''
      /*  arr:[] */
    };
  },
  mounted() {
    this.pizzased = this.$route.params.name;
    this.allmoney = this.$route.params.result;
  },
  computed: {
  //   allmoney() {
  //     return 1
  // },
  },
  methods: {
    goBack() {
         mode:'history'
      this.$router.go(-1);
    }
  },
}

</script>
<style scoped>
.er {
  width: 1110px;
  margin: 0 auto;
  /* background-color: rgba(255,255,255,.6) */
}
table {
  width: 1110px;
  font-size: 16px;
  position: relative;
}
tr {
  height: 100px;
}
th,
td {
  /*  padding:15px; */
  background-color: rgba(255, 225, 225, 0.8);
  border: 3px solid rgba(225, 153, 32);
}
img {
  width: 130px;
}
.imgtd {
  width: 180px;
}
span {
  position: absolute;
  right: 36px;
  top: 32px;
}
</style>