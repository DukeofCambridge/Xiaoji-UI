<template>
  <body>
  <div>
    <Header></Header>
    <div class="area2">
      <div class="area1">
        <el-button class="btn-outline-dark" @click="$router.push('/yule')">
          娱乐
        </el-button>
        <el-button class="btn-outline-info" @click="$router.push('/tiyu')">
          体育
        </el-button>
      </div>
      <div class="area1">
        <el-button class="btn-outline-primary" @click="$router.push('/youxi')">
          游戏
        </el-button>
        <el-button class="btn-outline-success" @click="$router.push('/keji')">
          科技
        </el-button>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import Header from "@/components/Common/Header";

export default {
  name: "News",
  components: {Header}
}
</script>

<style scoped>
body {
  background-image: url('../assets/img/1.jpeg');
}
.el-button {
  height: 100px;
  width: 200px;
  font-family: "Microsoft YaHei";
  font-weight: 900;
  font-size: x-large;
  border-radius: 10%;
  margin-left: 50px;
}
.area1 {
  margin-bottom: 20px;
}

.area2 {
  margin-top: 200px;
  margin-left: 550px;
}
</style>
