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

  <!-- <div v-swiper:mySwiper="swiperOption" >
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="(item, index) in banners" :key="index">
        <img :src="item.image">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->
</template>

<script>
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import '@static/css/swiper-bundle.min.css'
// import 'swiper/swiper-bundle.css'

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // data () {
  //   return {
  //     swiperOption: {
  //         pagination: {
  //           el: '.swiper-pagination'
  //         },
  //       }
  //   }
  // },
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  // directives: {
  //   swiper: directive
  // },
  // mounted() {
  //   this.mySwiper.slideTo(3, 1000, false)
  // }
};
</script>

<style lang="less" scoped>
.home-swiper {
  margin-top: 44px;
}
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