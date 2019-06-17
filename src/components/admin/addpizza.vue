<template>
  <div>
    <p class="h3 text-center mt-4">添加新的pizza</p>
    <form>
      <div class="form-group">
        <label for="inputAddress">品种</label>
        <input type="text" class="form-control" v-model="pizzas.name" id="inputAddress" placeholder="请输入pizza种类">
      </div>
      <div class="form-group">
        <label for="inputAddress2">描述</label>
        <input type="text" class="form-control" v-model="pizzas.about" id="inputAddress2" placeholder="请描述这种pizza的特色">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <span >尺寸</span>
          <select id="inputState" class="form-control"  v-model="pizzas.pizza[0].size">
            
            <option>8寸</option>
            <option>10寸</option>
            <option>12寸</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <span for="inputZip">价格</span>
          <input type="text" class="form-control" id="inputZip" v-model="pizzas.pizza[0].price">
        </div>
        <div class="form-group col-md-6">
          <select id="inputState" class="form-control" v-model="pizzas.pizza[1].size">
            
            <option>8寸</option>
            <option>10寸</option>
            <option>12寸</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          
          <input type="text" class="form-control" id="inputZip" v-model="pizzas.pizza[1].price">
        </div>
      </div>
      <button type="submit" class="btn btn-danger col-md-12 btn-center mb-3" v-on:click.prevent='addpizza'>点击添加</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        pizzas:{
            name:'',
            about:'',
            pizza:[
                {
                    size:'',
                    price:''
                },
                {
                    size:'',
                    price:''
                }
            ]
        }
    };
  },
    methods:{
        addpizza(){
            if(this.pizzas.name==''){
                alert('请输入pizza类名')
            }else if
            (this.pizzas.about==''){
                alert('请输入pizza描述')
            }else if
            (this.pizzas.pizza[0].size==''){
                alert('请选择pizza尺寸')
            }else if
            (this.pizzas.pizza[0].price==''){
                alert('请输入pizza价格')
            }else if
            (this.pizzas.pizza[1].size==''){
                alert('请输入pizza尺寸')
            }else if
            (this.pizzas.pizza[1].price==''){
                alert('请输入pizza价格')
            }else{
              var formData={
            name:this.pizzas.name,
            about:this.pizzas.description,
            pizza:[
             {size:this.pizzas.pizza[0].size,price:this.pizzas.pizza[0].price},
             {size:this.pizzas.pizza[1].size,price:this.pizzas.pizza[1].price}   
            ]
          } 
                axios.post('./ww-pizzas.json',formData).then((res)=>{
                    this.pizzas={name:'', about:'',pizza:[{size:'', price:''},{size:'',price:''}]}
                    alert('添加成功')
                    formData.id=res.data.name
                    /* this.$router.push('./menu') */
                    this.$store.commit('pushMenu1010',formData)
                })
            }
        }
    }
};
</script>

<style  scoped>
</style>