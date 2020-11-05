<template>
  <div class="back-top">
    <img src="@static/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  bottom: 55px;
  right: 8px;
  img {
    width: 43px;
    height: 43px;
  }
}
</style>
