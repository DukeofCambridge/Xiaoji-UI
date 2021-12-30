<template>
  <div>
    <el-row style="height: 560px;">
      <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
<!--      <view-switch class="switch"></view-switch>-->
      <el-tooltip effect="dark" placement="right" v-for="item in films" :key="item.id" >
<!--                  v-for="item in films.slice((currentPage-1)*pagesize,currentPage*pagesize)"-->


        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>类型: {{item.type}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.desc}}</p>

        <el-card @click.native="enter(item.uri)" style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px;" class="book" bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
<!--          <div class="author">{{item.desc}}</div>-->
        </el-card>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
import SearchBar from "@/components/Cinema/SearchBar";
import ViewSwitch from "@/components/Cinema/ViewSwitch";

export default {
  name: "Films",
  components: {SearchBar},
  data () {
    return {
      films: [],
      currentPage: 1,
      pagesize: 18
    }
  },
  mounted: function () {
    this.load()
  },
  methods: {
    load() {
      let _this = this
      this.$axios.get('/movie/movie/all').then(resp => {
        if (resp && resp.data.code === 200) {
          console.log(resp.data.object)
          _this.films = resp.data.object
        }
      })
    },
    enter(uri){
      console.log("点击啦")
      this.$store.commit('enterScreen', uri)
      this.$router.push('/screen')
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    },
    searchResult() {
      let _this = this
      this.$axios
        .get('/movie/movie/search?keywords=' + this.$refs.searchBar.keywords, {}).then(resp => {
        if (resp && resp.data.code === 200) {
          _this.films = resp.data.object
        }
      })
    }
  }
}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

.el-icon-delete {
  cursor: pointer;
  float: right;
}

.switch {
  display: flex;
  position: absolute;
  left: 780px;
  top: 25px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}
</style>
