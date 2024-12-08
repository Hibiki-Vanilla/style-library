<template>
  <section class="page">
    <img class="top productImg" src="@/assets/images/product/top.png" alt="" />
    <img
      class="bottom productImg"
      src="@/assets/images/product/bottom.png"
      alt=""
    />
  </section>
</template>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 56.25vw;
  overflow: hidden;
  background-image: url("@/assets/images/product/bg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .productImg {
    position: absolute;
  }

  .top {
    right: 11.5vw;
    top: -3.8vw;
    width: 15vw;
    animation: top 6s ease-in-out 1s infinite alternate;
  //  animation: bottom 2s infinite ease;
}
  .bottom {
    right: 20vw;
    top: 10.5vw;
    width: 24vw;
    animation: bottom 2s infinite ease;
  }

  @keyframes top {
    0% {
      transform: none;
    }
    33% {
      transform: translate(-6px, 6px) rotate(-5deg);
    }
    66% {
      transform: translate(-4px, -5px) rotate(-3deg);
    }
    100% {
      transform: translate(-1px, 5px) rotate(0);
    }
  }

  @keyframes bottom {
    0% {
      transform: translate(0, 0) rotate(0);
    }
     48% {
     transform: translate(0, 0) rotate(0);
    }
    50% {
      transform: translate(0.1vw, 0.1vw) rotate(1deg);
    }
    55% {
      transform: translate(-0.1vw, -0.1vw) rotate(-1deg);
    }
    60% {
      transform: translate(0.1vw, 0.1vw) rotate(1deg);
    }
    65% {
      transform: translate(-0.1vw, -0.1vw) rotate(-1deg);
    }
    70% {
      transform: translate(0, 0) rotate(0);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
}
</style>
