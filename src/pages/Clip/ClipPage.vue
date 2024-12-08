<template>
    <div class="clipPage">
      <div class="title">使用参数或SVG绘制背景图范围</div>
        <ClipBlock/>
    </div>
</template>


<script>
import ClipBlock from "./components/ClipBlock.vue";

export default {
      name: "ClipPage",
  components: { ClipBlock },
}
</script>


<style scoped lang='less'>
/*--------------------------------------------------------------
# ColorPage
--------------------------------------------------------------*/
.clipPage {
  width: 100%;
  min-height: 100vh;
  .title{
    padding-top: 50px;
    text-align: center;
  }
}
</style>