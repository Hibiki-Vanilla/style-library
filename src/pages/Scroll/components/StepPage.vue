<template>
  <section class="stepPage">
    <!-- 主要模块高度 以及部分css内容 兼容sticky问题 -->
    <div class="oneMode">
      <!-- 内层con 用于计算此内的sticky元素到顶距离  -->
      <div class="oneModeCon">
        <!-- sticky元素 滑块内容 类似电影摄影轨道 -->
        <div class="oneModeSticky">
          <div class="modeImgCon">
            <picture>
              <source
                srcset="
                  https://files.myuwell.com/uwell/product/caliburn-explorer/mo/mode-1.webp
                "
                media="(max-width: 1000px)"
              />
              <img
                class="modeBgImg"
                src="https://files.myuwell.com/uwell/product/caliburn-explorer/pc/mode-1.webp"
                alt=""
              />
            </picture>
            <picture>
              <source
                srcset="
                  https://files.myuwell.com/uwell/product/caliburn-explorer/mo/mode-2.webp
                "
                media="(max-width: 1000px)"
              />
              <img
                class="modeBgImg modeBgImgOp"
                :class="[{ modeBgImgAct: modeIndex > 0 }]"
                src="https://files.myuwell.com/uwell/product/caliburn-explorer/pc/mode-2.webp"
                alt=""
              />
            </picture>

            <div class="modeTextCon">
              <div class="modeImgBoxMo">
                <img
                  class="modeImgButton"
                  src="https://files.myuwell.com/uwell/product/caliburn-explorer/mo/left.webp"
                  alt=""
                />
                <img
                  class="modeImgButton"
                  :class="[{ modeImgButtonAct: modeIndex > 0 }]"
                  src="https://files.myuwell.com/uwell/product/caliburn-explorer/mo/right.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 控制用数值
      modeIndex: 0,
    };
  },
  methods: {
    animationScroll() {
      this.modeIndex = this.stickyAnime(".oneModeCon", ".oneModeSticky", 3);
    },
    // *conName: sticky属性块的父级元素className,例：“.className”
    // *stickyName: sticky属性块的className,例：“.className”
    // *level: 滚动触发的次数,例:5
    stickyAnime(conName, stickyName, level) {
      const conOffsetHeight = document.querySelector(conName).offsetHeight;
      const stickyOffsetTop = document.querySelector(stickyName).offsetTop;
      const stickyOffsetHeight =
        document.querySelector(stickyName).offsetHeight;
      const rollNumber = (conOffsetHeight - stickyOffsetHeight) / level;
      const index = parseInt(stickyOffsetTop / rollNumber);
      return index;
    },
  },
  destroyed() {
      //离开该页面需要移除这个监听的事件
      window.removeEventListener("scroll", this.animationScroll);
    },
    mounted() {
      window.addEventListener("scroll", this.animationScroll);
    },
};
</script>

<style lang="less" scoped>
.titleColor {
  background: linear-gradient(90deg, #e38637, #fcddb5, #e38637);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.tipColor {
  color: #ffffff;
}
.oneMode {
  height: 200vh;
  width: 100%;

  .oneModeCon {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .oneModeSticky {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modeImgCon {
    position: relative;
    width: 85.57vw;
    height: 44.27vw;
  }

  .modeBgImg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .modeBgImgOp {
    opacity: 0;
    transition: opacity 0.3s linear;
    -webkit-transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    -ms-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
  }

  .modeBgImg.modeBgImgAct {
    opacity: 1;
  }

  .modeTextCon {
    position: absolute;
    top: 3.5vw;
    left: 37.8vw;
  }

  .modeTextCon .textSize {
    padding-top: 1.5vw;
    width: 40vw;
  }

  .modeImgBoxMo {
    display: none;
  }
}
</style>
