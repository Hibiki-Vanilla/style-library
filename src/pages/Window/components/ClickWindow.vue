<template>
  <section class="clickWindow">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="windowButtom" @click="windowVh" role="buttom">
            点击展开全屏提示窗
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="windowButtom"
            @mouseenter="windowTip"
            @mouseleave="windowTipMouseleave"
            role="buttom"
          >
            移入展开小型提示窗
            <div class="windowTip" v-show="windowStatus === 2">
              提示窗，形状和内容可以修改
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="windowButtom" @click="windowTop" role="buttom">
            点击顶部小型提示窗
          </div>
        </div>
        <div class="col-lg-4">
          <div class="windowButtom" @click="windowComStatus" role="buttom">
            点击打开官网提示窗户
          </div>
        </div>
      </div>
    </div>
    <div class="fixedWindow" v-show="windowStatus === 1">
      <div class="fixedWindowBox">
        <h3>全屏模式提示窗</h3>
        <p>1. 提示窗背景可以替换成图片</p>
        <p>2. 展开后蒙层阻挡页面内容,如不取消提示窗,则无法操作页面内容</p>
        <div class="row d-flex justify-content-center">
          <div class="canelfixedWindow" @click="canelfixedWindow" role="button">
            点击关闭
          </div>
        </div>
      </div>
    </div>
    <div class="windowTopStatus" v-show="windowTopStatus">两秒后关闭提示窗</div>
    <SpinngWindow :comStatus="comStatus" v-on:closeMain="closeMain" />
  </section>
</template>
<script>
import SpinngWindow from "./SpinngWindow.vue";
export default {
  components: { SpinngWindow },
  data() {
    return {
      comStatus: false,
      windowStatus: false,
      windowTopStatus: false,
    };
  },
  methods: {
    windowVh() {
      this.windowStatus = 1;
    },
    canelfixedWindow() {
      this.windowStatus = false;
    },
    windowTip() {
      this.windowStatus = 2;
    },
    windowTipMouseleave() {
      this.windowStatus = false;
    },
    windowTop() {
      this.windowTopStatus = true;
      setTimeout(() => {
        this.windowTopStatus = false;
      }, 2000);
    },
    windowComStatus() {
      this.comStatus = true;
    },
    closeMain(val) {
      this.comStatus = val;
    },
  },
};
</script>

<style scoped>
.clickWindow {
  min-height: 100vh;
  width: 100%;
  padding: 150px 0;
}
.windowButtom {
  position: relative;
  height: 48px;
  width: 200px;
  margin-bottom: 20px;
  color: #fff;
  background-color: gray;
  border-color: chocolate;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
}

.fixedWindow {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fixedWindowBox {
  width: 800px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-sizing: border-box;
}
.canelfixedWindow {
  padding: 10px;
  background-color: #ffe100;
}
.windowTip {
  position: absolute;
  left: 0;
  bottom: -110px;
  width: 300px;
  padding: 10px;
  height: 100px;
  background-color: #fff;
  border: solid 1px #000;
  color: #000;
  border-radius: 20px;
}
.windowTopStatus {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #000;
}
</style>
