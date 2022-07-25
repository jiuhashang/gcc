<template>
  <div class="home">
    <Title title="充电时段" />
    <div class="content">
      <div class="left">
        <div class="left-top">
          <span style="font-family: monoMMM-5-1; margin-right: .125rem;">22.22%</span>
          <span>峰期</span>
        </div>
        <div class="left-bottom">
          <span style="font-family: monoMMM-5-1; margin-right: .125rem;">00.00%</span>
          <span>尖峰</span>
        </div>
      </div>
      <div class="center">
        <div style="font-family: monoMMM-5-1; margin-bottom: .3125rem;">{{ totalElectric | money }}</div>
        <div>今日充电(度)</div>
      </div>
      <div class="right">
        <div class="right-top">
          <span>谷期</span>
          <span style="font-family: monoMMM-5-1; margin-left: .125rem;">23.22%</span>
        </div>
        <div class="right-bottom">
          <span>平期</span>
          <span style="font-family: monoMMM-5-1; margin-left: .125rem;">23.22%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title/Title.vue'
export default {
  components: { Title },
  data() {
    return {
      totalElectric: 0
    }
  },
  created() {
    this.getTotalElectric()
    this.startInterval()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    async getTotalElectric() {
      const res = await axios.post('/cdz/getTotalElectric')
      this.totalElectric = res.data.data
    },
    startInterval() {
      if(this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.getTotalElectric()
      }, 15*60*1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    font-size: .175rem;
    .content {
      // width: 6.8375rem;
      width: 100%;
      height: 1.8875rem;
      color: #fff;
      background: url('~@/assets/images/right_02.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .left {
        .left-top {
          position: absolute;
          top: 26%;
          left: 15%;
        }
        .left-bottom {
          position: absolute;
          top: 59%;
          left: 15%;
        }
      }
      .center {
        text-align: center;
        position: absolute;
        top: 31%;
        left: 42%;
      }
      .right {
        .right-top {
          position: absolute;
          top: 26%;
          right: 15%;
        }
        .right-bottom {
          position: absolute;
          top: 59%;
          right: 15%;
        }
      }
    }
  }
</style>