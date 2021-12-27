<template>
  <body>
    <div style="height:1px" ></div>
    <div id="login-box">
      <h1 class="AIsing">小济智家</h1>
      <div class="form">
        <div class="item">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <input type="text" id="username" placeholder="Username">
        </div>
        <div class="item">
          <i class="fa fa-key" aria-hidden="true"></i>
          <input type="password" id="password" placeholder="Password">
        </div>
      </div>
      <button id="login" class="login" @click="login">密 码 解 锁</button>
      <br>
      <button id="tofaceLogin" class="faceLogin">人 脸 解 锁</button>
      <br>
      <button id="toregister" class="register"> Register</button>
    </div>
  </body>
</template>

<script>
export default {
  name: "Login",

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
  height: 300px;
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
  /* margin-top: 15px; */
  float: right;
  width: 100px;
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
