<template>
  <div class='ml-1' >
      <p class="h3 text-center mt-4">菜单管理</p>
    <table class="table text-center " >
  <thead>
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">删除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='(pizza,index) in pizzas' :key='index'>
      <th scope="row" >{{index+1}}</th>
      <td>{{pizza.name}}</td>
      <td>
          <button class='btn btn-sm btn-danger text-white' v-on:click.prevent='dele(pizza,index)'>点击删除</button>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          /*   pizzas:[] */
        }
    },
    mounted(){
           axios.get('./ww-pizzas.json').then(
                (res)=>{
                  const result=[]
                    for(let key in res.data){
                        let item=res.data[key]
                        item.id=key
                        result.push(res.data[key])
                    }
                    this.$store.commit('setMenu1010',result)
                }
            )
        
    },
    methods:{
        dele(item,index){
            axios.delete(`./ww-pizzas/${item.id}.json`).then((res)=>{
                /* location.reload() */
                this.$store.commit('deleMenu1010',index)
            })
        }
    },
    computed:{
      pizzas(){
        return this.$store.getters.getMenu1010
      }
    }
};
</script>

<style  scoped>
</style>