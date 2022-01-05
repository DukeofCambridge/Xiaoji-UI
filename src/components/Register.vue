<template>
  <body>
  <div style="height:1px" ></div>
  <div id="register-box">
    <h1 class="AIsing">小济智家</h1>
    <div class="form">
      <div class="item">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" id="username" placeholder="账号" v-model="form.username">
      </div>

      <div class="item">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <input type="text" id="nickname" placeholder="昵称" v-model="form.nickname">
      </div>
      <div class="item">
        <i class="fa fa-key" aria-hidden="true"></i>
        <input type="password" id="password" placeholder="口令" v-model="form.password">
      </div>

      <div class="item">
        <i class="fa fa-camera" aria-hidden="true"></i>
        <button class="reg-photo" id="camera" @click="openCamera">打开摄像头</button>
      </div>
      <button id="register" class="register" @click="register">确 认 注 册</button>
    </div>

  </div>

  <div class="media">
    <video id="video" preload autoplay></video>
    <canvas id="canvas"></canvas>
  </div>
  </body>
</template>

<script>
require('tracking/build/tracking-min.js')
require('tracking/build/data/face-min.js')
export default {
  name: "Register",
  data(){
    return{
      form:{
        username: '',
        password: '',
        nickname: '',
        video: null,
        canvas: null,
      }
    }
  },
  methods:{
    register(){
      let _this=this
      if(!this.form.username){
        this.$message("账号不能为空")
        return;
      }if(!this.form.password){
        this.$message("口令不能为空")
        return;
      }if(!this.form.nickname){
        this.$message("昵称不能为空")
        return;
      }

      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let userContext = canvas.getContext("2d");
      userContext.drawImage(video, 0, 0, canvas.width, canvas.height);
      // let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      //拿到bash64格式的照片信息: 去除标签 --- data:image/png;base64,
      let faceBase = userImgSrc.split(",")[1];
      // alert(faceBase);

      // 注册带人脸信息
      if(faceBase!==null){
        this.$axios
          .post('http://localhost:9410/user/register',{
            account: this.form.username,
            nickname: this.form.nickname,
            password: this.form.password,
            faceBase64: faceBase
          })
          .then(resp => {
            // console.log(faceBase)
              // 前端也保存用户登录状态
              console.log(resp)
              _this.$router.push('/login')
          })
          .catch(failResponse => {
          })
      }
      // 简易注册（不带人脸）
      else {
        this.$axios
          .post('/authface/user/sregister?account=' + this.form.username + '&nickname=' + this.form.nickname + '&password=' + this.form.password)
          .then(resp => {
            if (resp.data.code === 200) {
              // 前端也保存用户登录状态
              console.log(resp.data.object)
              _this.$router.push('/login')
            } else {
              this.$alert(resp.data.msg, '提示', {
                confirmButtonText: '确定'
              })
            }
          })
          .catch(failResponse => {
          })
      }

    },
    openCamera(){
        let video = document.getElementById("video");
        let canvas = document.getElementById("canvas");
        // alert("open camera!");
        let context = canvas.getContext('2d'); // 打开摄像头读取人脸头像
        let tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#video', tracker, {camera: true});

        tracker.on('track', function (event) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          event.data.forEach(function (rect) {
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x - 12, rect.y - 60, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width - 16, rect.y - 70);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width - 16, rect.y - 60);
          });
        });
    },
  }
}
</script>

<style scoped>
body {
  background-image: url('../assets/img/bg2.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#register-box {
  width: 30%;
  height: 350px;
  margin: 8% auto 0;
  border-radius: 40px;
  text-align: center;
  background: #00000060;
  padding: 20px 50px;
}

#register-box h1 {
  color: #fff;
}

#register-box .form .item input {
  margin-top: 15px;
}

#register-box .form i {
  font-size: 18px;
  color: #fff;
  vertical-align: auto;
}

#register-box .form .item input {
  width: 180px;
  font-size: 18px;
  border: 0;
  border-bottom: 2px solid#fff;
  padding: 5px 10px;
  background: #ffffff00;
  color: #fff;
  border-radius: 15px;
}

.register {
  margin-top: 20px;
  width: 180px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, #684e4e 12%, #3b3a4ee1 40%);
  /* border: 0; */
  border-radius: 15px;
}

.AIsing {
  font-style: italic;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
}

.reg-photo {
  margin-top: 20px;
  width: 150px;
  font-size: 20px;
  background: linear-gradient(to right, rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  padding: 0 10px;
  border-radius: 15px;
  color: #fff;
  height: 30px;
}

video,
canvas {
  /* padding-left: 686px; */
  margin-left: 680px;
  /* margin-bottom: 100px; */
  /* border: #c41d62 1px solid; */
  width: 320px;
  height: 240px;
  position: absolute;
}
</style>
