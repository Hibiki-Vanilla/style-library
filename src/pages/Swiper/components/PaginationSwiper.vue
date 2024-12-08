<template>
  <div class="banner">
    <div class="bannerCon">
      <Swiper id="swiperBox" :options="swiperOption">
        <SwiperSlide v-for="(item, index) in swiperData" :key="index">
          <img class="swiperSlideImg" :src="item.image" />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperData: [
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-bh600/PC/1.webp",
        },
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-de8000/pc/gabriel_01.webp",
        },
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-bf5500/pc/banner.webp",
        },
      ],
      swiperOption: {
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper,也就是响应式
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style scoped lang="less">
.banner {
  display: flex;
  justify-content: center;
  .bannerCon {
    width: 70%;
    position: relative;
    #swiperBox {
      width: 100%;
      height: 100%;

      .swiperSlideImg {
        width: 100%;
      }
    }
    .swiper-pagination {
      bottom: 0;
      display: flex;
      justify-content: center;
      width: 60%;
      left: 20%;
    }
  }
}
</style>
