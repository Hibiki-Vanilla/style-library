<template>
  <section class="fluidPage">
        <LineAct/>
        <ImageAct/>
  </section>
</template>



<script>
import LineAct from "./components/LineAct.vue";
import ImageAct from "./components/ImageAct.vue";


export default {
  name: "FluidPage",
  components: { LineAct,ImageAct },

};
</script>