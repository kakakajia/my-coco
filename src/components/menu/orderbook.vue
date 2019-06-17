<template>
    <div>
        <p class="h3 text-center mt-4">点餐</p>
<table class="table  text-center" >
   <tbody v-for='(orderbook,index) in orderbooks' :key='index'>
      <tr style='background-color:yellow'>
      <th scope="col" >{{orderbook.name}}</th>
      <th scope="col" colspan="2" class='text-left'>简介：{{orderbook.about}}</th>
    </tr>
    <tr >
      <td scope="col" style='width:30%'>尺寸</td>
      <td scope="col" style='width:30%'>价格(元)</td>
      <td scope="col" style='width:40%'>加入</td>
    </tr>
    <tr v-for='(order,index) in orderbook.pizza' :key='index'>
      <td scope="col" >{{order.size}}</td>
      <td scope="col" >{{order.price}}</td>
      <td scope="col" >
          <button class='btn btn-sm btn-danger text-white' v-on:click='upData(order,orderbook)'>点击+1</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        props:['orderbooks'],
        methods:{
            upData(order,orderbook){
                this.$emit('updata1',{order:order,orderbook:orderbook})
            }
        }
    }
</script>

<style  scoped>

</style>