<template>
  <section class="page">
    <div class="g-wrap">
      <div class="text">
        灵动的 iPhone
        新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。创新的 4800
        万像素主摄，让细节纤毫毕现。更有 iPhone
        芯片中的速度之王，为一切提供强大原动力。
        <div class="bg"></div>
      </div>
    </div>
    <div class="g-scroll"></div>
  </section>
</template>

<script>
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
        scrollTrigger: {
          trigger: ".g-scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .fromTo(".bg", { y: 0 }, { y: "-75%" }, 0);
  },
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.g-wrap {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  background: #000;

  .text {
    position: relative;
    width: 800px;
    font-size: 40px;
    margin: auto;
    line-height: 1.5;
    padding: 20px;
    color: #fff;
    background: #000;
    overflow: hidden;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 400%;
    background: linear-gradient(
      -3deg,
      #000,
      #000 25%,
      #ffb6ff,
      #b344ff,
      #000 75%,
      #000
    );
    z-index: 1;
    mix-blend-mode: darken;
  }
}

.g-scroll {
  position: relative;
  width: 100%;
  height: 400vw;
}
</style>
