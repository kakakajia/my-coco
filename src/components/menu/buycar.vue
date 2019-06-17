<template>
  <div class="ml-1">
    <p class="h3 text-center mt-4">菜单管理</p>
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">数量</th>
          <th scope="col">品种</th>
          <th scope="col">尺寸</th>
          <th scope="col">价格</th>
        </tr>
      </thead>
      <template v-if="addbooks.length>0">
        <tbody>
          <tr v-for="(addbook,index) in addbooks" :key="index">
            <th scope="row">
              <button class="btn-sm btn-warning btnn" v-on:click="less(addbook,index)">-</button>
              <input
                type="number"
                min="0"
                max="10"
                class="numberr text-center"
                :value="addbook.num"
              >
              <button
                class="btn-sm btn-warning btnn"
                v-on:click="addbook.num>=10?10:addbook.num++"
              >+</button>
            </th>
            <td>{{addbook.name}}</td>
            <td>{{addbook.size}}</td>
            <td>{{addbook.price}}</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right text-primary">商品总件数：{{allnum}}件</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right text-primary">商品总金额:{{allmoney}}元</td>
          </tr>
          <tr>
            <td colspan="4" class="text-center text-primary"><button class='btn btn-success' v-on:click='check'>点击结算</button></td>
          </tr>
        </tbody>
      </template>
      <template v-else>
        <tr>
          <td colspan="4" class="h4 text-white">空空如也的购物车</td>
        </tr>
        <tr style="border:none">
          <td colspan="4" class="h4 text-white" style="border:none;padding-top:0">像极了你的钱包~~~</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      
      /*   myorder:{} */
    };
  },
  props: ["addbooks"],
  methods: {
    less(addbook,index) {
      if (addbook.num == 1) {
        this.addbooks.splice(index, 1);
      } else {
        addbook.num--;
      }
    },
    check(){
      
    /*  this.myorder=[this.allnum,this.allmoney] */
      axios.post('./ww-myorder.json',this.addbooks)
    /*   axios.post('./ww-myorder2.json',this.myorder) */
    }
  },
  computed: {
    allnum() {
      return this.addbooks.reduce((prev, next) => {
        return prev + Number(next.num);
      }, 0);
    },
    allmoney() {
      return this.addbooks.reduce((prev, next) => {
        return prev + Number(next.price * next.num);
      }, 0);
    }
    
  },

};
</script>

<style  scoped>
.numberr {
  width: 50px;
}
.btnn {
  border: none;
  width: 28px;
}
td {
  line-height: 30px;
}
</style>