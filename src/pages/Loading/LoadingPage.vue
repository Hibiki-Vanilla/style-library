<template>
  <section class="text">
    <InterlacedMole />
    <div class="textRow">交错Loading效果</div>
    <DivisionModular />
    <div class="textRow">分割文本效果(单次)</div>
    <MiddleInterlacedModular />
    <div class="textRow">从中间展开效果</div>
    <AlphardexModular />
    <div class="textRow">滑动变化动画效果</div>
  </section>
</template>

<script>
import InterlacedMole from "./components/InterlacedMole.vue";
import DivisionModular from "./components/DivisionModular.vue";
import MiddleInterlacedModular from "./components/MiddleInterlacedModular.vue";
import AlphardexModular from "./components/AlphardexModular.vue";

export default {
  name: "LoadingPage",
  components: {
    InterlacedMole,
    DivisionModular,
    MiddleInterlacedModular,
    AlphardexModular,
  },
  mounted() {

  },
};
</script>

<style scoped>
.textRow {
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
