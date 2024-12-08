<template>
  <div class="hoverPage">
    <HoverBlock />
    <HoverTwoBg />

  </div>
</template>

<script>
import HoverBlock from "./components/hoverBlock.vue";
import HoverTwoBg from './components/hoverTwoBg.vue'
export default {
  components: { HoverBlock,HoverTwoBg },
};
</script>

<style lang="less" scoped>
.hoverPage {
  padding: 100px 0;
  width: 100%;
  min-height: 100vh;
}
</style>
