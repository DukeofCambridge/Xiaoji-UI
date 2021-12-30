<template>
  <div class="box">
    <Header></Header>
    <div id="Aplayer">
      <aPlayer :songInfo="songInfo"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Common/Header";
import aPlayer from "@/components/Common/aPlayer";
export default {
  name: "Music",
  data() {
    return {
      songInfo: {
        // showLrc: true,
        title: 'lemon', //歌曲名称
        artist: '米津玄师', //演唱者
        // lrc: require("/src/assets/mp3/Lemon.lrc"), //LRC 歌词或者歌词文件的 URL
        pic: require("../assets/img/lemon.jpg"), //封面图片 URL
        src: 'https://music.163.com/song/media/outer/url?id=1466598056.mp3' //音频文件的 URL
      }
    }
  },
  components: {Header, aPlayer}
}
</script>
<style scoped>
.box{
  width: 100%;
  height: 100vh;
  background-size:100% 100%;
  background: url("../assets/img/musiccdd.jpg") no-repeat center center;
  overflow: hidden;
  background-size:cover;
}
</style>
