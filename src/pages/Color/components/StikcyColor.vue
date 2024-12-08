<template>
  <section class="colorApp" :style="{ background: colorAnimation[asset - 1] }">
    <!-- ======= ColorScreen ======= -->
    <div class="colorScreen">
      <div class="colorWrapper">
        <div id="colorImgWrapper" class="colorImgWrapper">
          <img :src="require(`@/assets/color/${asset}.webp`)" alt="图片" />
          <span class="colorSpan" :style="{ color: colorValue[asset - 1] }">{{
            colorName[asset - 1]
          }}</span>
        </div>
      </div>
    </div>
    <!-- ======= End ColorScreen ======= -->

    <!-- ======= ColorContent ======= -->
    <div class="colorContent">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 d-flex justify-content-center align-items-center"
          >
            <p class="contentTitle">素材要求</p>
          </div>
          <div class="col-lg-6 contentTextBox">
            <p>1. 画板内宽高统一(px单位)的产品图片</p>
            <p>2. 如需要背景色变化需要提供对应色值</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ======= End ColorContent ======= -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      asset: "1",
      startOpen: 0,
      colorName: [
        "Pearl White",
        "Champagne",
        "Forest Green",
        "Coral Red",
        "Calm Blue",
        "Matte Black",
      ],

      colorValue: [
        "#f2f2f6",
        "#cec4bd",
        "#74d7c3",
        "#e67275",
        "#445f66",
        "#56555b",
      ],
      colorAnimation: [
        "rgba(242, 242, 246, 0.4)",
        "rgba(206, 196, 189, 0.4)",
        "rgba(116, 215, 195, 0.4)",
        "rgba(230, 114, 117, 0.4)",
        "rgba(68, 95, 102, 0.4)",
        "rgba(86, 85, 91, 0.4)",
      ],
    };
  },
  methods: {
    scrollEvent() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > this.startOpen && scrollTop < this.startOpen + 4000) {   // 500 为间距
        let offset = Math.floor(((scrollTop - this.startOpen) / 4000) * 7);    // 图片数量
        this.asset = offset < 1 ? 1 : offset > 6 ? 6 : offset;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent, false);
  },
};
</script>

<style scoped>
.colorApp {
  width: 100%;
  min-height: 100vh;
  transition: all 0.6s ease-in-out;
}
/* ColorScreen */
.colorScreen {
  width: 100%;
  height: 500vh;
  position: relative;
}
.colorWrapper {
  height: 100vh;
  top: 0;
  left: 0;
  position: sticky;
}
.colorImgWrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.colorImgWrapper img {
  transition: all 0.3s ease-in-out;
}
.colorSpan {
  position: absolute;
  top: 50%;
  font-size: 36px;
  font-weight: 500;
  left: 25%;
  transition: all 0.3s ease-in-out;
}
/* Content */
.colorContent {
  width: 100%;
  padding: 60px 0;
}
.contentTitle {
  font-size: 36px;
  font-weight: 500;
}
.contentTextBox {
  font-size: 18px;
  font-weight: 400;
}
</style>
