<template>
  <section class="fluidPage">
    <div class="imageBox">
      <img src="@/assets/fluid/1.webp" alt="" />
      <div class="lineLeft"></div>
      <div class="lineRight"></div>
    </div>
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
  .lineLeft {
    top: 10%;
    left: 43%;
    position: absolute;
    height: 75%;
    width: 1vw;
    overflow: hidden;
    border-radius: 100%;
    transform: rotate(22.5deg);
  }
  .lineLeft::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    filter: drop-shadow(0 0 0.1vw #3778e5) drop-shadow(0 0 0.25vw #3778e5)
      drop-shadow(0 0 0.5vw #3778e5) drop-shadow(0 0 1vw #3778e5);
    background: linear-gradient(to top, #3778e5, #065cf1);
    border-radius: 100%;
    opacity: 0;
    animation: lineAnimation 3000ms ease-in-out 2000ms infinite;
  }


  .lineRight {
    top: 10%;
    left: 56%;
    position: absolute;
    height: 75%;
    width: 1vw;
    overflow: hidden;
    border-radius: 100%;
    transform: rotate(22.5deg);
  }
  .lineRight::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    filter: drop-shadow(0 0 0.1vw #3778e5) drop-shadow(0 0 0.25vw #3778e5)
      drop-shadow(0 0 0.5vw #3778e5) drop-shadow(0 0 1vw #3778e5);
    background: linear-gradient(to top, #3778e5, #065cf1);
    border-radius: 100%;
    opacity: 0;
    animation: lineAnimation 3000ms ease-in-out infinite;
  }
  @keyframes lineAnimation {
    0% {
      transform: translateY(100%) scaleX(1);
      opacity: 0.1;
    }
    20% {
      transform: translateY(100%) scaleX(1);
      opacity: 0.9;
    }
    80% {
      transform: translateY(10%) scaleX(1);
      opacity: 0.4;
    }
    100% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
  }

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
