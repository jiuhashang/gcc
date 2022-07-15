<template>
  <div class="home">
    <header class="home-header">
      <img src="https://xizi-file-6e32.obs.cn-east-3.myhuaweicloud.com/top1657073160103.png" alt="">
      <span>{{ dateFormat(date) }}</span>
    </header>
    <section class="home-section">
      <div class="left">
        <div class="left-top">
          <PowerData />
        </div>
        <div class="left-top-center">
          <PowerTrend />
        </div>
        <div class="left-center-bottom">
          <PowerStorage />
        </div>
        <div class="left-bottom">
          <StorageTrend />
        </div>
      </div>

      <div class="center">
        <div class="center-top">
          <PowerCumulat />
        </div>
        <div class="center-bottom">
          <Map />
        </div>
      </div>

      <div class="right">
        <div class="right-top">
          <TerminalState />
        </div>
        <div class="right-top-center">
          <ChargingTime />
        </div>
        <div class="right-center-bottom">
          <RechargingTrend />
        </div>
        <div class="right-bottom">
          <SocialContrinution />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import PowerData from '@/components/PowerData.vue'
import PowerTrend from '@/components/PowerTrend.vue'
import PowerStorage from '@/components/PowerStorage.vue'
import StorageTrend from '@/components/StorageTrend.vue'
import PowerCumulat from '@/components/PowerCumulat.vue'
import Map from '@/components/Map.vue'
import TerminalState from '@/components/TerminalState.vue'
import ChargingTime from '@/components/ChargingTime.vue'
import RechargingTrend from '@/components/RechargingTrend.vue'
import SocialContrinution from '@/components/SocialContrinution.vue'

export default {
  data () {
    return {
      date: new Date()
    }
  },
  mounted() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.timer = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  components: { PowerData, PowerTrend, PowerStorage, StorageTrend, PowerCumulat, Map, TerminalState, ChargingTime, RechargingTrend, SocialContrinution },
  methods: {
    dateFormat(time) {
      var date=new Date(time)
      var year=date.getFullYear()
      var month= date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
      var day=date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
      var hours=date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
      var minutes=date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      var seconds=date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
      return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    .home-header {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        font-size: .325rem;
        right: .25rem;
        bottom: 0;
        color: #fff;
        font-family: monoMMM-5-1;
      }
    }
    .home-section {
      display: flex;
      padding:  .125rem .25rem .25rem;
      .left {
        flex: 3;
        width: 100%;
        .left-top-center {
          margin: .275rem 0;
        }
        .left-bottom {
          margin-top: .275rem;
        }
        
      }
      .center {
        flex: 4;
        margin: .1875rem .25rem 0;
        .center-bottom {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
      .right {
        flex: 3;
        .right-top-center {
          margin: .275rem 0;
        }
        .right-bottom {
          margin-top: .275rem;
        }
      }
    }
  }
</style>