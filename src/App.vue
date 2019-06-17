<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
   <!--  <img src="./assets/logo.png"> -->
   <router-view name='ems' class="container"></router-view>
   <div style='height:100px;'></div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return{
      msg:'hello ww-pizza!'
    }
  },
  components:{
    Header
  }
}
</script>

<style>
#app {
position: relative;
/* padding-top:77px; */
width:100%;
min-height:805px;
background: url(../static/image/timg5.jpg) repeat-y;
z-index:0 ;
}
</style>
