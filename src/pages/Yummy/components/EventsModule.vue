<template>
  <!-- ======= Events Section ======= -->
  <section id="events" class="events">
    <div class="container-fluid" data-aos="fade-up">
      <div class="section-header">
        <h2>Events</h2>
        <p>Share <span>Your Moments</span> In Our Restaurant</p>
      </div>

      <Swiper class="slides-3" :options="swiperOption" data-aos="fade-up" data-aos-delay="100">
        <SwiperSlide
        v-for='(item,index) in list'
        :key="index"
          class="swiper-slide event-item d-flex flex-column justify-content-end"
          :style="`background-image: url(${item.img})`"
        >
          <h3>{{item.title}}</h3>
          <div class="price align-self-start"> {{item.number}}</div>
          <p class="description">
            {{item.text}}
          </p>
        </SwiperSlide>
        <!-- End Event item -->

      </Swiper>
      <div class="swiper-pagination-events swiper-pagination"  solt='pagination'></div>

    </div>
  </section>
  <!-- End Events Section -->
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
      swiperOption: {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination-events",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },

          1200: {
            slidesPerView: 3,
          },
        },
      },
      list: [
        
      {
        img:require('@/assets/yummy/events-1.jpg'),
        title:'Custom Parties',
        number:'$99',
        text:`Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum
            voluptas eos omnis facere. Enim facilis veritatis id est rem
            repudiandae nulla expedita quas.`,
      },
      {
        img:require('@/assets/yummy/events-2.jpg'),
        title:'Private Parties',
        number:'$289',
        text:`In delectus sint qui et enim. Et ab repudiandae inventore quaerat
            doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus
            saepe accusamus aspernatur.`,
      },
      {
        img:require('@/assets/yummy/events-3.jpg'),
        title:'Birthday Parties',
        number:'$499',
        text:`Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis
            id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam
            maxime. Non enim perspiciatis.`,
      }
      ]
    };
  },
};
</script>

<style lang="less" scoped>
@import "../var.less";
/*--------------------------------------------------------------
# Events Section
--------------------------------------------------------------*/
.events .container-fluid {
  padding: 0;
}

.events .event-item {
  background-size: cover;
  background-position: cente;
  min-height: 600px;
  padding: 30px;
}

@media (max-width: 575px) {
  .events .event-item {
    min-height: 500px;
  }
}

.events .event-item:before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  inset: 0;
}

.events .event-item h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  color: #fff;
  position: relative;
}

.events .event-item .price {
  color: #fff;
  border-bottom: 2px solid @color-primary;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
}

.events .event-item .description {
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
}

@media (min-width: 1200px) {
  .events .swiper-slide-active + .swiper-slide {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 1;
  }
}

.events .swiper-pagination-events {
  margin-top: 20px;
  position: relative;
}

::v-deep  .swiper-pagination-events .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 4px;
  background-color: #d1d1d7;
  opacity: 1;
}

::v-deep  .swiper-pagination-events .swiper-pagination-bullet-active {
  background-color: @color-primary;
}
</style>
