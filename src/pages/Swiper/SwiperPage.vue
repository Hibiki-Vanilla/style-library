<template>
  <div class="swiperBox">
    <div class="textBox">基础轮播图</div>
    <DefaultBanner />
    <div class="textBox">上下滚动轮播图</div>
    <VerticalBanner/>
    <div class="textBox">指示器轮播图</div>
    <PaginationSwiper />
    <div class="textBox">横向聚焦轮播图</div>
    <FocusSwiper />
    <div class="textBox">双重轮播图</div>
    <DouleSwiper />

  </div>
</template>

<script>
import DefaultBanner from "./components/DefaultBanner.vue";
import VerticalBanner from "./components/VerticalBanner.vue";
import PaginationSwiper from "./components/PaginationSwiper.vue";
import FocusSwiper from "./components/FocusSwiper.vue";
import DouleSwiper from "./components/DouleSwiper.vue";



export default {
  name: "SwiperPage",
  components: { DefaultBanner,VerticalBanner,PaginationSwiper,FocusSwiper,DouleSwiper },
};
</script>

<style lang="less" scoped>
.swiperBox {
  height: 100%;
  width: 100%;
  .textBox {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
