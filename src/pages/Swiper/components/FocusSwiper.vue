<template>
  <div class="banner">
    <div class="bannerCon">
      <Swiper id="swiperBox" :options="swiperOption" ref="focusSwiper">
        <SwiperSlide v-for="(item, index) in swiperData" :key="index">
          <img class="swiperSlideImg" :src="item.image" />
        </SwiperSlide>
      </Swiper>
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
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-xa10000/PC/gabriel_01.webp",
        },
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-BD2500/pc/banner.webp",
        },
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
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-xa10000/PC/gabriel_01.webp",
        },
        {
          image:
            "https://files.myuwell.com/blob/gabrielecig/gabriel-BD2500/pc/banner.webp",
        },
      ],
      swiperOption: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        speed: 3000,
        autoplay: true,
        initialSlide: 2,
        loopedSlides: 5,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        on: {
          progress: function () {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i);
              let slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 120 + "px";
              let scale = 1 - Math.abs(slideProgress) / 5;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(`translateX(${translate}) scale(${scale})`);
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
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

    #swiperBox {
      width: 100%;
      height: 25vw;
      .swiper-slide {
        position: relative;
        height: 50%;
        width: 50%;
        // transition: all 3000ms;
      }
      .swiperSlideImg {
        width: 100%;
      }
    }
  }
}
</style>
