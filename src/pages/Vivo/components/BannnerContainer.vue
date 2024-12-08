<template>
  <div class="bannnerContainer">
    <div class="bannerMidWraper">
      <div>
        <div class="bannerMidBox">
          <div class="bannerMidImg">
            <a>
              <picture>
                <source
                  class="lazyLoad"
                  media="(max-width: 768px)"
                  srcset="
                    https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20220509/0cd4891ac9bcbee921d0d3ace70c9d73.jpg
                  "
                />
                <img
                  class="lazyLoad"
                  src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20220530/ff2f5498957f2e8903ac0bf81e2130bf.jpg"
                  alt="X80系列 持续期"
                />
              </picture>
            </a>
          </div>

          <!-- content -->
          <div class="bannerMidContentBox">
            <div class="bannerMidContent">
              <div class="midName">
                <img
                  class="lazyLoad"
                  src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20220509/9db850c39d9d94d79aeaca60190c69c6.svg"
                  alt="X80系列 持续期"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  mounted() {
    console.log(ScrollReveal);
  },
};
</script>

<style scoped>
.bannnerContainer {
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px;
  position: relative;
}
.bannerMidWraper {
  width: 100%;
}

.bannerMidBox {
  text-align: right;
  height: 640px;
  margin-top: 0;
  position: relative;
  width: 100%;
  background-color: #e9edf5;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
  overflow: hidden;
}
.bannerMidImg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
  -webkit-transition: -webkit-transform ease-in 0.5s;
  transition: -webkit-transform ease-in 0.5s;
  -o-transition: -o-transform ease-in 0.5s;
  -moz-transition: transform ease-in 0.5s, -moz-transform ease-in 0.5s;
  transition: transform ease-in 0.5s;
  transition: transform ease-in 0.5s, -webkit-transform ease-in 0.5s,
    -moz-transform ease-in 0.5s, -o-transform ease-in 0.5s;
  transition: transform ease-in 0.5s, -webkit-transform ease-in 0.5s;
}
.bannerMidBox:hover .bannerMidImg {
  transform: scale(1.04);
}

.bannerMidContentBox {
  height: 100%;
  display: inline-block;
  width: auto;
  text-align: left;
  vertical-align: top;
}
.bannerMidContent {
  margin-right: 9.375vw;
  margin-left: 0;
  height: 100%;
  opacity: 0;
  color: #242933;
  display: flex;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
}
.midName {
  height: 3vw;
  margin-bottom: 0.875vw;
}
.midName img {
  max-width: 33.75vw;
  display: block;
  height: 100%;
}
</style>
