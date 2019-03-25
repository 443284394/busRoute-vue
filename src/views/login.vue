<style lang="less">
  @import '../plugins/laddaUI/0.9.7/css/ladda.min.less';
  @import './login.less';
  #form{
    margin-top:100px;
  }
  #login{
    background:#3D4E80;
  }
</style>
<template>
  <div class="login-container">
    <div class="pic-change">
      <div class="bg bg1"></div>
    </div>

    <div class="wrapper">
      <div id="loginForm" class="right">
        <div class="logo-beik">
        </div>
        <label class="loginTitle">公交路线系统登录</label>
        <form  id="form" >
          <p class="uname-wrap"><input v-model="userName" id="uname" type="text" class="uname" name="username" placeholder="请输入用户名" autocomplete="off" @focus="nameFocus"></p>
          <p class="upwd-wrap"><input v-model="userPwd" id="upass" type="text" class="upwd" name="pwd" placeholder="请输入密码" autocomplete="off" @focus="pwdFocus"></p>
          <div id="error_box" style="color:red;margin-left:80px;margin-top:10px;"></div>
          <div id="drag" class="drag"></div>
          <Button id="reset" type="button" class="ladda-button dv-3 resetBtn" >重置</Button>
          <Button type="button" class="ladda-button dv-3 loginBtn" data-color="mint" data-style="expand-right" @click="login()">登 录</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/plugins/laddaUI/0.9.7/js/spin.min.js'
  import '@/plugins/laddaUI/0.9.7/js/ladda.min.js'
  import {login} from "../api/api";

  export default {
        name: 'login',
        data(){
            return {
              username:"",
              userPwd:"",
            }
        },
        methods:{
            login(){
                let params={
                  userName:this.userName,
                  pwd:this.userPwd
                };
                login(params).then((res)=>{
                  if(res.data.status==="complete"){
                    this.$router.push({
                      path: '/main/index',
                      query: {
                        // templa teId: row.id,
                      }
                    });
                  }
                })
            }
        },
    }
</script>
