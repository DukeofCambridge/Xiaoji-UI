<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-container>
      <el-main>
        <el-table :data="future" style="background-color: azure">
          <el-table-column prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="weather" label="天气" width="130">
          </el-table-column>
          <el-table-column prop="temperature" label="温度" width="120">
          </el-table-column>
          <el-table-column prop="direct" label="风向">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "WeatherFuture",
  data(){
    return{
      future: []
    }
  },
  mounted:function (){
    console.log(this.$store.state.wea);
    this.future = this.$store.state.wea.future
  }
}
</script>

<style scoped>

</style>
