<template>
    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials section-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h2>Testimonials</h2>
                <p>What Are They <span>Saying About Us</span></p>
            </div>

            <Swiper
                class="swiper"
                :options="swiperOption"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <SwiperSlide v-for="(item, index) in list" :key="index">
                    <div class="testimonial-item">
                        <div class="row gy-4 justify-content-center">
                            <div class="col-lg-6">
                                <div class="testimonial-content">
                                    <p>
                                        <i
                                            class="bi bi-quote quote-icon-left"
                                        ></i
                                        >{{ item.text
                                        }}<i
                                            class="bi bi-quote quote-icon-right"
                                        ></i>
                                    </p>
                                    <h3>{{ item.name }}</h3>
                                    <h4>{{ item.dept }}</h4>
                                    <div class="stars">
                                        <i class="bi bi-star-fill"></i
                                        ><i class="bi bi-star-fill"></i
                                        ><i class="bi bi-star-fill"></i
                                        ><i class="bi bi-star-fill"></i
                                        ><i class="bi bi-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 text-center">
                                <img
                                    :src="item.img"
                                    class="img-fluid testimonial-img"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
            <div class="swiper-pagination-what swiper-pagination"  solt='pagination'></div>


        </div>
    </section>
    <!-- End Testimonials Section -->
</template>

<script>
import { Swiper, SwiperSlide, } from "vue-awesome-swiper";
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
                    el: ".swiper-pagination-what",
                    type: "bullets",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                },
            },

            list: [
                {
                    text: `Proin iaculis purus consequat sem
                                            cure digni ssim donec porttitora
                                            entum suscipit rhoncus. Accusantium
                                            quam, ultricies eget id, aliquam
                                            eget nibh et. Maecen aliquam, risus
                                            at semper.`,
                    name: "Saul Goodman",
                    dept: "Ceo & Founder",
                    img: require("@/assets/yummy/testimonials/testimonials-1.jpg"),
                },
                {
                    text: `Export tempor illum tamen malis malis
                                        eram quae irure esse labore quem cillum
                                        quid cillum eram malis quorum velit fore
                                        eram velit sunt aliqua noster fugiat
                                        irure amet legam anim culpa.`,
                    name: "Sara Wilsson",
                    dept: "Designer",
                    img: require("@/assets/yummy/testimonials/testimonials-2.jpg"),
                },
                {
                    text: ` Enim nisi quem export duis labore cillum
                                        quae magna enim sint quorum nulla quem
                                        veniam duis minim tempor labore quem
                                        eram duis noster aute amet eram fore
                                        quis sint minim.`,
                    name: "Jena Karlis",
                    dept: "Store Owner",
                    img: require("@/assets/yummy/testimonials/testimonials-3.jpg"),
                },
                {
                    text: `Quis quorum aliqua sint quem legam fore
                                        sunt eram irure aliqua veniam tempor
                                        noster veniam enim culpa labore duis
                                        sunt culpa nulla illum cillum fugiat
                                        legam esse veniam culpa fore nisi cillum
                                        quid.`,
                    name: "John Larson",
                    dept: "Entrepreneur",
                    img: require("@/assets/yummy/testimonials/testimonials-4.jpg"),
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
@import "../var.less";

/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials .section-header {
    margin-bottom: 40px;
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
    overflow: hidden;
}

.testimonials .testimonial-item .testimonial-content {
    border-left: 3px solid @color-primary;
    padding-left: 30px;
}

.testimonials .testimonial-item .testimonial-img {
    border-radius: 50%;
    border: 4px solid #fff;
    margin: 0 auto;
}

.testimonials .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: @color-default;
    font-family: @font-secondary;
}

.testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #6c757d;
    margin: 0 0 10px 0;
    font-family: @font-secondary;
}

.testimonials .testimonial-item .stars i {
    color: #ffc107;
    margin: 0 1px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
    color: #f05656;
    font-size: 26px;
    line-height: 0;
}

.testimonials .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
    transform: scale(-1, -1);
}

.testimonials .testimonial-item p {
    font-style: italic;
}

.testimonials .swiper-pagination {
    margin-top: 40px;
    position: relative;
}

::v-deep .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 4px;
    background-color: #d1d1d7;
    opacity: 1;
}

::v-deep .swiper-pagination-bullet-active {
    background-color: @color-primary;
}
</style>
