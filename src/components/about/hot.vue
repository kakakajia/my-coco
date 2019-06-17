<template>
  <div class='container' style='padding:0'>
      <ul class='row' style='padding:0' >
          <li class='card mr-2' style="flex:1; border:none" v-for='(arr,index) in array' :key="index">
            <img  class="card-img-top" :src="arr.src" alt="Card image cap">
            <p style='margin:-193px 0 0 67px;color:red;font:bold 30px/30px "微软雅黑"'>{{arr.text}}<br>&nbsp;{{arr.text1}}</p>
          </li>
        
      </ul>


  </div>
</template>

<script>
export default {
  data() {
    return {
     array:[
       {
       
       src:'../../../static/image/7.jpg'
     },
     {
      
       src:'../../../static/image/8.jpg'
     },
     {
       
       src:'../../../static/image/9.jpg'
     },
     ]
    };
  }
};
</script>

<style scoped>
</style>