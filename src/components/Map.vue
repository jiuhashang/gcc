<template>
  <div>
    <div class="map"></div>
    <div class="map2"></div>
    <div class="map1"></div>
    <div class="out"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .map {
    width: 6.25rem;
    height: 6.25rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('https://xizi-file-6e32.obs.cn-east-3.myhuaweicloud.com/map1657072973285.png') no-repeat;
    background-size: 100% 100%;
  }
  .map2 {
    width: 6.25rem;
    height: 6.25rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('https://xizi-file-6e32.obs.cn-east-3.myhuaweicloud.com/map21657073035915.png') no-repeat;
    background-size: 100% 100%;
    animation: rotate2 4s linear infinite;
  }
  .map1 {
    width: 6.25rem;
    height: 6.25rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('https://xizi-file-6e32.obs.cn-east-3.myhuaweicloud.com/map11657073019488.png') no-repeat;
    animation: rotate3 60s linear infinite;
    background-size: 100% 100%;
  }
  .out {
    width: 7.4875rem;
    height: 7.7375rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('https://xizi-file-6e32.obs.cn-east-3.myhuaweicloud.com/out1657072995354.png') no-repeat;
    background-size: 100% 100%;
    animation: rotate1 15s linear infinite;
  }

  @keyframes rotate1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate3 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes rotate2 {
    0% {opacity:0.00;}
    10% {opacity:0.20;}
    20% {opacity:0.40;}
    30% {opacity:0.60;}
    40% {opacity:0.80;}
    50% {opacity:1.00;}
    60% {opacity:0.80;}
    70% {opacity:0.60;}
    80% {opacity:0.40;}
    90% {opacity:0.20;}
    100% {opacity:0.00;}
  }
</style>