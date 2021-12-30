<template>
  <div class="dashboard-editor-container">
    <Header></Header>
    <el-container>

        <el-card class="card1">
          <img class="image" src="../assets/img/air.webp"/>
          <span><strong>温度</strong></span>
          <el-slider @change="changeTemp" v-model="temperature" show-input :max="40" :min="5"></el-slider>
        </el-card>
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
            <el-slider class="slider" @change="changeLightIntensity" v-model="lightIntensity" show-input :max="700" :min="300"></el-slider>
            <span class="demonstration"><strong>光强</strong></span>
          </div>
        </el-card>

        <ul class="screen">
          <li class="l1">
            <span>当前房间温度为：{{temperature}}</span>
          </li>
          <li class="l2">
            <span>当前灯光状态为{{word}}</span>
          </li>
          <li class="l3">
            <span>光强为:{{lightIntensity}}</span>
          </li>
        </ul>

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
      lightSwitch: true,
      lightIntensity: 0,
      word:'亮'
    }
  },
  methods: {
    changeTemp(callback){
      console.log(callback);
      const self = this;
      this.$axios.put('/weather/temperature/1?temperature='+callback)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    changeWord(callback) {
      if (callback) {
        this.word = '亮';
      } else {
        this.word = '灭';
      }
    },
    changeLightIntensity(callback){
      console.log(callback)
      this.$axios.put('/weather/cd/1?cd='+callback)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    const self = this;
    this.$axios.get('/weather/autochange', {
    })
      .then(function (response) {
        console.log(response.data[1]);
        self.lightIntensity = response.data[1];
        self.temperature = response.data[0];
        console.log(self.lightIntensity);
        console.log(self.temperature);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.dashboard-editor-container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/home.webp");
  overflow: hidden;
  /*background-size: 100% 100%;*/
  /*padding: 32px;*/
  background-color: #f6f6f6;
  /*position: relative;*/
  /*margin: -20px 0 0 -10px;*/
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
  margin-top: 80px;
  margin-left: 30px;
}
.card2{
  display: flex;
  opacity: 0.9;
  height: 350px;
  margin-top: 80px;
  margin-left: 50px;
  margin-right: 50px;
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
