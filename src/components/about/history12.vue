<template>
  <div class="container">
    <div class="card">
      <div class="card-header">欢迎光临我的Pizza小店</div>
    
      <div class="row" v-for="(order,index) in myorder" :key="index">
        
       <!-- <p>{{order}}</p> -->
        <div class="col-4 divimg" >
          <img class="card-img-top" src="../../../static/image/2.jpg" alt="Card image cap">
        </div>
         <div class="card-body col-8" >
         <template v-for="(orde,index) in order">
          <span :key="index">{{orde.name}}-{{orde.size}}-{{orde.num}}</span>
         </template> 
         </div>
        </div>
      </div>
      <!-- <nav></nav> -->
    
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mymoney: [],
      myorder: [
                  ],

    };
  },
  mounted() {
    axios.get("./ww-myorder1.json").then(res => {
      for (let key in res.data) {
        this.myorder.push(res.data[key]);
      }
      console.log(this.myorder);
      
    });
    axios.get("./ww-myorder2.json").then(res => {
      for (let key in res.data) {
        this.mymoney.push(res.data[key]);
      }
      console.log(this.mymoney);
    });
    /* this.begin() */
  },
  methods: {
    /* begin() {
     
       var that=this;
      for(let i=0;i<that.myorder.length;i++){
        console.log(that);
        
      }
    } */
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
.divimg {
  padding: 2% 0 2% 4%;
}
</style>