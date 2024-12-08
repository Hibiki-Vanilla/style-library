<template>
  <section class="colorApp">
    <div class="colorScreen">
      <div class="container">
        <div class="row">
          <!-- ======= Text ======= -->
          <div
            class="col-lg-6 d-flex justify-content-center colorContent align-items-center"
          >
            <p>点击颜色块切换图片</p>
            <span>1. 画板内宽高统一(px单位)的产品图片</span>
            <span>2. 点击区域形状(圆形或方形),间距</span>
          </div>
          <!-- ======= End Text ======= -->

          <!-- ======= Picture ======= -->
          <div class="col-lg-6">
            <div class="colorClickBox">
              <div class="img-box">
                <img
                  v-for="(item, index) of 6"
                  :key="index"
                  :class="{ act: index === nowColor }"
                  :src="require(`@/assets/color/${index + 1}.webp`)"
                  alt="图片"
                />
              </div>
              <div class="img-rairu-row">
                <div
                  class="img-rairu"
                  v-for="(item, index) of colorValue"
                  :style="{ background: colorValue[index] }"
                  :key="index"
                  @click="nowColor = index"
                ></div>
              </div>
            </div>
          </div>
          <!-- ======= End Picture ======= -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nowColor: 0,
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
    };
  },
};
</script>
<style scoped>
/* ColorScreen */
.colorScreen {
  width: 100%;
  height: 100vh;
  position: relative;
}
.colorContent {
  font-size: 36px;
  font-weight: 500;
  flex-direction: column;
}
.colorContent span {
  font-size: 18px;
  font-weight: 400;
}
.colorClickBox {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-box {
  width: 100%;
  height: 500px;
  position: relative;
}
.img-box img {
  position: absolute;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
}
.img-box img.act {
  opacity: 1;
}

.img-rairu-row {
  padding-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.img-rairu {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
</style>
