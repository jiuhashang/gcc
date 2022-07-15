<template>
  <div class="home">
    <Title title="社会贡献" />
    <div class="content">
      <div class="colmun left">
        <div class="top"><span>0.00</span>吨</div>
        <div class="bottom">节约标准煤</div>
      </div>
      <div class="colmun center">
        <div class="top"><span>0.00</span>吨</div>
        <div class="bottom">CO2减排量</div>
      </div>
      <div class="colmun right">
        <div class="top"><span>0.00</span>棵</div>
        <div class="bottom">等效植树量</div>
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
    // width: 100%;
    color: #fff;
    .content {
      width: 6.8375rem;
      height: 2.6875rem;
      background: url('~@/assets/images/right_04.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .colmun {
        text-align: center;
        width: 1.7125rem;
        height: 1.275rem;
        // background-size: 100% 100%;
        .top {
          margin-top: 1rem;
          span {
            margin-right: .0625rem;
            font-size: .175rem;
            font-family: monoMMM-5-1;
          }
        }
        .bottom {
          margin-top: .125rem;
          font-size: .15rem;
        }
      }
      .left {
        background: url('~@/assets/images/coal.png') no-repeat;
        background-size: 100% 100%;
      }
      .center {
        background: url('~@/assets/images/carbon.png') no-repeat;
        background-size: 100% 100%;
      }
      .right {
        background: url('~@/assets/images/tree.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>