<template>
  <div class="home">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      require: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 6.8375rem;
    height: .35rem;
    line-height: .35rem;
    margin-bottom: .125rem;
    background: url('~@/assets/images/title_bgc.png') no-repeat center center;
    background-size: 100% 100%;
    span {
      margin-left: .1875rem;
      font-size: .2rem;
      color: #fff;
    }
  }
</style>