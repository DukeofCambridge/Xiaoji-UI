<template>
  <body>
    <div style="height:1px" ></div>
    <div id="login-box">
      <h1 class="AIsing">小济智家</h1>
      <div class="form">
        <div class="item">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <input type="text" id="username" placeholder="Username" v-model="form.username">
        </div>
        <div class="item">
          <i class="fa fa-key" aria-hidden="true"></i>
          <input type="password" id="password" placeholder="Password" v-model="form.password">
        </div>
      </div>
      <button id="login" class="login" @click="login">密 码 解 锁</button>
      <br>
      <button id="tofaceLogin" class="faceLogin" @click="$router.push('/face')">人 脸 解 锁</button>
      <br>
      <button id="toregister" class="register" @click="$router.push('/register')">账 户 注 册</button>
    </div>
  </body>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    login(){
      let _this=this
      if(!this.form.username){
        this.$message("请输入账号")
        return;
      }if(!this.form.password){
        this.$message("请输入口令，或使用人脸解锁")
        return;
      }
      this.$axios
        .post('/authface/user/login?name='+this.form.username+'&password='+this.form.password)
        .then(resp => {
          if (resp.data.code === 200) {
            // 前端也保存用户登录状态
            console.log(resp.data.object)
            _this.$store.commit('login', resp.data.object.id)
            // _this.$store.commit('setToken',resp.data.object)
            // console.log(_this.$store.state.username)
            // console.log(_this.$store.state.role)
            _this.$router.replace('/home')
          } else {
            this.$alert(resp.data.msg, '提示', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch(failResponse => {})
    },
  }

}
</script>

<style scoped>
body{
  background-image: url("../assets/img/bg2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
#login-box{
  width: 30%;
  height: 360px;
  margin: 10% auto 0;
  border-radius: 40px;
  text-align: center;
  background: #00000060;
  padding: 20px 50px;
}
#login-box h1{
  color: #fff;
}
#login-box .form .item input{
  margin-top: 15px;
}
#login-box .form i{
  font-size: 18px;
  color: #fff;
}
#login-box .form .item input {
  width: 180px;
  font-size: 18px;
  /* border: 0; */
  border-bottom: 2px solid#fff;
  padding: 5px 10px;
  border-radius: 15px;
  background:#ffffff00;
  color: #fff;
}

.login, .faceLogin {
  margin-top: 15px;
  vertical-align: auto;
  width: 166px;
  height: 30px;
  font-size: 20px;
  /* font-weight: 700; */
  color: #fff;
  background:linear-gradient(to right,rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  /* border: 0; */
  border-radius: 15px;
}

.register{
   margin-top: 45px;
  float: right;
  width: 166px;
  height: 30px;
  font-size: 20px;
  /* font-weight: 700; */
  color: #fff;
  background:linear-gradient(to right,#684e4e 12%,#3b3a4ee1 40%);
  /* border: 0; */
  border-radius: 15px;
}

.AIsing{
  font-style: italic;
  text-shadow:0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84,0px 0px 150px #fa5;
}
</style>
