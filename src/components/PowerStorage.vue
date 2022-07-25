<template>
  <div class="home">
    <Title title="储电数据" />
    <div class="content">
      <div class="left">
        <div>140.66</div>
        <div>当前电量（度）</div>
      </div>
      <div class="center">
        <div ref="electric_ref" style="width: 1.5125rem; height: 1.3125rem;"></div>
        <div>电量百分比</div>
      </div>
      <div class="right">
        <div>140.66</div>
        <div>今日储电（度）</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import Title from '@/components/title/Title.vue'
export default {
  components: { Title },
  mounted () {
    var myChart = echarts.init(this.$refs.electric_ref)
    var  option = {
      series: [
        {
          type: 'gauge',
          backgroundColor: 'rgba(128, 128, 128, 0.01)',
          progress: {
            show: true,
            // width: '11',
            itemStyle: {
              // width: 11,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {offset: 0, color: 'orange'},
                  {offset: 1, color: 'red'}
                ],
                global: false
              }
            }
          },
          clockwise: true,
          radius: '97%',
          center: ['51%', '58%'],
          axisLine: {
            show: true,
            roundCap: false,
            lineStyle: {
              // width: 11,
              color: [[1, '#696969']]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 0,
            lineStyle: {
              width: 0,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 0
          },
          pointer: { // 指针
            show: false,
            length: '50%',
            width: 1
          },
          anchor: {
            show: false,
            showAbove: false,
            size: 30,
            itemStyle: {
              borderWidth: 0
            }
          },
          title: {
            show: true
          },
          detail: {
            valueAnimation: false,
            fontSize: 14,
            formatter: value => value.toFixed(2) + '%',
            offsetCenter: [0, '0%'],
            color: '#fff'
          },
          data: [{
            value: 74,
            detail: {
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontFamily: 'monoMMM-5-1',
              fontSize: '12%'
            }
          }]
        }
      ]
    }
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
    .content {
      // width: 6.8375rem;
      width: 100%;
      height: 2.0125rem;
      color: #fff;
      background: url('~@/assets/images/left_03.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        text-align: center;
        margin-top: .525rem;
        :first-child {
          width: 1.4125rem;
          height: .6375rem;
          background: url('~@/assets/images/storage_bgc.png') no-repeat;
          background-size: 100% 100%;
          font-size: .2rem;
          font-family: monoMMM-5-1;
        }
        :last-child {
          font-size: .175rem;
          margin-top: .125rem;
        }
      }
      .center {
        text-align: center;
        :first-child {
          width: 1.5125rem;
          height: 1.3125rem;
          background: url('~@/assets/images/storage.png') no-repeat;
          background-size: 100% 100%;
        }
        :last-child {
          font-size: .175rem;
        }
      }
      .right {
        text-align: center;
        margin-top: .525rem;
        :first-child {
          width: 1.4125rem;
          height: .6375rem;
          background: url('~@/assets/images/storage_bgc.png') no-repeat;
          background-size: 100% 100%;
          font-size: .2rem;
          font-family: monoMMM-5-1;
        }
        :last-child {
          font-size: .175rem;
          margin-top: .125rem;
        }
      }
    }
  }
</style>