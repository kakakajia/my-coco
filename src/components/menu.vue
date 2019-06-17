<template>
  <div class="container">
    <div class="container">
      <div style="height:220px;"></div>
      <div class="row">
        <div class="col-7" style="background-color:orange">
          <Orderbook :orderbooks='orderbooks' v-on:updata1='updata'></Orderbook>
        </div>
        <div class="col-5" style="background-color:#f26522">
          <Buycar :addbooks='addbooks'></Buycar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buycar from './menu/buycar'
import Orderbook from './menu/orderbook'
import axios from 'axios'
export default {
  data() {
    return {
      /* orderbooks:[], */
      addbooks:[]
    };
  },
  components:{
    Buycar,
    Orderbook
  },
  mounted(){
    axios.get('./ww-pizzas.json').then((res)=>{
      var result=[]
      for(let key in res.data){
       result.push(res.data[key])
      }
      this.$store.commit('setMenu1010',result)
    })
  },
  methods:{
    updata(value){
      let angin=this.addbooks.filter((item)=>{
        return item.name===value.orderbook.name&&item.size===value.order.size
      })
      if(angin.length>0){
        if(angin[0].num<10){
          angin[0].num++
          }else{
            alert('最大购买数量为10')
          }
      }else{
      this.addbooks.push(
        {
          name:value.orderbook.name,
          price:value.order.price,
          size:value.order.size,
          num:1
        }
      )}
      /* console.log(this.addbooks); */
      /* axios.post('./ww-myorder.json',this.addbooks) */
      
    }
  },
  computed:{
    orderbooks(){
      return this.$store.getters.getMenu1010
    }
  }
};
</script>

<style scoped>
</style>