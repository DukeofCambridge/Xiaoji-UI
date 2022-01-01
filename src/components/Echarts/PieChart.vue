<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
const echarts = require('echarts');
import resize from './mixins/resize'
require('echarts/theme/macarons') // echarts theme

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null,
      food: 0,
      clothes: 0,
      medical: 0,
      entertainment: 0,
      dotc: 0,
      dailyNecessities: 0,
      education: 0,
    }
  },
  mounted () {
    this.load()
    // this.$nextTick(() => {
    //   this.initChart()
    // })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    load(){
      this.$axios.get('/finance/finance/expense/'+this.$store.state.user).then(resp => {
        if (resp && resp.data.code === 200) {
          console.log(resp.data.object)
          this.food = parseInt(resp.data.object.food)
          this.clothes = parseInt(resp.data.object.clothes)
          this.dotc = parseInt(resp.data.object.dotc)
          this.dailyNecessities = parseInt(resp.data.object.dailyNecessities)
          this.medical = parseInt(resp.data.object.medical)
          this.education = parseInt(resp.data.object.education)
          this.entertainment = parseInt(resp.data.object.entertainment)
        }
        this.$nextTick(() => {
          this.initChart()
        })
      })
    },
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['食品', '教育', '娱乐', '通勤', '医药保健','生活必需品','服装']
        },
        series: [
          {
            name: '家庭支出一览',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: this.food, name: '食品' },
              { value: this.education, name: '教育' },
              { value: this.entertainment, name: '娱乐' },
              { value: this.dotc, name: '通勤' },
              { value: this.medical, name: '医药保健' },
              { value: this.dailyNecessities, name: '生活必需品' },
              { value: this.clothes, name: '服装' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
