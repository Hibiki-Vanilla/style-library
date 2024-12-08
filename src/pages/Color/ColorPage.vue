<template>
  <!-- ======= ColorPage ======= -->
  <section class="colorPage">
      <StikcyColor />
      <ClickColor />
      <RowColor/>
  </section>
  <!-- ======= End ColorPage ======= -->
</template>

<script>
import StikcyColor from "./components/StikcyColor.vue";
import ClickColor from "./components/ClickColor.vue";
import RowColor from "./components/RowColor.vue";

export default {
  name: "ColorPage",
  components: { StikcyColor,ClickColor,RowColor },

};
</script>

<style scoped>
/*--------------------------------------------------------------
# ColorPage
--------------------------------------------------------------*/
.colorPage {
  width: 100%;
  min-height: 100vh;
}
</style>
