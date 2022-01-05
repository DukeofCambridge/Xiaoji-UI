<template>
  <div class="dashboard-editor-container">
    <Header></Header>
    <el-container>
      <el-aside style="width: 200px;margin-top: 20px">
        <switch></switch>
        <Menu @indexSelect="listByCategory" ref="sideMenu"></Menu>
      </el-aside>
      <el-main>
        <films class="books-area" ref="booksArea"></films>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Cinema/Menu";
import Films from "@/components/Cinema/Films";
import Header from "@/components/Common/Header";

export default {
  name: "Cinema",
  components: {Header, Films, Menu},
  methods: {
    listByCategory () {
      let _this = this
      let type = this.$refs.sideMenu.type
      console.log(type)
      let url = '/movie/movie/type/' + type
      this.$axios.get(url).then(resp => {
        if (resp && resp.data.code === 200) {
          _this.$refs.booksArea.films = resp.data.object
          // _this.$refs.booksArea.currentPage = 1
        }
      })
    },
  }
}
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
.dashboard-editor-container {
  background-image: url("../../assets/img/cinema.jpg");
  background-size: 100% 100%;
  padding: 32px;
  background-color: #f6f6f6;
  position: relative;
  margin: -20px 0 0 -10px;
}
</style>
