<template>
    <!-- ======= Why Us Section ======= -->
    <section id="why-us" class="why-us section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="why-box">
              <h3>Why Choose Yummy?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div><!-- End Why Box -->

          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-clipboard-data"></i>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gem"></i>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div><!-- End Icon Box -->

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-inboxes"></i>
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div><!-- End Icon Box -->

            </div>
          </div>

        </div>

      </div>
    </section><!-- End Why Us Section -->
</template>



<style lang="less" scoped>
@import "../var.less";
/*--------------------------------------------------------------
# Why Us Section
--------------------------------------------------------------*/
.why-us .why-box {
  padding: 30px;
  background: @color-primary;
  color: #fff;
}

.why-us .why-box h3 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
}

.why-us .why-box p {
  margin-bottom: 30px;
}

.why-us .why-box .more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.3);
  padding: 6px 30px 8px 30px;
  color: #fff;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}

.why-us .why-box .more-btn i {
  font-size: 14px;
}

.why-us .why-box .more-btn:hover {
  color: @color-primary;
  background: #fff;
}

.why-us .icon-box {
  text-align: center;
  background: #fff;
  padding: 40px 30px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(55, 55, 63, 0.1);
  transition: 0.3s;
}

.why-us .icon-box i {
  color: @color-primary;
  margin-bottom: 30px;
  font-size: 32px;
  margin-bottom: 30px;
  background: rgba(206, 18, 18, 0.1);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
}

.why-us .icon-box h4 {
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 30px 0;
  font-family: @font-secondary;
}

.why-us .icon-box p {
  font-size: 15px;
  color: #6c757d;
}

@media (min-width: 1200px) {
  .why-us .icon-box:hover {
    transform: scale(1.1);
  }
}


</style>