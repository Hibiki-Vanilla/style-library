<template>
  <section class="page">
    <p class="text">
      灵动的 iPhone 新玩法，迎面而来。重大的安全新功能，为拯救生命而设计。创新的
      4800 万像素主摄，让细节纤毫毕现。更有 iPhone
      芯片中的速度之王，为一切提供强大原动力。
    </p>
  </section>
</template>

<style lang="less" scoped>
.page {

    display: flex;
  height: 100vh;
  width: 100%;
  background: #000;
}
.text {
    position: relative;
        width: 800px;
        font-size: 40px;
        color: transparent;
        margin: auto;
        line-height: 1.5;
        padding: 20px;
        background: linear-gradient(-4deg, transparent, transparent 25%, #ffb6ff, #b344ff,transparent 75%, transparent);
        -webkit-background-clip: text;
        background-size: 100% 400%;
        background-position: center 0;
        animation: textScroll 6s infinite linear alternate;
}

@keyframes textScroll {
    100% {
        background-position: center 100%;
    }
}

</style>
