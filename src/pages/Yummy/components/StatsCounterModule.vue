<template>
        <!-- ======= Stats Counter Section ======= -->
        <section id="stats-counter" class="stats-counter">
      <div class="container" data-aos="zoom-out">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clients</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
              <p>Workers</p>
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>
    </section><!-- End Stats Counter Section -->
</template>


<script>
import PureCounter from "@srexi/purecounterjs";
export default {
    mounted(){
        new PureCounter();
    }   
}
</script>


<style lang="less" scoped>
@import "../var.less";
/*--------------------------------------------------------------
# Stats Counter Section
--------------------------------------------------------------*/
.stats-counter {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/yummy/stats-bg.jpg") center center;
  background-size: cover;
  padding: 100px 0;
}

@media (min-width: 1365px) {
  .stats-counter {
    background-attachment: fixed;
  }
}

.stats-counter .stats-item {
  padding: 30px;
  width: 100%;
}

.stats-counter .stats-item span {
  font-size: 48px;
  display: block;
  color: #fff;
  font-weight: 700;
}

.stats-counter .stats-item p {
  padding: 0;
  margin: 0;
  font-family: @font-secondary;
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
}

</style>