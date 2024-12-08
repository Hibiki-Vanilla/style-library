<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-left text-lg-start">
          <h2 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a   @click="scrollToAnchor('book-a-table')" class="btn-book-a-table">Book a Table</a>
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              class="glightbox btn-watch-video d-flex align-items-center"
              ><i class="bi bi-play-circle"></i><span>Watch Video</span></a
            >
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img
            src="@/assets/yummy/hero-img.png"
            class="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay="300"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->
</template>

<script>
import GLightbox from 'glightbox';
import "glightbox/dist/css/glightbox.min.css";

export default {
  props:{
        scrollToAnchor:Function
    },
  data() {
    return {};
  },
  mounted(){
   GLightbox();
  }
};
</script>

<style lang="less" scoped>
@import "../var.less";
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  background-size: cover;
  position: relative;
  min-height: 60vh;
  padding: 160px 0 60px 0;
  display: flex;
  align-items: center;
}


.hero h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  color: @color-secondary;
  font-family: @font-primary;
}

.hero h2 span {
  color: @color-primary;
}

.hero p {
  color: #4f4f5a;
  font-weight: 400;
  margin-bottom: 30px;
}

.hero .btn-book-a-table {
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 36px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: @color-primary;
  box-shadow: 0 8px 28px rgba(206, 18, 18, 0.2);
}

.hero .btn-book-a-table:hover {
  background: rgba(206, 18, 18, 0.8);
  box-shadow: 0 8px 28px rgba(206, 18, 18, 0.45);
}

.hero .btn-watch-video {
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: @font-secondary;
  font-weight: 600;
}

.hero .btn-watch-video i {
  color: @color-primary;
  font-size: 32px;
  transition: 0.3s;
  line-height: 0;
  margin-right: 8px;
}

.hero .btn-watch-video:hover {
  color: @color-primary;
}

.hero .btn-watch-video:hover i {
  color: rgba(206, 18, 18, 0.8);
}

@media (max-width: 640px) {
  .hero h2 {
    font-size: 36px;
  }

  .hero .btn-get-started,
  .hero .btn-watch-video {
    font-size: 14px;
  }
}
</style>
