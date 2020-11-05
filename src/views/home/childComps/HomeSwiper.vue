<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000" indicator-color="#ff6700">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link" class="banner-link">
          <img class="banner-img" :src="item.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  width: 100%;
}
.banner-img {
  width: 100%;
}
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
