<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
const echarts = require('echarts');
import resize from './mixins/resize'
require('echarts/theme/macarons') // echarts theme

const animationDuration = 3000

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
      before: [],
      last: [],
      now: [],
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '薪酬', max: 10000 },
            { name: '存款', max: 20000 },
            { name: '社会保障', max: 20000 },
            { name: '不动产', max: 20000 },
            { name: '投资', max: 20000 },
            { name: '其他', max: 20000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['前年', '去年', '今年']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '前年'
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: '去年'
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: '今年'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
