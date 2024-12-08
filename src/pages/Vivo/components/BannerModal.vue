<template>
<!-- banner -->
  <div class="homeBannerLarge">
    <a class="bannerLargeLink">
      <div class="bannerLargeBg">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="
              https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20220519/1bc3a8ae8b3794a6ace6a83ae37687e0.jpg
            "
          />
          <img
            src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20220519/b2cfc7b500d882d3c379350564d298ff.jpg"
            alt="S15 发布"
          />
        </picture>
      </div>
    </a>
    <div class="bannerLargeContent">
      <div class="bannerLargeProduct">
        <img src="@/assets/images/svg/vivo.svg" alt="S15 发布" />
      </div>
      <h2 class="bannerLargeTitle">每一拍，都有电影感。</h2>
      <div class="bannerLargeLinks">
        <a href="">
          <span>了解更多</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeBannerLarge {
  font-size: 0;
  height: 47.8125vw;
  max-height: 1227px;
  position: relative;
}
.bannerLargeLink {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.bannerLargeBg {
  position: absolute;
  width: 100%;
  z-index: 0;
}

.bannerLargeBg img {
  width: 100%;
  position: relative;
}
/* 内容区 */
.bannerLargeContent {
  position: relative;
  pointer-events: none;
  top: 45.7%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
  color: #242933;
}
.bannerLargeProduct {
  display: inline-block;
  height: 56px;
  margin-bottom: 16px;
}
.bannerLargeProduct img {
  height: 100%;
  max-width: 530px;
}
.bannerLargeTitle {
  width: 530px;
  font-size: 34px;
  line-height: 48px;
  margin-bottom: 78px;
  font-weight: 400;
}
.bannerLargeLinks {
  display: inline-block;
  pointer-events: auto;
}

.bannerLargeLinks a {
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.33, 0, 0.67, 1);
  transform-origin: left center;
  box-sizing: border-box;
  cursor: pointer;
  color: #242933;
}
.bannerLargeLinks a:hover span {
  transform: scaleX(1.04);
  color: #415fff;
}
.bannerLargeLinks a span {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  transition: all 0.5s cubic-bezier(0.33, 0, 0.67, 1);
}
</style>
