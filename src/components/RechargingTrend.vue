<template>
  <div class="home">
    <Title title="充电趋势" />
    <div class="bottom">
      <div style="width: 6.8375rem; height: 3.0625rem;" ref="rTrend_ref"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

import Title from '@/components/title/Title.vue'
export default {
  components: { Title },
  data() {
    return {
      myChart: null,
      time: [],
      power: []
    }
  },
  mounted () {
    this.initChart()
    this.getList()
    this.startInterval()
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.rTrend_ref)
      var option = {
        xAxis: {
          type: 'category',
          // name: '时',
          nameTextStyle: {
            // color: '#fff'
          },
          axisLabel: {
            // rotate: 45
          },
          axisLine: {
            show: false,
            lineStyle: {
              // color: '#fff'
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: true
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: val => {
            let tip = ''
              tip += val[0].axisValue + '<br />' + val[0].value + ' （kwh）'
            return tip
          },
          textStyle: {
            color: 'black',
            fontStyle: 'italic',
            fontSize: 14
          }

        },
        yAxis: {
          type: 'value',
          // name: '电量（kwh）',
          // scale: true,
          // minInterval: 1,
          nameTextStyle: {
            color: '#ddd'
          },
          axisLine: {
            show: false,
            lineStyle: {
              // color: '#fff'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
              width: 1,
              type: 'solid'
            }
          }
        },
        grid: {
          left: '4%',
          top: '10%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            barWidth: '40%',
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.1)'
            },
            label: {
              show: false,
              color: 'yellow',
              position: 'top',
              // fontStyle: 'normal',
              // fontWeight: 'normal',
              fontSize: 12
            }
          }
        ]
      }
      
      option && this.myChart.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart.resize()
      })
    },
    getList() {
      axios.post('/cdz/getChargeCount').then(result => {
        const res = result.data.data
        this.time = res.map(item => item.hour + '点').reverse()
        this.power = res.map(item => item.electric).reverse()
        this.updateChart()
      })
    },
    updateChart() {
      var option = {
        xAxis: {
          data: this.time
        },
        series: [
          {
            data: this.power
          }
        ]
      }
      this.myChart.setOption(option)
    },
    startInterval() {
      if(this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.getList()
      }, 15*60*1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    .bottom {
      width: 6.8375rem;
      height: 3.0625rem;
      background: url('~@/assets/images/right_03.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>