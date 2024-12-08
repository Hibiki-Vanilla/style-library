<template>
  <section class="page">
    <div class="rotateBox">
      <div
        id="img-360"
        class="img-360"
        data-url="https://www.vaporesso.com/hubfs/imgs/2023/pro/eco-nano/rotate/ECO%20%20NANO.2488."
        :style="`background-image: url('https://www.vaporesso.com/hubfs/imgs/2023/pro/eco-nano/rotate/ECO%20%20NANO.2488.${currentImage}.png');`"
      >
        <div
          id="rotateImg"
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
          @mousemove="handleMouseMove"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
          @touchmove="handleTouchMove"

        ></div>
        <img
          v-for="(item, index) in 49"
          :key="index"
          class="rotateImgLoad"
          :src="`https://www.vaporesso.com/hubfs/imgs/2023/pro/eco-nano/rotate/ECO%20%20NANO.2488.${item}.png`"
        />
      </div>
      <input class="range" type="range" v-model="currentImage" min="1" :max="totalImages" value="1" step="1">
    </div>
  </section>
</template>

<script>
export default {
  name: "Image360Page",
  data() {
    return {
      currentImage: 1,
      totalImages: 49,
      isMouseDown: false,
      offsetX: 0,
    };
  },
  methods: {
    handleMouseDown() {
      this.isMouseDown = true;
    },
    handleMouseUp() {
        console.log(222);
      this.isMouseDown = false;
    },
    handleMouseMove(event) {
      if (this.isMouseDown) {
        this.calculateRotation(event.pageX - event.target.offsetLeft);
      } else {
        this.offsetX = event.pageX - event.target.offsetLeft;
      }
    },
    calculateRotation(offset) {
      let newImageIndex = this.currentImage;
      if (offset > this.offsetX + 5) {
        newImageIndex--;
        this.offsetX = offset;
      } else if (offset < this.offsetX - 5) {
        newImageIndex++;
        this.offsetX = offset;
      }
      if (newImageIndex > this.totalImages) {
        newImageIndex = 1;
      } else if (newImageIndex < 1) {
        newImageIndex = this.totalImages;
      }
      this.currentImage = newImageIndex;
    },
    handleTouchStart(event) {
      event.preventDefault();
      this.isMouseDown = true;
    },
    handleTouchEnd() {
      this.isMouseDown = false;
    },
    handleTouchMove(event) {
      event = event.touches[0] || event.changedTouches[0];
      if (this.isMouseDown) {
        this.calculateRotation(event.pageX - event.target.offsetLeft);
      } else {
        this.offsetX = event.pageX - event.target.offsetLeft;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .rotateBox {
    height: 65vh;
    margin: 0 auto;
    text-align: center;
    touch-action: none;
    width: 20vw;
    .img-360 {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      height: 100%;
      width: 100%;
    }
    #rotateImg {
      height: 100%;
      width: 100%;
    }
    .rotateImgLoad {
      display: none;
    }
  }
  .range{
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    display: block;
    margin: 0 auto 1vw;
    width: 100%;
  }
  input[type="range" i] {
    appearance: auto;
    cursor: default;
    // color: -internal-light-dark(rgb(16, 16, 16), rgb(255, 255, 255));
    padding: initial;
    }
}
</style>
