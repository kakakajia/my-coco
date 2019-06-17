<template>
    <div class='headposi'>
      <img width='200' src="../assets/图片1.png" alt="" >
        
      <div class="er header bg">
        <router-link class="padd padd1" to="/">
          <svg style='float:left' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
          </svg>
          Pizza点餐
        </router-link>
        <router-link class="padd" active-class='active' exact to="/">主页</router-link>
        <router-link class="padd" active-class='active' to="/menu">菜单</router-link>
        <router-link class="padd" active-class='active' to="/admin">管理</router-link>
        <router-link class="padd" active-class='active' to="/rest">餐厅查询</router-link>
        <router-link class="padd" active-class='active' to="/about">关于我们</router-link>
        <router-link class="padd" active-class='active' to="/login">登录</router-link>
        <router-link class="padd" active-class='active' to="/register">注册</router-link>
        
      </div>
    
    </div>
</template>

<script>
    export default {
        data(){
          return{
            flag:1
          }
        }
    }
</script>

<style  scoped>
.headposi{
position: absolute;
width:1583px;
height:60px;
}
  img{
    position: absolute;
    left:695px;
    top:0px;
    animation:change 5s linear infinite;
    z-index:-1;
  }
  @keyframes change{
    0%{transform:rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  .bg{
    background-color: rgba(255, 60, 0, 0.8);
    height:60px;
    line-height: 60px;
  }
  svg{
    display: inline-block;
    margin: 17px 0 0 0;
    vertical-align: middle
  }
  .er{
    width:1110px;
    margin:0 auto;
  }
  .padd{
    display: block;
    float:left;
    width:138.75px;
    text-align: center;
    color:#fff;
  }
  a:hover{
    text-decoration: none;
  }
  .padd1{
    text-align: left;
    padding-left:30px;
  }
  .active{
    background-color: rgba(200, 35, 51, 0.507)
  }
  .header{
   /*  display:block; */
   /*  position: relative; */
    margin:0 auto;
   margin-top:77px;
   
 
    width:1110px;
    /* z-index:3 */
  }
</style>