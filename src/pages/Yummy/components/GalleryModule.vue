<template>
  <!-- ======= Gallery Section ======= -->
  <section id="gallery" class="gallery section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>gallery</h2>
        <p>Check <span>Our Gallery</span></p>
      </div>

      <Swiper class="gallery-slider" :options="swiperOption">
        <SwiperSlide v-for="(item, index) in 8" :key="index"
          ><a
            class="glightbox"
            data-gallery="images-gallery"
            :href="require(`@/assets/yummy/gallery/gallery-${item}.jpg`)"
            ><img
              :src="require(`@/assets/yummy/gallery/gallery-${item}.jpg`)"
              class="img-fluid"
              alt="" /></a
        ></SwiperSlide>
      </Swiper>
      <div class="swiper-pagination-gallery swiper-pagination" slot="pagination"></div>
    </div>
  </section>
  <!-- End Gallery Section -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        speed: 400,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination-gallery",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  mounted() {
    GLightbox();
  },
};
</script>

<style lang="less" scoped>
@import "../var.less";

/*--------------------------------------------------------------
# Gallery Section
--------------------------------------------------------------*/
.gallery {
  overflow: hidden;
}

.gallery .swiper-pagination-gallery {
  margin-top: 20px;
  position: relative;
}

::v-deep .swiper-pagination-gallery .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 4px;
  background-color: #d1d1d7;
  opacity: 1;
}

::v-deep .swiper-pagination-gallery .swiper-pagination-bullet-active {
  background-color: @color-primary;
}

::v-deep  .swiper-slide-active {
  text-align: center;
}

@media (min-width: 992px) {
  ::v-deep .swiper-wrapper {
    padding: 40px 0;
  }

  ::v-deep .swiper-slide-active {
    border: 6px solid @color-primary;
    padding: 4px;
    background: #fff;
    z-index: 1;
    transform: scale(1.2);
  }
}
</style>
