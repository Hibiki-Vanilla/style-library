<template>
  <div class="regionalVideo">
    <ApplePage />
    <div class="text">
      <div class="textCon">
        <div class="textTitle">由两个内容组合</div>
        <div class="content">
          <div class="contentLeft">
            <div class="samllText">小范围视频</div>
            <img class="contentImg" src="@/assets/video/layout/large.jpg" />
          </div>
          <div class="contentRight">
            <div class="samllText">外部框架png图片</div>
            <img class="contentImg" src="@/assets/video/layout/window.png" />
          </div>
        </div>
      </div>
    </div>
    <CaliburnPage />
    <div class="text">
      <div class="textCon">
        <div class="textTitle">由背景图与SVG素材组合</div>
        <div class="content">
          <div class="contentLeft">
            <div class="samllText">背景图</div>
            <img class="contentImg" src="@/assets/video/caliburn/bg.png" />
          </div>
          <div class="contentRight">
            <div class="samllText">SVG素材控制颜色变化</div>
            <img class="contentImg" src="@/assets/video/caliburn/icon.svg" />
          </div>
        </div>
      </div>
    </div>
    <OpacityPage />
    <div class="text">
      <div class="textCon">
        <div class="textTitle">由背景图与多张png图片组合</div>
        <div class="content">
          <div class="contentLeft">
            <div class="samllText">背景图</div>
            <img class="contentImg" src="@/assets/video/opacity/base.webp" />
          </div>
          <div class="contentRight">
            <div class="samllText">同背景画布大小的PNG图片</div>
            <img class="contentImg" src="@/assets/video/opacity/bottom.webp" />
          </div>
          <div class="contentRight">
            <div class="samllText">通过透明化与位移制作动画效果</div>
            <img class="contentImg testAnime" src="@/assets/video/opacity/top.webp" />
          </div>
        </div>
      </div>
    </div>
    <!-- <TestPage/> -->
  </div>
</template>

<script>
import ApplePage from "./components/ApplePage.vue";
import CaliburnPage from "./components/CaliburnPage.vue";
import OpacityPage from "./components/OpacityPage.vue";

// import TestPage from "./components/TestPage.vue";

export default {
  name: "RegionalVideoPage",
  components: { ApplePage, CaliburnPage, OpacityPage },
};
</script>

<style lang="less" scoped>
.text {
  padding: 50px 0;
  width: 100%;
  .textCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 980px;
    margin: 0 auto;
    .textTitle {
      width: 100%;
      text-align: center;
      font-size: 34px;
      padding-bottom: 50px;
    }
    .content {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 500px;
      .samllText {
        text-align: center;
        font-size: 28px;
        padding-bottom: 50px;
      }
      .contentRight {
        margin-left: 30px;
      }
      .contentImg {
        height: 70%;
      }
    }
  }
}

.testAnime{
  animation: testAnime 5s infinite linear;
}

  @keyframes testAnime {
    0% {
      opacity: 0;
        transform: translateY(0px);
    }
    50% {
      opacity: 1;
        transform: translateY(-50px);
    }
    100% {
      opacity: 0;
        transform: translateY(0px);
    }
  }
</style>
