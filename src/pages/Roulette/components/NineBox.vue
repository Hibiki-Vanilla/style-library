<template>
  <section class="nineBox">
    <div class="rollBoxCon">
      <div
        v-for="(item, index) in 9"
        :key="index"
        class="peizesItem"
        :class="[
          { peizesItemSeep: index % 2 },
          { peizesItemMid: item === 5 },
          { peizesItemNowBulr: item === nowRoll },
        ]"
      >
        <div v-if="item !== 5 && item !== 9" class="peizesNone">
            中奖图片
        </div>
        <img
          v-if="item === 5"
          @click="goRoll"
          class="peizesImg"
          src="https://files.myuwell.com/uwell/event/caliburnzega-double-fun-2023/pc/button.webp"
        />
        <img v-if="item === 9" class="peizesImg" src="https://files.myuwell.com/uwell/event/caliburnzega-double-fun-2023/pc/box/thanks.webp" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nowRoll: 1,
      rollStatus:false
    };
  },
  methods:{
    goRoll(){
        // this.rollStatus = true;
        const randomNum = Math.floor(Math.random() * 8) + 1;
        this.drawIndexChange(randomNum);
    },
    stopTime(time) {
        return new Promise((res) => {
          setTimeout(res, time);
        });
      },
      // 间隔
      splitTime(i, index) {
        if (i < 64) {
          return 35;
        }
        if (64 <= i && i <= 80 + index) {
          return 10 + i;
        }
        return 400;
      },
    async drawIndexChange(index) {
        const list = [1, 2, 3, 6, 9, 8, 7, 4];
        let num = 0;
        const nowNum = list.indexOf(index);
        const letter = 8 * 8 + nowNum;
        for (let i = 0; i <= letter; i++) {
          this.nowRoll = list[num];
          num === 7 ? (num = 0) : num++;
          await this.stopTime(this.splitTime(i, nowNum));
        }

      },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.nineBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px 0;

  .rollBoxCon {
    position: relative;
    height: 59.22vw;
    width: 59.22vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .peizesItem {
    height: 19.53vw;
    width: 19.53vw;
    border-radius: 0.5vw;
    -webkit-border-radius: 0.5vw;
    -moz-border-radius: 0.5vw;
    -ms-border-radius: 0.5vw;
    -o-border-radius: 0.5vw;
    background-color: #0b395a;
  }
  .peizesItemSeep {
    background-color: #142f59;
  }
  .peizesItemMid {
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .peizesItemMid:hover  .peizesImg{
    height: 90%;
    width: 90%;
  }
  .peizesItemNowBulr {
    background-color: #ff1eff;
  }
  .peizesNone{
    font-size: 2.5vw;
    text-align: center;
    line-height: 19.53vw;
    color: #fff;
  }
  .peizesImg {
    height: 100%;
    width: 100%;
    transition-duration: 300ms;
    transition-timing-function: linear;
    transition-property: height, width;
  }
}
</style>
