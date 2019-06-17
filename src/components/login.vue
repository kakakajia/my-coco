<template>
  <div class="container text-center">
    <div style="height:260px;"></div>
    <form class="form-signin">
      
      <h1 class="h5 mb-3 font-weight-normal">请填写登录信息</h1>
      <input
        type="text"
        id="textEmail"
        class="form-control"
        placeholder="请输入用户名"
        required
        autofocus
        v-model='username'
      >
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="请输入密码"
        required
        v-model='password'
      >
      <div class="checkbox mb-3">
        <!-- <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label> -->
      </div>
      <button class="btn btn-lg btn-danger btn-block" v-on:click.prevent='onlogin'>登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username:'',
      password:''
    };
  },
  methods:{
    onlogin(){
      if(this.username==''||this.password==''){
        alert('请将选项填写完整')
      }else{
        let mydata={
          password:this.password,
          username:this.username
         
        }
        console.log(mydata);
        
        axios.get('./ww-user.json').then((res)=>{

          let strmydata=JSON.stringify(mydata)
          let struserdata=JSON.stringify(res.data)
          console.log(strmydata)
          console.log(struserdata)
          
          if( struserdata.indexOf(strmydata)==-1){
            alert('用户名或密码错误')
          }else{
            alert('登录成功')
            this.$router.push('./')
          }
        })
      }
    } 
  }
};
</script>

<style scoped>
  .container{
    width:600px;
  }
/*   form{
    margin-top:105px;
  } */
  input{
    margin:12px 0
  }
</style>