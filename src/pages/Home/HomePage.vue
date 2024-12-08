<template>
  <!-- ======= HomePage ======= -->
  <section class="HomePage">
    <div class="bg">
      <Center class="center" />
    </div>
  </section>
  <!-- ======= End HomePage ======= -->
</template>

<script>
import Center from "./components/center.vue";
export default {
  name: "HomePage",
  components: { Center },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100vh;
  // animation: change 15s infinite;
  background: linear-gradient(125deg, #2980b9, #633bd3, #8e44ad, #192f44, #27ae60);
  background-size: 800%;
  z-index: -99;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes change {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 100%;
  }
  100% {
    background-position-x: 0%;
  }
}
</style>
