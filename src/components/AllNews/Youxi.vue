<template>
  <div>
    <Header>
    </Header>
    <div align="center">
      <div v-for="item in list" :key="item">
        <el-card class="box-card" style="width:720px;background-color: #deeef6">
          <img :src="item['thumbnail_pic_s']" alt="" class="card-img-top" style="width:600px">
          <div class="card-body">
            <h5 class="card-title"> {{ item["title"] }}</h5>
            <a :href="item['url']" >  <el-button type="primary" plain>详细信息</el-button>
            </a>
          </div>
        </el-card>
        <hr>
      </div>
    </div>
  </div>

</template>
<script>
import Header from "@/components/Common/Header";


export default {
  name: "Tiyu",
  components: {Header},
  data() {
    return {
      list: []
    }
  },
  methods: {
    GetNews: function () {
      var url = "http://127.0.0.1:8082/requestUrl/type/youxi";
      this.$axios.get(url).then(response => {
        console.log(response.data.result.data);
        this.list = response.data.result.data;
      })
    },
  },
  mounted: function () {
    this.GetNews();
  }
}
</script>

<style scoped>
</style>
