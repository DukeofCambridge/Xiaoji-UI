<template>
<div>
  <Header></Header>
  <div>
    <div>
      {{list[0]["title"]}}
    </div>
    <div>
      <img :src="list[0]['thumbnail_pic_s']" alt="">
    </div>
    <div>
      {{list[1]["title"]}}
    </div>
    <div>
      <img :src="list[1]['thumbnail_pic_s']" alt="">
    </div>
    <div>
      {{list[2]["title"]}}
    </div>
    <div>
      <img :src="list[2]['thumbnail_pic_s']" alt="">
    </div>
    <div>
      {{list[3]["title"]}}
    </div>
    <div>
      <img :src="list[3]['thumbnail_pic_s']" alt="">
    </div>
    <div>
      {{list[4]["title"]}}
    </div>
    <div>
      <img :src="list[4]['thumbnail_pic_s']" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Common/Header";
export default {
  data(){
    return{
      list:[]
    }
  },
  name: "Keji",
  components: {Header},
  methods:{
    GetNews:function(){
      // var url = "http://127.0.0.1:8082/requestUrl/type/keji";
      this.$axios.get("/news/type?type=keji").then(response => {
        console.log(response.data.result.data);
        this.list=response.data.result.data;
      })
    },
  },
  mounted:function () {
    this.GetNews();
  }
}
</script>

<style scoped>

</style>
