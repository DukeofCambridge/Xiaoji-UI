<template>
  <div class="dashboard-editor-container">
    <Header></Header>
    <el-container>
      <el-card style="margin: 45px 16%;width: 25%;opacity: 0.9;">
        <div slot="header" class="clearfix">
          <img src="../assets/img/air.webp" style="zoom: 20%" />
          <span style="margin: 20px 0"><strong>温度</strong></span>
        </div>
        <el-slider show-input :max="40" :min="5"></el-slider>
      </el-card>
      <el-card style="margin: 45px;width: 25%;opacity: 0.9">
        <div slot="header" class="clearfix">
          <img src="../assets/img/air.webp" style="zoom: 20%" />
          <span style="margin: 20px 0"><strong>湿度</strong></span>
        </div>
        <el-slider show-input :max="40" :min="5"></el-slider>
      </el-card>
      <el-card style="margin: 45px;width: 25%;opacity: 0.9;">
        <div slot="header" class="clearfix">
          <img src="../assets/img/lights.png" style="zoom: 20%" />
          <span style="margin: 20px 0"><strong>灯光</strong></span>
        </div>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-card>

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
      value: true
    }
  }
}
</script>

<style scoped>
.dashboard-editor-container {
  background-image: url("../assets/img/home.webp");
  background-size: 100% 100%;
  padding: 32px;
  background-color: #f6f6f6;
  position: relative;
  margin: -20px 0 0 -10px;
  min-height: 100%;
}
</style>
