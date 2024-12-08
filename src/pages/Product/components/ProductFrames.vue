<template>
  <section class="productFrames">
    <div class="productFramesCon">
      <!-- Sticky -->
      <div class="productFramesSticky">
        <!-- ImgBox -->
        <div class="productImgBox">
          <img
            class="productImg productTipImg"
            src="https://files.myuwell.com/blob/product/popreel-n1/tip.webp"
            alt=""
          />
          <img
            class="productImg"
            src="https://files.myuwell.com/blob/product/popreel-n1/body.webp"
            alt=""
          />
          <img
            class="productImg productBodyBgImg"
            src="https://files.myuwell.com/blob/product/popreel-n1/bodyBg.webp"
            alt=""
          />
        </div>
        <!-- End ImgBox -->
      </div>
      <!-- End Sticky -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lockIndex: "", //防重复参数
    };
  },
  methods: {
    animationScroll() {
      // 取值
      let illustrationOffsetHeight =
        document.querySelector(".productFramesCon").offsetHeight;
      let illustrationOffsetTop = document.querySelector(
        ".productFramesSticky"
      ).offsetTop;
      let illustrationStickyOffsetHeight = document.querySelector(
        ".productFramesSticky"
      ).offsetHeight;
      let illustrationImgLength = 2;
      let illustrationRollNumber =
        (illustrationOffsetHeight - illustrationStickyOffsetHeight * 1.5) /
        illustrationImgLength;
      let illustrationIndex = parseInt(
        illustrationOffsetTop / illustrationRollNumber
      );
      if (illustrationIndex <= illustrationImgLength - 1) {
        if (this.lockIndex !== illustrationIndex) {
          this.lockIndex = illustrationIndex;
          document.getElementsByClassName("productTipImg")[0].style.left = illustrationIndex?0:'-16.5%';
          document.getElementsByClassName("productTipImg")[0].style.bottom = illustrationIndex?0:'-19%';
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.animationScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.animationScroll);
  },
};
</script>

<style scoped>
.productFrames {
  width: 100%;
  height: 200vh;
}
.productFramesCon {
  width: 100%;
  height: 100%;
  position: relative;
}
.productFramesSticky {
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.productImgBox {
  width: 545px;
  height: 792px;
  position: relative;
}
.productImg {
  z-index: 2;
  width: 545px;
  height: 792px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.productBodyBgImg {
  z-index: 0;
}

.productTipImg {
  z-index: 1;
  bottom: -19%;
  left: -16.5%;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}

</style>
