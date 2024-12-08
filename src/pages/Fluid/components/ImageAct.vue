<template>
  <section class="fluidPage">
    <div class="imageBox"></div>
  </section>
</template>

<style lang="less" scoped>
.fluidPage {
  position: relative;
  height: 56.25vw;
  width: 100%;
  background-image: url(@/assets/fluid/bg.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.imageBox {
  position: absolute;
  top: 6vw;
  left: 63.5vw;
  height: 46.4583vw;
  width: 24.1145vw;
  background: url(@/assets/fluid/1.webp);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0;
  animation: lineAnimation 3000ms ease-in infinite;
}

@keyframes lineAnimation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
