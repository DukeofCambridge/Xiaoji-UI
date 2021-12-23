<template>
<div>
  <el-container class="new">
    <el-header style="height: 68px;  opacity: 0.85;">
      <Header></Header>
    </el-header>
    <el-main class="news">
      <div class="aa">
        <div class="bu" @click="jump"></div>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
 import Header from "@/components/Common/Header";
  export default {
    name: "News",
    components: {Header},
    methods:{
      jump(){
        this.$router.push('/');
      }
    },
  }

</script>

<style scoped>
.new{
  width: 100%;
  height: 100vh;
}
.aa{
  width: 100%;
  height: 100%;
  margin-top: 0px;
  background: url(../assets/img/readingroom.png) no-repeat;
  background-size:100% 100%;
  background-position:100% 100%;
  overflow: hidden;
}
.news{
  margin:0;
  padding: 0;
  width: 100%;
  height: 100%;
 /* background: url(../assets/img/readingroom.png) no-repeat center center fixed;*/
  /*height:1000px;*/
 /* background-size:100% 90%;*/
  /*overflow: hidden;*/
}
.bu{
  margin-top:75px;
  margin-left: 468px;
  /*background-color: #42b983;*/
  width:780px;
  height:400px;
  /*transform: rotateX(-50deg);*/
  /*perspective:150px;*/
}
</style>
