<template>
  <div class="bg">
    <section class="g-sun"></section>
    <div class="grid"></div>
    <div class="grid"></div>
    <div class="g-mountain"></div>
    <svg width="0">
      <filter id="filter">
        <feTurbulence
          id="turbulence"
          type="fractalNoise"
          baseFrequency=".03"
          numOctaves="20"
        />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
    <svg width="0">
      <filter id="filter2">
        <feTurbulence
          id="turbulence"
          type="fractalNoise"
          baseFrequency=".02"
          numOctaves="20"
        />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
  </div>
</template>

<style lang="less" scoped>
@c1: hsl(219, 79%, 66%);
@c2: #d733b3;
@c3: #43256b;
@c4: #af308f;
@c5: #f33434;
@c6: #e3e345;
@c7: #f97246;

.bg {
  perspective: 300px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(@c3, @c2);
  }
}
// 太阳
.g-sun {
  position: absolute;
  top: 0%;
  left: 0;
  bottom: 43%;
  right: 0;
  z-index: 1;
  -webkit-box-reflect: below -50px linear-gradient(rgba(255, 255, 255, 0.2), transparent);
  background: radial-gradient(circle at 50% 100%, @c5, @c4);
  &::before {
    content: "";
    position: absolute;
    bottom: 20%;
    left: 10%;
    right: 10%;
    top: 0%;
    background: radial-gradient(
      circle at 50% 100%,
      @c7,
      @c6 55%,
      transparent 55.1%,
      transparent
    );
    -webkit-mask: linear-gradient(
      to top,
      #000 0,
      #000 10%,
      transparent 9%,
      transparent 13%,
      #000 13%,
      #000 20%,
      transparent 20%,
      transparent 22%,
      #000 22%,
      #000 35%,
      transparent 35%,
      transparent 36%,
      #000 36%,
      #000 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 3px,
      rgba(0, 0, 0, 0.5) 4px,
      rgba(0, 0, 0, 0.5) 5px
    );
  }
}
// 网格
.grid {
  position: absolute;
  width: 300vw;
  height: 600px;
  left: -100vw;
  top: 55vh;
  transform-style: preserve-3d;
  background: repeating-linear-gradient(
      @c1,
      @c1 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      @c1,
      @c1 1px,
      transparent 1px,
      transparent 20px
    );
  z-index: 1;
  transform: translate3d(0, 0, 0) rotateX(90deg);
  transform-origin: 50% 0;
  animation: move 20s infinite linear;
}
.grid:nth-child(2) {
  animation: move 20s infinite -10s linear;
}

// 山脉
.g-mountain {
  position: absolute;
  left: 0;
  right: 0;
  top: 15%;
  bottom: 42%;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 78%;
    color: #011d3f;
    background: #011d3f;
    width: 15vw;
    height: 15vw;
    transform: rotate(-45deg);
    filter: url("#filter");
    z-index: 2;
    box-shadow: -3vw -3vw, 5vw 5vw, 10vw 10vw 0 3vw, 15vw 20vw 0 4vw,
      22vw 22vw 0 6vw, 25vw 30vw 0 12vw, 38vw 36vw 0 1vw, 41vw 39vw 0 3vw,
      45vw 45vw 0 2vw, 52vw 52vw 0 4vh, 55vw 55vw 0 1.5vw, 61vw 61vw 0 0.5vw,
      68vw 68vw 0 0;
  }

  &::after {
    left: 1%;
    top: 74%;
    color: #23388d;
    z-index: 1;
    filter: url("#filter2");
  }
}

@keyframes move {
  0% {
    transform: translate3d(0, 0, -600px) rotateX(90deg);
  }
  100% {
    transform: translate3d(0, 0, 600px) rotateX(90deg);
  }
}
</style>
