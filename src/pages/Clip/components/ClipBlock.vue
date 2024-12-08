<template>
  <div>
    <div class="clipBlock">
      <div class="box">
        <div class="clipboard"></div>
      </div>
      <div class="box">
        <div
          class="clipboard"
          :style="'clip-path: polygon(50% 0%, 0% 100%, 100% 100%)'"
        ></div>
      </div>
      <div class="box">
        <div
          class="clipboard"
          :style="'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'"
        ></div>
      </div>

      <div class="box">
        <div class="clipboard" :style="'clip-path: circle(50% at 50% 50%)'"></div>
      </div>
      <div class="box">
        <div
          class="clipboard"
          :style="'clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);'"
        ></div>
      </div>
      <div class="box">
        <div
          class="clipboard"
          :style="'clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);'"
        ></div>
      </div>

      <div class="box">
        <div class="clipboardAct"></div>
      </div>
      <div class="box">
        <div class="clipboard clipboardRight"></div>
      </div>
      <div class="box"></div>
    </div>

    <svg height="0" width="0">
      <defs>
        <clipPath id="svgPath">
          <path
            id="heart"
            d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style lang="less" scoped>
.clipBlock {
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  margin: 0 auto;

  .clipboard {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #d3d0c9;
    background-image: url("@/assets/images/bgFix2.jpg");
    background-size: cover;
    background-position: center center;
  }

  .clipboardAct {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #d3d0c9;
    background-image: url("@/assets/images/bgFix2.jpg");
    background-size: cover;
    background-position: center center;
    animation: clipFrames 3s infinite linear;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transition: all 0.3s ease-in-out;
  }
  .clipboardRight {
    clip-path: url(#svgPath);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes clipFrames {
  0% {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%);
  }
  100% {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
}

.box {
  width: 300px;
  height: 300px;
  position: relative;
  box-shadow: inset 0 0 0 10px #fbfcf7, inset 0 0 0 11px #d3d0c9;
  -ms-touch-action: none;
  touch-action: none;
}
</style>
