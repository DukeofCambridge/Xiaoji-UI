<template>
  <div class="guide">
    <div class="title">今日天气</div>
    <div class="guides">
<!--    <image></image>-->
      <div class='jinritianqi'>
        <div>
          <div class="jrwendu">当前温度:</div>
          <div class="jrwendu">{{realtime.temperature}}℃</div>
      </div>
        <div>
          <div class="jrtianqi">今日天气:</div>
          <div class="jrtianqi">{{realtime.info}}</div>
    </div>
        <div>
          <div class="jrshidu">当前湿度:</div>
          <div class="jrshidu">{{realtime.humidity}}</div>
        </div>
        <div>
          <div class="jrzhiliang">今日空气质量:</div>
          <div class="jrzhiliang">{{realtime.aqi}}</div>
        </div>
        <div>
          <div class="jrfengsu">当前风向:</div>
          <div class="jrfengsu">{{realtime.direct}}</div>
        </div>
        <div>
          <div class="jrfengli">当前风力:</div>
          <div class="jrfengli">{{realtime.power}}</div>
        </div>
      </div>

    </div>
<!--    <div class="title">生活气象指数</div>-->
<!--    <div class="guides">-->
<!--      </div>-->
  </div>
</template>

<script>
export default {
  name: "WeatherToday",
  data(){
    return{
      realtime: {},
      city:"上海"
    }
  },
  methods:{
    GetWeatherData(){
      let url = "/weather/weather/get";
      this.$axios.get(url).then(response => {
        // console.log(response.data.result)
        // console.log(response.data.result.realtime)
        // console.log(response.data.result.future)
        this.realtime = response.data.result.realtime;
        for(let i=0;i<5;i++)
        {
          let Length = response.data.result.future[i].date.length;
          response.data.result.future[i].date = response.data.result.future[i].date.substring(0,Length-19);
        }
        this.$store.commit('setWeather',response.data.result)
        console.log(this.realtime);
      })
    }
  },
  mounted(){
    this.GetWeatherData();
    console.log(this.$store.state.wea);
    // Vue.set(this.realtime,'select',this.$store.state.wea.realtime)
    this.city=this.$store.state.wea.city
  }

}
</script>

<style scoped>
.guide{
  z-index: 2;
  /*margin-top: 40px;*/
}
.guide .title{
  border-bottom: 1px solid darkslategrey;
  background: azure;
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: cornflowerblue;
}
.guide .guides {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding-top: 10px;
  background: azure;
  border-bottom: 5px solid floralwhite;
  /*margin-bottom: 20px;*/
}
.jinritianqi{
  z-index: 2;
  display: flex;
  margin-left: 2px;
  align-items: center;
  margin-top: 2px;
  /*margin-bottom: 40px;*/
  font-size: 20px;
  white-space: nowrap;
  color: cornflowerblue;
}
.jrwendu{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
.jrtianqi{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
.jrshidu{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
.jrzhiliang{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
.jrfengsu{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
.jrfengli{
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: cornflowerblue;
}
</style>
