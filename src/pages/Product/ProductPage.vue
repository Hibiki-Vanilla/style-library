<template>
  <section class="product">
    <ProductFrames />
    <!-- FramesTip -->
    <div class="framesTip">
      <div class="container">
        <div class="row justify-content-center">
          <p class="contentTitle">滑动展开效果素材要求</p>
        </div>
        <div class="row contentTextBox">
          <p>
            根据产品是否有"镂空穿透"部分,"被拆解部分覆盖"的内容,提供2-3张图片,例子如下图:
            <br>
            <br>
            1. 左图: 实际移动部分。
            <br>
            2. 中间图: 展示部分,此内容不会移动。
            <br>
            3. 右图: 背面内容,存在移动部分背后,被移动部分覆盖,移动后正常展示。
          </p>
        </div>
        <div class="row">
          <img
            class="tipImg"
            v-for="(item, index) of tipImgList"
            :key="index"
            :src="item"
            alt=""
          />
        </div>
        <div class="row contentTextBox">
          <p>
            4. 图片素材要求使用同一宽高画布,将会把图片层级重叠组合。（如下图,灰色范围模拟画布范围）
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="tipImgBox">
            <img
              class="tipImgTestZinx"
              v-for="(item, index) of tipImgList"
              :key="index"
              :src="item"
            />
          </div>
        </div>
        <div class="row contentTextBox">
          <p>5. 图片素材格式要求为透明底Png或Webp,图片大小单张应小于500kb</p>
        </div>
      </div>
    </div>
    <!-- End FramesTip -->
    <ProductAmine />
    <div class="framesTip">
      <div class="container">
        <div class="row justify-content-center">
          <p class="contentTitle">帧动画展开效果素材要求</p>
        </div>
        <div class="row contentTextBox">
          <p>
            1. 由于动画效果是多张图片构成,需要多张不同位置状态的图片作为素材,整体素材体积较大。(当前案例使用16张图片)
          </p>
          <p>2. 图片素材要求使用同一宽高画布。</p>
          <p>3. 图片素材格式要求为透明底Png或Webp,图片大小单张应小于500kb。(由于图片较多,多色图片建议使用webp格式)</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductFrames from "./components/ProductFrames.vue";
import ProductAmine from "./components/ProductAmine.vue";

export default {
  name: "ProductPage",
  components: { ProductFrames, ProductAmine },
  data() {
    return {
      tipImgList: [
        "https://files.myuwell.com/blob/product/popreel-n1/tip.webp",
        "https://files.myuwell.com/blob/product/popreel-n1/body.webp",
        "https://files.myuwell.com/blob/product/popreel-n1/bodyBg.webp",
      ],
    };
  },
};
</script>

<style scoped>
.framesTip {
  width: 100%;
}
.contentTitle {
  padding: 20px 0;
  font-size: 36px;
  font-weight: 500;
}
.contentTextBox {
  padding: 20px 0;
  font-size: 18px;
  font-weight: 400;
}
.tipImg {
  width: 33%;
}
.tipImgBox {
  background-color: gray;
  height: 547px;
  width: 376px;
  position: relative;
}
.tipImgTestZinx {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
