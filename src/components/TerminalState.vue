<template>
  <div class="home">
    <Title title="终端状态" />
    <div class="content">
      <div class="div">
        <div class="top">{{ useInNum }}</div>
        <div class="bottom">充电</div>
      </div>
      <div class="div">
        <div class="top">{{ freeNum }}</div>
        <div class="bottom">空闲</div>
      </div>
      <div class="div">
        <div class="top">{{ useNoNum }}</div>
        <div class="bottom">占用</div>
      </div>
      <div class="div">
        <div class="top">{{ useLockNum }}</div>
        <div class="bottom">锁定</div>
      </div>
      <div class="div">
        <div class="top">{{ badNum + loseNum }}</div>
        <div class="bottom">故障</div>
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
      badNum: 0,
      freeNum: 0,
      loseNum: 0,
      totalNum: 0,
      useInNum: 0,
      useLockNum: 0,
      useNoNum: 0,
      timer: null
    }
  },
  created() {
    this.getList()
    this.startInterval()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    async getList() {
      const res = await axios.post('/cdz/getEquipmentCount')
      const { badNum, freeNum, loseNum, totalNum, useInNum, useLockNum, useNoNum }  = res.data.data
      this.badNum = badNum
      this.freeNum = freeNum
      this.loseNum = loseNum
      this.totalNum = totalNum
      this.useInNum = useInNum
      this.useLockNum = useLockNum
      this.useNoNum = useNoNum
    },
    startInterval() {
      if(this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.getList()
      }, 5*60*1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    color: #fff;
    .content {
      width: 6.8375rem;
      height: 1.45rem;
      background: url('~@/assets/images/right_01.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .div {
        text-align: center;
        margin-top: .125rem;
        .top {
          width: .8125rem;
          height: .6rem;
          background: url('~@/assets/images/terminal.png') no-repeat;
          background-size: 100% 100%;
          font-size: .225rem;
          font-family: monoMMM-5-1;
        }
      }
    }
  }
</style>