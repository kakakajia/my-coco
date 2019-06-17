<template>
  <div class="row">
    <div
      class="card mr-2 kgbl"
      style="flex:1;position:relative"
      v-for="(array,index) in myorder3"
      :key="index"
    >
      <img class="card-img-top" src="../../../static/image/2.jpg" alt="Card image cap">
      <div class="card-body" style="padding:3% 7%">
        <template v-for="(arr,index) in array">
          <div :key="index" v-if="index<3">
            <p class="card-title marbot marbop">{{arr.name}}--{{arr.size}}--{{arr.num}}个</p>
            <!-- <p class="card-text text-success marbot">已完成支付.</p>-->
          </div>
        </template>
        <span v-if="array.length>=3" style="position:absolute;left:8%;bottom:15%">...</span>
        <button
          class="btn btn-danger marbot"
          @click="tothisone(array)"
          style="position:absolute;left:18px;bottom:9px"
        >点击查看详情</button>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "History",
  data() {
    return {
      myorder: [],
      myorder3: []
      /*  brray:{src:'../../../static/imgs/3.jpg',text:'海鲜至尊披萨',num:'5'} */
    };
  },
  mounted() {
    axios.get("./ww-myorder.json").then(res => {
      for (let key in res.data) {
        this.myorder.push(res.data[key]);
      }
      this.myorder3 = this.myorder.splice(-3, 3);
    });
    /*  console.log(this.myorder3); */
  },
  methods: {
    tothisone(array) {
      var result;
     /*  console.log(JSON.stringify(array)); */
      
      if (!array.length) {
        result = Number(array[0].price * array[0].num);
      } else {
        result = array.reduce((prev, next) => {
          return prev + Number(next.price * next.num);
        }, 0);
      }

      this.$router.push({
        name: "Thisone",
        params: { name: array, result: result }
      });
    }
  }
  /*   computed:{
      allmoney(){
        return this.myorder3.forEach((item) => {
          let aa=item.reduce((prev,next)=>{
              return prev+Number(next.num*next.price)
           })
           item.push( aa)
        });
      }
    } */
};
</script>

<style scoped>
.kgbl {
  width: 30%;
  height: 0;
  padding-bottom: 42%;
}
.marbot {
  margin: 3px 0;
}
.marbop {
  /* height:22%; */
  margin: 3% 0;
}
</style>