<template>
  <section class="productAmine">
    <div class="productAmineCon">
      <div class="productAmineSticky">
        <div class="productAmineImgBox">
          <img
            class="productImg"
            :src="item"
            :class="{ colorRoll: boomRoll == index }"
            v-for="(item, index) of boomImg"
            :key="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boomRoll: 0,
      lock:'',
         boomImg: [
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/1.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/3.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/5.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/7.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/9.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/11.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/13.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/15.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/17.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/19.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/21.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/23.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/25.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/27.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/29.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/31.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/33.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/35.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/36.webp',
                    'https://files.myuwell.com/blob/product/caliburn-a2/boom/36.webp',
                ],
    };
  },
  methods: {
    animationScroll() {
      // 拆解
      let twoConOffsetHeight =
        document.querySelector(".productAmineCon").offsetHeight;
      let twoStickyOffsetTop = document.querySelector(
        ".productAmineSticky"
      ).offsetTop;
      let twoStickyOffsetHeight = document.querySelector(
        ".productAmineSticky"
      ).offsetHeight;
      let twoImgLength = this.boomImg.length;
      let twoRollNumber =
        (twoConOffsetHeight - twoStickyOffsetHeight * 1.5) / twoImgLength;
      let twoIndex = parseInt(twoStickyOffsetTop / twoRollNumber);

      if (twoIndex <= twoImgLength - 1) {
        if (this.lock !== twoIndex) {
          this.lock = twoIndex;
          this.boomRoll = twoIndex;
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
.productAmine {
  height: 300vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.productAmineCon {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.productAmineSticky {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
}
.productAmineImgBox {
  width: 100%;
  position: relative;
  height: 640px;
}
.productImg {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  -moz-transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  -ms-transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
  -o-transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.productImg.colorRoll {
  z-index: 2;
  opacity: 1;
}
</style>
