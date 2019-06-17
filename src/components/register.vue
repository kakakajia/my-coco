<template>
  <div class='container text-center'>
     <div style="height:260px;"></div>
    <form class="form-signin">
      
      <h5 class="h5 mb-3 font-weight-normal ">请填写注册信息</h5>
      <label for="inputtext" class="sr-only">Email address</label>
      <input
        type="text"
        id="inputtext"
        class="form-control"
        placeholder="请输入用户名"
        required
        autofocus
        v-model='username'
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="密码"
        required
        v-model='password'
      >
      <label for="inputPassword2" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword2"
        class="form-control"
        placeholder="确认密码"
        required
        v-model='password2'
      >
      <div class="checkbox mb-3">
        <!-- <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label> -->
      </div>
      <button class="btn btn-lg btn-danger btn-block" v-on:click.prevent='onsubmit'>Sign in</button>
      
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: "注册页面",
      username:'',
      password:'',
      password2:''
    };
  },
  methods:{
    onsubmit(){
      if(this.username==''||this.password==''||this.password2==''){
        alert('请将选项填写完整')
      }else if(this.password!==this.password2){
        alert('两次密码不一致，请重新输入')
      }else{
        let mydata={
          username:this.username,
          password:this.password
        };
        axios.get('./ww-user.json').then(
          res=>{
            let result=[];
            console.log(res.data);
            
            for(let key in res.data){
              result.push(res.data[key])
            }
            console.log(result);
           let havename=
           result.filter((item)=>{
             return item.username===this.username
           })
           console.log(result);
           
           if(havename.length>=1){
             alert('用户名已经存在，请重新输入')
           }
           else{
             axios.post('./ww-user.json',mydata).then((res)=>{
               alert('注册成功，请登录')
               this.$router.push('./login')
             })
           }
          }
        )
      }
    }
  }
};
</script>

<style scoped>
.container{
    width:600px;
  }
 /*  form{
    margin-top:105px;
  } */
  input{
    margin:12px 0
  }
  
  
</style>