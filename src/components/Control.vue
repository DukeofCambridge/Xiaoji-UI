<template>
  <div class="dashboard-editor-container">
    <Header></Header>
    <el-container>
      <el-aside>
        <el-card class="card1">
          <img class="image" src="../assets/img/air.webp"/>
          <span><strong>温度</strong></span>
          <el-slider v-model="temperature" show-input :max="40" :min="5"></el-slider>
        </el-card>
        <!--      <el-card style="margin: 45px;width: 25%;opacity: 0.9">-->
        <!--        <div slot="header" class="clearfix">-->
        <!--          <img src="../assets/img/air.webp" style="zoom: 20%" />-->
        <!--          <span style="margin: 20px 0"><strong>湿度</strong></span>-->
        <!--        </div>-->
        <!--        <el-slider show-input :max="40" :min="5"></el-slider>-->
        <!--      </el-card>-->
        <el-card class="card2">
          <div>
            <img class="image" src="../assets/img/lights.png"/>
            <span><strong>灯光</strong></span>
            <el-switch
              @change="changeWord"
              style="float:right;"
              v-model="lightSwitch"
              active-color="#13ce66"
              inactive-color="#ff4949"></el-switch>
          </div>
          <div>
            <el-slider class="slider" v-model="lightIntensity" show-input :max="40" :min="5"></el-slider>
            <span class="demonstration"><strong>光强</strong></span>
          </div>
        </el-card>
      </el-aside>
      <el-main>
          <ul class="screen">
            <li class="l1">
              <span>当前房间温度为：{{temperature}}</span>
            </li>
            <li class="l2">
              <span>当前灯光状态为{{word}}</span>
            </li>
            <li class="l3">
              <span>光强为:{{this.lightIntensity}}</span>
            </li>
          </ul>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Common/Header";
export default {
  name: "Control",
  components: {Header},
  data(){
    return{
      temperature: 10,
      lightSwitch: false,
      lightIntensity: 0,
      word:'灭'
    }
  },
  methods: {
    changeWord(callback){
      if(callback){
        this.word='亮';
      }
      else {
        this.word='灭';
      }
  }
  }
}
</script>

<style scoped>
.dashboard-editor-container {
    background: url("../assets/img/home.webp")no-repeat;
    /*background-size: 100% 100%;*/
  /*padding: 32px;*/
  /*position: relative;*/
  /*margin: -20px 0 0 -10px;*/
  /*  min-height: 100%;*/
  /*width: 100%;*/
  /*height:100%;*/
  height:100vh;
  width:100%;
  background-size:100% 100%;
  background-position:100% 100%;
  overflow: hidden;
}
.el-container{
  width: 100%;
  /*height: 100%;*/
}
.el-aside{
  justify-content: flex-start;
  align-content: flex-end;
  flex-wrap: wrap;
  :direction: vertical;
  width:210px;
  /*background-color: #4a54bc;*/
}
.el-main{
  /*background-color: #bfa;*/
  display: flex;
  justify-content: center;
  align-content: center;
}
.screen{
  width:700px;
  height: 500px;
    /*background-color: #3377aa;*/
  align-self: center;
  list-style: none;
  font-size: 30px;
  font-family: arial;
  font-weight: lighter;
  text-align: center;
}
.l1{
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #bfa;
}
.l2{
  margin-top: 100px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: salmon;
}
.l3{
  margin-top: 100px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: palegoldenrod;
}
.card1{
  display: flex;
  opacity: 0.9;
  height: 350px;
  margin-top: 60px;
  margin-left: 50px;
}
.card2{
  display: flex;
  opacity: 0.9;
  height: 350px;
  margin-top: 20px;
  margin-left: 50px;
}

.image{
  width: 200px;
  height: 200px;
  display: block;
  margin-bottom: 20px;
}

.slider{
  margin-top: 20px;
}
</style>
