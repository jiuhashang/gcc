<template>
  <div class="home">
    <Title title="储电趋势"/>
    <div class="bottom">
      <div style="width: 6.8375rem; height: 2.95rem;" ref="trend_ref"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

import Title from '@/components/title/Title.vue'
export default {
  components: { Title },
  mounted () {
    var myChart = echarts.init(this.$refs.trend_ref)
    var option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%']
        }
      },
      grid: {
        left: '3%',
        top: '10%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [10, 15, 60, 80, 41, 545, 651]
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show:true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            width: 1,
            type: 'solid'
          }
        }
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(255, 70, 131)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 158, 68)'
              },
              {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }
            ])
          },
          data: [12,1215,12121,15454,45,446,898]
        }
      ]
    };
    option && myChart.setOption(option)
    window.addEventListener("resize",function() {
      myChart.resize()
    })
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    .bottom {
      // width: 6.8375rem;
      width: 100%;
      height: 2.95rem;
      background: url('~@/assets/images/left_04.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>