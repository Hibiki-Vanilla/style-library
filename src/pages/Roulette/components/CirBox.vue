<template>
  <section class="cirBox">
    <div class="spinCon">
      <img
        class="spinBottom"
        src="https://files.myuwell.com/uwell/promotion/caliburn-g3-2023/spinBottom.webp"
        alt=""
      />
      <div class="spinDial">
        <!-- bg -->
        <div class="spinDialBg bgItem" :style="rotateStyle"></div>
        <div
          class="spinDialButtom bgItem"
          @click="spinRun"
        ></div>
      </div>

      <img
        class="spinTop"
        src="https://files.myuwell.com/uwell/promotion/caliburn-g3-2023/spinTop.webp"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goStatus: false,
      isrun: false,

      rotateAngle: 0, // 旋转角度
      config: {
        duration: 3500, // 总旋转时间 ms级
        circle: 8, // 旋转圈数
        mode: "ease-in-out", // 由快到慢 惯性效果都省了
      },
      cricleAdd: 1, // 第几次抽奖
      drawIndex: 2, // 中奖索引 转盘图片排序 指针右手开始 0-...
    };
  },
  computed: {
    rotateStyle() {
      const _c = this.config;

      return `
        -webkit-transition: transform ${_c.duration}ms ${_c.mode};
        transition: transform ${_c.duration}ms ${_c.mode};
        -webkit-transform: rotate(${this.rotateAngle}deg);
            transform: rotate(${this.rotateAngle}deg);`;
    },
  },
  methods: {
    spinRun() {
        if (this.isrun) return;
        const randomNum = Math.floor(Math.random() * 8) + 1;
        this.drawIndex = randomNum;
        this.isrun = true;
            this.rotateAngle =
              this.config.circle * 360 * this.cricleAdd -
              (22.5 + this.drawIndex * 45);
            // 圈数位置解析
            // this.config.circle * 360 * this.cricleAdd 顺时针总圈数/累积总圈数
            // 22.5 + this.drawIndex * 45 ===> (奖品位置 === this.drawIndex * 45) (指针中间位置 === 22.5)
            this.cricleAdd++;

            setTimeout(() => {
              this.isrun = false;
            }, this.config.duration);
      },

  },
  mounted() {
    console.log(window.performance);
  },
};
</script>

<style lang="scss" scoped>
.cirBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0;

  .bgItem {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }

  .spinCon {
    position: relative;
    width: 43.07vw;
    height: 43.07vw;
  }

  .spinTop {
    position: absolute;
    top: -2vw;
    left: 50%;
    transform: translate(-50%, 0);
    width: 5.88vw;
    height: 7.08vw;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
  }

  .spinBottom {
    position: absolute;
    top: 39vw;
    left: 50%;
    transform: translate(-50%, 0);
    height: 9.89vw;
    width: 29.16vw;
  }

  .spinDial {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .spinDialBg {
    background-image: url(https://files.myuwell.com/uwell/promotion/caliburn-g3-2023/spinCon.webp);
    height: 100%;
    width: 100%;
  }

  .spinDialButtom {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5.57vw;
  height: 2.65vw;
  transform: translate(-50%, -50%);
  background-image: url(https://files.myuwell.com/uwell/promotion/caliburn-g3-2023/goGray.webp);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}
}
</style>
