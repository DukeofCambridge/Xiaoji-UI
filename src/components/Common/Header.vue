<template>
  <el-card class="admin-header">
    <a href="/home">
      <img src="../../assets/img/小济智家.png" alt="小济智家" width="80px" style="float: left;margin-top: -9px; zoom: 80%">
    </a>
    <span style="font-size: 32px;font-weight: bold;position:absolute;left: 10%">小济智家</span>
    <i class="el-icon-switch-button" v-on:click="logout" style="font-size: 40px;float: right"></i>
  </el-card>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      let _this = this
      this.$confirm("确定退出登录吗？").then(()=>{
        // this.$axios.get('/logout').then(resp => {
        //   if (resp && resp.data.code === 200) {
        //     _this.$store.commit('logout')
        //     _this.$router.push('/login')
        //   }
        // }).catch(failResponse => {})
        _this.$store.commit('logout')
        _this.$router.push('/login')
      })

    }
  }
}
</script>

<style scoped>
.admin-header {
  height: 80px;
  opacity: 0.85;
  line-height: 40px;
  min-width: 900px;
}
.el-icon-switch-button {
  cursor: pointer;
  outline:0;
}
</style>
