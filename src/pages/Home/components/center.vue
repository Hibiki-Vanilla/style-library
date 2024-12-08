<template>
  <div id="center">
    <div class="wrapper">
      <div class="slash"></div>
      <div class="sides">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
      </div>
      <div class="text">
        <div class="text--backing">HIBIKI样式库</div>
        <div class="text--left">
          <div class="inner">HIBIKI样式库</div>
        </div>
        <div class="text--right">
          <div class="inner">HIBIKI样式库</div>
        </div>
      </div>
    </div>
    <div class="loading">
      <span class="status online"></span>
      <span class="status visible"></span>
      <span class="status idle"></span>
      <span class="status offline"></span>
    </div>
    <div class="navgation d-flex align-items-center justify-content-center flex-wrap">
      <i
        v-for="(item, index) in navgation"
        @click="triggerPage(item.path)"
        :key="index"
        >{{ item.name }}</i
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterComponents",
  data() {
    return {
      // navgation: [
      //   {
      //     name: "基础介绍",
      //     path: "/about",
      //   },
      //   {
      //     name: "创意提供",
      //     path: "/about",
      //   },
      // ],
    };
  },
  methods: {
    triggerPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  padding-top: 0.33rem;
  padding-left: 0.25rem;
  padding-right: 0.18rem;
  padding-bottom: 0.1rem;
}
.slash {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(60deg) scaleY(0);
  transform: translate(-50%, -50%) rotate(60deg) scaleY(0);
  -webkit-transform-origin: center center;
  transform-origin: center center;
  width: 2px;
  height: 140%;
  background: #fff;
  z-index: 4;
  box-shadow: 0 0 10px #27ae60;
  -webkit-animation: slash 6s ease-in infinite;
  animation: slash 6s ease-in infinite;
}

.slash:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 0.37rem;
  height: 120%;
  background: #232323;
  z-index: -1;
}
.slash:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.sides {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.sides .side {
  position: absolute;
  background: #fff;
}
.sides .side:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  -webkit-transform: translateX(-101%);
  transform: translateX(-101%);
  -webkit-animation: side-top ease 6s infinite;
  animation: side-top ease 6s infinite;
  box-shadow: 0 0 10px #ffd700;
}
.sides .side:nth-child(2) {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  -webkit-transform: translateY(-101%);
  transform: translateY(-101%);
  -webkit-animation: side-right ease 6s infinite;
  animation: side-right ease 6s infinite;
}
.sides .side:nth-child(3) {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  -webkit-transform: translateX(101%);
  transform: translateX(101%);
  -webkit-animation: side-bottom ease 6s infinite;
  animation: side-bottom ease 6s infinite;
}
.sides .side:nth-child(4) {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  -webkit-transform: translateY(101%);
  transform: translateY(101%);
  -webkit-animation: side-left ease 6s infinite;
  animation: side-left ease 6s infinite;
}

.text {
  position: relative;
  font-size: 40px;
}
.text--backing {
  opacity: 0;
}
.text--left {
  position: absolute;
  top: 0;
  left: 0;
  width: 51%;
  height: 100%;
  overflow: hidden;
}
.text--left .inner {
  white-space: nowrap;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-animation: text-left 6s ease-in-out infinite;
  animation: text-left 6s ease-in-out infinite;
}

.text--right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.text--right .inner {
  white-space: nowrap;
  -webkit-transform: translateX(-200%);
  transform: translateX(-200%);
  -webkit-animation: text-right 6s ease-in-out infinite;
  animation: text-right 6s ease-in-out infinite;
}

// key frames

@keyframes slash {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
  }
  6% {
    -webkit-transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
    transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
  }
  13% {
    -webkit-transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
    transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
  }
  16.6% {
    -webkit-transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
  }
}

@keyframes side-top {
  0%,
  14% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }
  24%,
  55% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  65% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
  100% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
}
@keyframes side-right {
  0%,
  14%,
  23% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }
  30%,
  62% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  72% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }
  100% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }
}
@keyframes side-bottom {
  0%,
  14%,
  24%,
  28% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
  37%,
  70% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  79% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }
  100% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }
}

@keyframes side-left {
  0%,
  14%,
  24%,
  34%,
  35% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }
  44%,
  79% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  86% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }
  100% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }
}

@keyframes text-left {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  10% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  58% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  70% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
}

@keyframes text-right {
  0% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  10% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  58% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  70% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}

// loading
.loading {
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  .status {
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 10px;
  }
  .status.online,
  .status.online:before {
    background: #72ff7d;
  }
  .status.offline,
  .status.offline:before {
    background: #ff4242;
  }
  .status.visible,
  .status.visible:before {
    background: #42e5ff;
  }
  .status.idle,
  .status.idle:before {
    background: #ffda72;
  }
  .status:before {
    content: "";
    display: block;
    position: absolute;
    left: -5px;
    top: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in;
  }
  @keyframes pulse {
    from {
      transform: scale(0.5);
      opacity: 1;
    }
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
}

.navgation {
  i {
    margin: 0.2rem;
  }
}
.navgation,
.talk-method {
  margin: 0.4rem 0;
  white-space: nowrap;
  font-size: 16px;
  color: white;
  i {
    color: white;
    font-size: 16px;
    transition: all 0.6s;
    cursor: pointer;
  }
  span {
    margin-right: 10px;
    font-size: 14px;
  }
  i:hover {
    color: rgb(66, 245, 135);
    opacity: 0.8;
  }
}
</style>
