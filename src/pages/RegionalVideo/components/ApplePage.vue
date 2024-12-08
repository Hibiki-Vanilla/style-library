<template>
  <section class="page">
    <div class="con">
      <div class="wrap">
        <video
          id="stabilization-media"
          class="inline-media"
          autoplay
          preload
          loop
          muted="muted"
          aria-label="使用运动模式拍摄的一段视频，手持跟拍一名男子在体育场的露天看台上奔跑，但拍出的画面平稳流畅。"
          src="@/assets/video/layout/large_2x.mp4"
        ></video>
        <picture
          id="overview-stabilization-hyper-stable-hw-1"
          class="overview-stabilization-hyper-stable-hw picture picture-stable-hw loaded"
          data-lazy=""
          aria-hidden="true"
          data-picture-loaded=""
        >
          />
          <img
            src="@/assets/video/layout/window.png"
            onload="__lp(event)"
            alt=""
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.page {
  padding-bottom: 150px;
  background-color: #f5f5f7;
  overflow: hidden;
}
.con {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
}
.wrap {
  position: relative;
  margin: 0;
  z-index: 0;
}

// video
.inline-media {
  box-shadow: inset 0 0 0 1px #000, 0 0 0 1px #000;
  --media-center-offset: -2px;
  left: 50%;
  position: absolute;
  top: 143px;
  border-radius: 12px;
  overflow: hidden;
  transform: translateX(calc(-50% + var(--media-center-offset)));
  width: 1040px;
}

.overview-stabilization-hyper-stable-hw {
  --picture-center-offset: 310px;
  --p-width: 1708px;
  --p-height: 1020px;
  position: relative;
  left: 50%;
  transform: translateX(calc(-50% + var(--picture-center-offset)));
  margin: -45px 0 -344px;
  display: block;
  width: var(--p-width);
  height: var(--p-height);
}
</style>
