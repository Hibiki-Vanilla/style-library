<template>
  <!-- ======= DemoPage ======= -->
  <section class="demoPage">
    <Kalmia />
  </section>
  <!-- ======= End DemoPage ======= -->
</template>

<script>
import Kalmia from "./components/Kalmia.vue";

export default {
  name: "ColorPage",
  components: { Kalmia },
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
