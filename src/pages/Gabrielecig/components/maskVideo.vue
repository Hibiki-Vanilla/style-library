<template>
  <!-- 视频窗 -->
  <div
    v-if="maskStatus"
    class="common-mask"
    :class="{ 'common-mask-act': maskStatus }"
  >
    <div
      class="custom-mihoyo-common-container"
      style="animation-duration: 250ms; transition-duration: 250ms"
    >
      <div class="home-pv-close" @click="maskStatusChange"></div>
      <video
        src="https://files.myuwell.com/blob/gabriel/home-promotionalvideo/GABRIEL%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91%EF%BC%88%E4%BA%8C%E6%AC%A1%E5%89%AA%E8%BE%91%EF%BC%89_new_file(3)_x264-20220914134806.mp4"
        controls="controls"
        autoplay
        preload
        class="home-pv-video"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerDiv",
  props: {
    maskStatus: {
      type: Boolean,
      default: false,
    },
    maskStatusChange: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes masked {
  0% {
    background-color: rgba(0, 0, 0, 0.6);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.9);
  }
}

@keyframes videoshow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.common-mask {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 99999;
  animation-duration: 250ms;
  transition-duration: 250ms;
  animation: masked 180ms linear backwards;
  transition: all 250ms;
  .custom-mihoyo-common-container {
    animation-duration: 250ms;
    transition-duration: 250ms;
    position: relative;
    .home-pv-close {
      position: absolute;
      right: -64px;
      top: -14px;
      z-index: 9;
      width: 60px;
      height: 60px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARRJREFUSEvN18sNwjAMgOE/VxZgBmAIBEuwASdWYAcuHNiAKXgsATMwhVFQQaI0tWMaSo+Vmi+uk9gJIjIBtsAihHCj4CMiQ2APrIKInIApcAVmpfAKPQBj4BzhOIsjMCqFNxrxz5bEU2OHZ0pL4G1jvuCuI9cCeYO7wjU0Oh/wt7gFTcJe3Iq2wg34BZin9nkOqsJWPBc1wRruQc1wCq/OANep17iqU3WiFl3MefzeddRmwQ2Rx1eu4vIt7EKzcuzd26m0mSNuW70iMgA2wNpaz02wtmVEZAcsc/KtwhrqTUErbEG99TwJ56Ae/H/KoifS+paxjNF/62OZZW6vrzZ7JVBtwfXX0P/4CvOs3Y8rTC+XtjtsokIg6khevAAAAABJRU5ErkJggg==)
        no-repeat center center/30px 30px;
      cursor: pointer;
      transform: rotate(0);
      transition: transform 500ms, -webkit-transform 500ms;

      &:hover {
        transform: rotate(90deg);
      }
    }
    .home-pv-video {
      width: 1280px;
      animation: videoshow 250ms linear;
      transition: all 250ms;
    }
  }
}
.common-mask-act {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
</style>
