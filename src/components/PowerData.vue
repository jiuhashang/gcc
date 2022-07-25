<template>
  <div class="home">
    <Title title="发电数据" />
    <div class="bottom">
      <div class="left">
        <div style="display: flex; justify-content: space-around; align-items: center; margin-right: .125rem;">
          <img src="@/assets/images/electric.png" alt="" />
        </div>
        <div class="left-top">
          <span style="font-size: .175rem; margin-bottom: .125rem;">今日发电（度）</span>
          <span style="font-size: .25rem; font-family: monoMMM-5-1;">678.00</span>
        </div>
      </div>

      <div class="right">
        <div style="display: flex; justify-content: space-around; align-items: center; margin-right: .125rem;">
          <img src="@/assets/images/power.png" alt="" />
        </div>
        <div class="right-bottom">
          <span style="font-size: .175rem; margin-bottom: .125rem;">当前功率（度）</span>
          <span style="font-size: .25rem; font-family: monoMMM-5-1;">121212.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/title/Title.vue'
export default {
  components: { Title }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    .bottom {
      // width: 6.8375rem;
      width: 100%;
      height: 1.4375rem;
      background: url('~@/assets/images/left_01.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: .65rem;
        height: .65rem;
      }
      .left {
        display: flex;
        .left-top {
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      }
      .right {
        display: flex;
        .right-bottom {
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      }
    }
  }
</style>