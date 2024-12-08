<template>
  <section class="home">
    <Swiper id="swiper" :options="swiperOption" ref="homeSwiper">
      <!-- 首屏广告 -->
      <SwiperSlide>
        <Video :maskStatusChange="maskStatusChange" :onSwiperScroll="onSwiperScroll"
      /></SwiperSlide>
      <!-- 轮播图说明 -->
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <!-- 产品内容 -->
      <SwiperSlide>
        <Product />
      </SwiperSlide>
      <!--  -->
      <SwiperSlide>
        <Smoke />
      </SwiperSlide>
    </Swiper>
    <maskVideo :maskStatus="maskStatus" :maskStatusChange="maskStatusChange" />
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Video from "./components/video.vue";
import Banner from "./components/banner.vue";
import Product from "./components/product.vue";
import Smoke from "./components/smoke.vue";
import maskVideo from "./components/maskVideo.vue";

export default {
  name: "GabrielecigHome",
  components: {
    Swiper,
    SwiperSlide,
    Video,
    Banner,
    Product,
    Smoke,
    maskVideo,
  },
  computed: {
    swiper() {
      return this.$refs.homeSwiper.swiper;
    },
  },

  data() {
    return {
      maskStatus: false,
      swiperOption: {
        direction: "vertical",
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。
        speed: 1000, // 切换速度
        preloadImages: true,
        updateOnImagesReady: true,
        threshold: 50,
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。'auto'则自动根据slides的宽度来设定数量。
        // touchRatio: 0, // 触摸比例。 设置为0时，完全无法滑动
        spaceBetween: 0, // slide之间距离(demo用于区分slide, 实际开发可删除)
      },
    };
  },
  methods: {
    maskStatusChange() {
      this.maskStatus = !this.maskStatus;
    },
    onSwiperScroll() {
      this.swiper.slideTo(1, 500, true);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  width: 100%;
  background: #f8f9fb
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAFVJREFUSEtjfPn+238GJMDBxozMJZn949dfuB5GkOHiglyMJJtChIYhbPjHrz//83Oz0yZYRg3HlngYR4NlNFiIKFUgSkZTC9agGg0W7MEyWs1hCxcAF5pe5Ya82ZoAAAAASUVORK5CYII=)
    repeat center center/23px 23px;
}

#swiper {
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  .swiper-wrapper {
    transition-timing-function: ease;
  }
}
</style>
