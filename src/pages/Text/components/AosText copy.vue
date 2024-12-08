<template>
  <!-- ======= AosText ======= -->
  <section class="aosText d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <p>往左出现</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-right"
          >
            <p>往右出现</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-up"
          >
            <p>往上出现</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-down"
          >
            <p>往下出现</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <p>动画时间改动,当前为3秒最大值</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
          >
            <p>动画曲线:缓进快入</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <p>翻转(上下左右方向)</p>
          </div>
          <div
            class="textItem wtich d-flex justify-content-center align-items-center"
          >
            <p>素材要求</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <p>中间向外扩张</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
          >
            <p>中间向内扩张</p>
          </div>
          <div
            class="textItem d-flex justify-content-center align-items-center"
            data-aos="fade-up-left"
          >
            <p>斜向进入</p>
          </div>
          <div class="textItem wtich">
            <p>1. 文本内容</p>
            <p>2. 文字样式（颜色,大小）</p>
            <p>3. 动态内容要求（模板内容）</p>
            <p>4. 如特殊文字（浮雕,光影）,可使用图片带代替</p>
            <p>5. 动态内容要求</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ======= End AosText ======= -->
</template>

<script>
import Aos from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {};
  },
  mounted() {
    // 说明
    // import AOS from 'aos';
    // import 'aos/dist/aos.css'; // You can also use <link> for styles
    // // ..
    // AOS.init();
    // You can also pass an optional settings object
    // below listed default settings
    // AOS.init({
    //   // Global settings:
    //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    //   initClassName: 'aos-init', // class applied after initialization
    //   animatedClassName: 'aos-animate', // class applied on animation
    //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    //   offset: 120, // offset (in px) from the original trigger point
    //   delay: 0, // values from 0 to 3000, with step 50ms
    //   duration: 400, // values from 0 to 3000, with step 50ms
    //   easing: 'ease', // default easing for AOS animations
    //   once: false, // whether animation should happen only once - while scrolling down
    //   mirror: false, // whether elements should animate out while scrolling past them
    //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    // });

    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  },
};
</script>

<style scoped>
.aosText {
  min-height: 100vh;
  width: 100%;
}
.textItem {
  background: #202746;
  width: 100%;
  height: 200px;
  color: #fff;
  margin-bottom: 30px;
}
.textItem.wtich {
  background: #fff;
  color: #000;
}
</style>
