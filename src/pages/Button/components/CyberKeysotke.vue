<template>
  <section class="CyberKeystoke">
    <div class="button"></div>
  </section>
</template>

<style lang="less" scoped>
.CyberKeystoke {
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  width: 1000px;
  margin: 0 auto;
  background: black;

  .button,
  .button::after {
    cursor: pointer;
    width: 224px;
    height: 47px;
    background-image: url("@/assets/button/cyber.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    text-align: center;
  }
  .button::after {
    // 上 右 下 左
    --sliceZero: inset(50% 50% 50% 50%);
    --sliceOne: inset(70% -0.5vw 0 0);
    --sliceTwo: inset(40% -0.5vw 30% 0);
    --sliceThree: inset(15% 0 65% 0);
    --sliceFour: inset(35% -0.2vw 43% 0);
    --sliceFive: inset(75% 1.5vw 5% 0);

    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    color: aliceblue;
    clip-path: var(--sliceZero);
  }
  .button:hover {
    animation: buttonHover 800ms;
    animation-timing-function: steps(2, end);
  }
  .button:hover::after {
    animation: glitch 800ms;
    animation-timing-function: steps(2, end);
  }

  @keyframes buttonHover {
    0% {
      opacity: 0.9;
      transform: scale(1);
    }
    20% {
      opacity: 1;
      transform: scale(0.95);
    }
    30% {
      opacity: 0.3;
      transform: scale(1);
    }
    40% {
      opacity: 1;
      transform: scale(0.98);
    }
    50% {
      transform: scale(1);
    }
    80% {
      opacity: 0.2;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes glitch {
    0% {
      // clip-path 图形切割
      clip-path: var(--sliceOne);
      transform: translate(-1vw, -0.5vw);
    }

    10% {
      clip-path: var(--sliceThree);
      transform: translate(0.5vw, 0.5vw);
    }

    20% {
      clip-path: var(--sliceOne);
      transform: translate(-0.5vw, 0.5vw);
    }

    30% {
      clip-path: var(--sliceThree);
      transform: translate(0px, 0.5vw);
    }

    40% {
      clip-path: var(--sliceTwo);
      transform: translate(-0.5vw, 0);
    }

    50% {
      clip-path: var(--sliceThree);
      transform: translate(0.5vw, 0px);
    }

    60% {
      clip-path: var(--sliceFour);
      transform: translate(0.25vw, 0.5vw);
    }

    70% {
      clip-path: var(--sliceTwo);
      transform: translate(-0.5vw, 0.5vw);
    }

    80% {
      clip-path: var(--sliceFive);
      transform: translate(1vw, -0.5vw);
    }

    90% {
      clip-path: var(--sliceOne);
      transform: translate(-0.5vw, 0px);
    }

    100% {
      clip-path: var(--sliceOne);
      transform: translate(0);
    }
  }
}
</style>
