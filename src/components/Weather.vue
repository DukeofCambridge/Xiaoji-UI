<template>
  <div>
    <Header></Header>
    <el-menu
      :default-active="currentPath"
      class="el-menu"
      router
      mode="horizontal"
      background-color="#87CEFA"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse">
      <el-menu-item index="/weather/today">
        <i class="el-icon-cloudy"></i>
        今日天气
      </el-menu-item>
      <el-menu-item index="/weather/future">
        <i class="el-icon-cloudy-and-sunny"></i>
        天气预报
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Common/Header";

export default {
  name: "Weather",
  components: {Header},
  data(){
    return{
      // realtime:{},
      // future:[],
      isCollapse: false
    }
  },
  methods:{

  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  mounted:function () {
  }
}
</script>


<style scoped>
.head{
  background-color: lightskyblue;
  overflow: hidden;
}
.page-title{
  border-bottom-color: white;
  border-bottom-style: double;
  font-family: "Microsoft YaHei UI";
  padding-left: 20px;
}
</style>
