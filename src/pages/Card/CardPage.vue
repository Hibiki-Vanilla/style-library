<template>
  <!-- ======= CardPage ======= -->
  <section class="cardPage">
    <div class="container textContent">
      <h2>过渡动画效果</h2>
      <p>样例为灰色模块宽度从100px变化为300px时的过渡动画效果,鼠标移入触发。</p>
    </div>
    <TransitionCard />
    <div class="container textContent">
      <h2>组合样例</h2>
      <p>此例子为以上过渡动画效果组合制作,鼠标移入触发。</p>
    </div>
    <ListCard />
  </section>
  <!-- ======= End CardPage ======= -->
</template>

<script>
import ListCard from "./components/ListCard.vue";
import TransitionCard from "./components/TransitionCard.vue";

export default {
  name: "CardPage",
  components: { ListCard, TransitionCard },
};
</script>
<style scoped>
/*--------------------------------------------------------------
# CardPage
--------------------------------------------------------------*/
.textContent {
  padding: 25px 0;
  font-size: 18px;
  font-weight: 400;
}
</style>
