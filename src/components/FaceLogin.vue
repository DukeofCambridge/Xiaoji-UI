<template>
  <body>
  <div style="height: 1px"></div>
  <div id="login-box">
    <h1 class="AIsing">小济智家</h1>
<!--    <button id="camera" class="camera" @click="openCamera">打开摄像头</button>-->
<!--    <br>-->
    <button id="faceLogin" class="faceLogin" @click="faceLogin">人 脸 识 别</button>
    <br>

    <div class="media">
      <video id="video" width="320" height="240" preload autoplay loop muted></video>
      <canvas id="canvas" width="320" height="240"></canvas>
    </div>
  </div>
  </body>
</template>

<script>
require('tracking/build/tracking-min.js')
require('tracking/build/data/face-min.js')
// require('tracking/build/dat.gui.min.js')
// require('tracking/examples/assets/stats.min.js')
export default {
  name: "FaceLogin",
  mounted() {
    this.openCamera()
  },
  methods:{
    openCamera(){
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext('2d');

      let tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      tracking.track(video, tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x - 7, rect.y - 20, rect.width + 10, rect.height + 25);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y - 10);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y);
        });
      });

    },
    faceLogin(){
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let userContext = canvas.getContext("2d");
      userContext.drawImage(video, 0, 0, canvas.width, canvas.height);
      // let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      //拿到bash64格式的照片信息: 去除标签 --- data:image/png;base64,
      let faceBase = userImgSrc.split(",")[1];
      // alert(faceBase);
      // console.log(faceBase)
      this.$axios
        .post('http://localhost:9410/user/facelogin',{
          faceBase64: faceBase
        })
        .then(resp => {
          console.log(resp.data.object)
          // this.$store.commit('login', resp.data.object.id)
          this.$router.replace('/home')
        })
        .catch(failResponse => {
        })
    }
  },

}
</script>

<style scoped>
body {
  background-image: url("../assets/img/bg2.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#login-box {
  width: 30%;
  height: 450px;
  margin: 8% auto 0;
  border-radius: 40px;
  text-align: center;
  background: #00000060;
  padding: 20px 50px;
}

#login-box h1 {
  color: #fff;
}

#login-box .form .item input {
  margin-top: 15px;
}

#login-box .form i {
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
  background: #ffffff00;
  color: #fff;
}

.camera,
.faceLogin {
  margin-top: 10px;
  margin-bottom: 40px;
  /* vertical-align: auto; */
  width: 166px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  /* border: 0; */
  border-radius: 15px;
}


/* .register{
    margin-top: 15px;
    float: right;
    width: 100px;
    height: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    background:linear-gradient(to right,#684e4e 12%,#3b3a4ee1 40%);
    border: 0;
    border-radius: 15px;
} */

.AIsing {
  font-style: italic;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
}

video,
canvas {
  margin-left: -155px;
  margin-top: 14px;
  position: absolute;
  /* border: 1px solid red; */
}
</style>
