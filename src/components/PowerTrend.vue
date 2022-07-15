<template>
  <div class="home">
    <Title title="发电趋势"/>
    <div class="bottom">
      <div style="width: 6.8375rem; height: 2.675rem;" ref="trend_ref"></div>
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
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
      var now = new Date((base += oneDay));
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
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
        right: '5%',
        bottom: '4%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
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
          data: data
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
      width: 6.8375rem;
      height: 2.675rem;
      background: url('~@/assets/images/left_01.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>