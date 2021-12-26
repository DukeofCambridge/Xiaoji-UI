<template>
  <div class="dashboard-editor-container">
    <Header></Header>
    <video controls autoplay style="height: 80%; width: 80%; margin:10px 10%"  :src="uri"/>
  </div>
</template>

<script>
import Header from "@/components/Common/Header";
export default {
  name: "Screen",
  components: {Header},
  data(){
    return{
      uri: ''
    }
  },
  created() {
    console.log("电影资源路径为: ", this.$store.state.uri)
    this.uri = this.$store.state.uri
  }
}
</script>

<style scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #222222;
  position: relative;
  height: 100%;
  margin: -20px 0 0 -10px;
}
</style>
