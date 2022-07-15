<template>
  <div class="home">
    <div class="left">
      <span style="font-size: .175rem; margin-bottom: .125rem;">累计发电（度）</span>
      <span style="font-size: .25rem; font-family: monoMMM-5-1;">1212121</span>
    </div>
    <div class="center">
      <span style="font-size: .175rem; margin-bottom: .125rem">累计储电（度）</span>
      <span style="font-size: .25rem; font-family: monoMMM-5-1;">1212121</span>
    </div>
    <div class="right">
      <span style="font-size: .175rem; margin-bottom: .125rem">累计用电（度）</span>
      <span style="font-size: .25rem; font-family: monoMMM-5-1;">1212121</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .home {
    // margin-top: .125rem;
    display: flex;
    width: 100%;
    height: 1.0875rem;
    .left {
      width: 100%;
      height: 1.0875rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: .25rem;
      color: #fff;
      background: url('~@/assets/images/center.png') no-repeat;
      background-size: 100% 100%;
    }
    .center {
      width: 100%;
      height: 1.0875rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: url('~@/assets/images/center.png') no-repeat;
      background-size: 100% 100%;
    }
    .right {
      width: 100%;
      height: 1.0875rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: .25rem;
      color: #fff;
      background: url('~@/assets/images/center.png') no-repeat;
      background-size: 100% 100%;
    }
  }
</style>