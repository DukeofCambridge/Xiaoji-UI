<template>
  <div>
    <Header>
    </Header>
    <div align="center">
      <div v-for="item in list" :key="item">
        <div class="card" style="width: 36rem;">
          <img :src="item['thumbnail_pic_s']" alt="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"> {{ item["title"] }}</h5>
            <a :href="item['url']" class="btn btn-primary">详细信息</a>
          </div>
        </div>
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
      var url = "http://127.0.0.1:8082/requestUrl/type/yule";
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
