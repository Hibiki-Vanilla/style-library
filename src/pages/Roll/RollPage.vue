<template>
  <div class="box">
    <section class="box-con" @click="goRoll()">
      <!-- top -->
      <div class="topRow textRow" :class="{ actRow: nowStatus }">
        <div class="itemText">
          <div
            class="scroll-num"
            :class="{ 'border-animate': showAnimate }"
            :style="{ '--i': nowItemList[0], '--delay': delay }"
          >
            <ul ref="ul" :class="showAnimate ? 'animate' : 'nowAnimate'">
              <div v-for="(item, index) in list" :key="index">
                {{ item.name }}
              </div>
            </ul>
          </div>
        </div>
        <div class="itemText">
          <div
            class="scroll-num"
            :class="{ 'border-animate': showAnimate }"
            :style="{ '--i': nowItemList[1], '--delay': delay }"
          >
            <ul ref="ul" :class="showAnimate ? 'animate' : 'nowAnimate'">
              <div v-for="(item, index) in list" :key="index">
                {{ item.name }}
              </div>
            </ul>
          </div>
        </div>
        <div class="itemText">
          <div
            class="scroll-num"
            :class="{ 'border-animate': showAnimate }"
            :style="{ '--i': nowItemList[2], '--delay': delay }"
          >
            <ul ref="ul" :class="showAnimate ? 'animate' : 'nowAnimate'">
              <div v-for="(item, index) in list" :key="index">
                {{ item.name }}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- bottom -->
      <div class="bottomRow textRow" :class="{ actRow: nowStatus }">
        <div class="itemText">
          <div
            class="scroll-num"
            :class="{ 'border-animate': showAnimate }"
            :style="{ '--i': nowItemList[3], '--delay': delay }"
          >
            <ul ref="ul" :class="showAnimate ? 'animate' : 'nowAnimate'">
              <div v-for="(item, index) in list" :key="index">
                {{ item.name }}
              </div>
            </ul>
          </div>
        </div>
        <div class="itemText">
          <div
            class="scroll-num"
            :class="{ 'border-animate': showAnimate }"
            :style="{ '--i': nowItemList[4], '--delay': delay }"
          >
            <ul ref="ul" :class="showAnimate ? 'animate' : 'nowAnimate'">
              <div v-for="(item, index) in list" :key="index">
                {{ item.name }}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="loop" :class="{ actLoop: loopStatus }">
      <div class="loadingImg" @click="offRoll()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowStatus: false,
      loopStatus: false,
      timer: null,
      delay: 0.5,

      showAnimate: false,
      nowItemList: [0, 0, 0, 0, 0],
      list: [
        { name: "文本A", value: "1" },
        { name: "文本B", value: "2" },
        { name: "文本C", value: "3" },
        { name: "文本D", value: "4" },
        { name: "文本E", value: "5" },
        { name: "文本F", value: "6" },
        { name: "文本G", value: "7" },
        { name: "文本H", value: "8" },
        { name: "文本I", value: "9" },
        { name: "文本J", value: "10" },
        { name: "文本A", value: "1" },
        { name: "文本B", value: "2" },
        { name: "文本C", value: "3" },
        { name: "文本D", value: "4" },
        { name: "文本E", value: "5" },
        { name: "文本F", value: "6" },
        { name: "文本G", value: "7" },
        { name: "文本H", value: "8" },
        { name: "文本I", value: "9" },
        { name: "文本J", value: "10" },
        { name: "文本A", value: "1" },
        { name: "文本B", value: "2" },
        { name: "文本C", value: "3" },
        { name: "文本D", value: "4" },
        { name: "文本E", value: "5" },
      ],
    };
  },
  methods: {
    goRoll() {
      this.nowStatus = true;
      this.loopStatus = true;
      this.showAnimate = true;
    },
    offRoll() {
      let newArr = this.list.map((item, index) => {
        return index;
      });
      const sortValue = newArr
        .sort(() => {
          return Math.random() > 0.5 ? -1 : 1;
        })
        .slice(0, 5);
      this.loopStatus = false;

      this.nowItemList = [
        sortValue[0],
        sortValue[1],
        sortValue[2],
        sortValue[3],
        sortValue[4],
      ];

      this.showAnimate = false;
    },
  },
};
</script>

<style lang="less" scoped>
.box-con {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("@/assets/images/birthday.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.loop {
  display: none;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.loop.actLoop {
  display: flex;
}

.loadingImg {
  background-image: url("@/assets/images/loading.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  opacity: 0.95;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  line-height: 40px;
  color: #fff;
  /*animation: loopPon 0.8s linear infinite ;
     -webkit-animation: loopPon 0.8s linear infinite ;
     */
}
.loadingImg:hover {
  opacity: 1;
  transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
  -ms-transform: scale(0.95);
  -o-transform: scale(0.95);
}

.topRow {
  position: absolute;
  left: 0;
  top: 38vh;
  height: 9vw;
  width: 100%;
}

.bottomRow {
  position: absolute;
  left: 0;
  top: 76vh;
  height: 9vw;
  width: 100%;
}

.textRow {
  display: flex;
  justify-content: center;
}

.itemText {
  width: 25vw;
  height: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 2.5vw;
  opacity: 0;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
}

.actRow .itemText {
  opacity: 1;
}

.topRow .itemText + .itemText {
  margin-left: 5vw;
}

.bottomRow .itemText {
  margin-right: 1vw;
}

.bottomRow .itemText + .itemText {
  margin-left: 8vw;
}

@keyframes loopPon {
  0% {
    transform: rotate(0turn);
    -webkit-transform: rotate(0turn);
    -moz-transform: rotate(0turn);
    -ms-transform: rotate(0turn);
    -o-transform: rotate(0turn);
  }
  50% {
    transform: rotate(0.5turn);
    -webkit-transform: rotate(0.5turn);
    -moz-transform: rotate(0.5turn);
    -ms-transform: rotate(0.5turn);
    -o-transform: rotate(0.5turn);
  }
  100% {
    transform: rotate(1turn);
    -webkit-transform: rotate(1turn);
    -moz-transform: rotate(1turn);
    -ms-transform: rotate(1turn);
    -o-transform: rotate(1turn);
  }
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* number */

.scroll-num {
  /* width: var(--width, 20px); */
  height: 86.4px;
  color: #fff;
  font-size: 52.8px;
  line-height: 86.4px;
  text-align: center;
  overflow: hidden;
}

.animate {
  animation: move 0.3s linear infinite;
  -webkit-animation: move 0.3s linear infinite;
}
.nowAnimate {
  animation: move 0.3s linear infinite, bounce-in-down 1s calc(var(--delay) * 1s) forwards;
  -webkit-animation: move 0.3s linear infinite,
    bounce-in-down 1s calc(var(--delay) * 1s) forwards;
}
.border-animate {
  animation: enhance-bounce-in-down 1s calc(var(--delay) * 1s) forwards;
  -webkit-animation: enhance-bounce-in-down 1s calc(var(--delay) * 1s) forwards;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  transform: translateY(calc(var(--i) * -4%));
  -webkit-transform: translateY(calc(var(--i) * -4%));
  -moz-transform: translateY(calc(var(--i) * -4%));
  -ms-transform: translateY(calc(var(--i) * -4%));
  -o-transform: translateY(calc(var(--i) * -4%));
}

@keyframes move {
  from {
    transform: translateY(-90%);
    filter: url(#blur);
  }
  to {
    transform: translateY(1%);
    filter: url(#blur);
  }
}

@keyframes bounce-in-down {
  from {
    transform: translateY(calc(var(--i) * -4% - 7%));
    filter: none;
    -webkit-transform: translateY(calc(var(--i) * -4% - 7%));
    -moz-transform: translateY(calc(var(--i) * -4% - 7%));
    -ms-transform: translateY(calc(var(--i) * -4% - 7%));
    -o-transform: translateY(calc(var(--i) * -4% - 7%));
  }
  25% {
    transform: translateY(calc(var(--i) * -4% + 3%));
    -webkit-transform: translateY(calc(var(--i) * -4% + 3%));
    -moz-transform: translateY(calc(var(--i) * -4% + 3%));
    -ms-transform: translateY(calc(var(--i) * -4% + 3%));
    -o-transform: translateY(calc(var(--i) * -4% + 3%));
  }
  50% {
    transform: translateY(calc(var(--i) * -4% - 1%));
    -webkit-transform: translateY(calc(var(--i) * -4% - 1%));
    -moz-transform: translateY(calc(var(--i) * -4% - 1%));
    -ms-transform: translateY(calc(var(--i) * -4% - 1%));
    -o-transform: translateY(calc(var(--i) * -4% - 1%));
  }
  70% {
    transform: translateY(calc(var(--i) * -4% + 0.6%));
    -webkit-transform: translateY(calc(var(--i) * -4% + 0.6%));
    -moz-transform: translateY(calc(var(--i) * -4% + 0.6%));
    -ms-transform: translateY(calc(var(--i) * -4% + 0.6%));
    -o-transform: translateY(calc(var(--i) * -4% + 0.6%));
  }
  85% {
    transform: translateY(calc(var(--i) * -4% - 0.3%));
    -webkit-transform: translateY(calc(var(--i) * -4% - 0.3%));
    -moz-transform: translateY(calc(var(--i) * -4% - 0.3%));
    -ms-transform: translateY(calc(var(--i) * -4% - 0.3%));
    -o-transform: translateY(calc(var(--i) * -4% - 0.3%));
  }
  to {
    transform: translateY(calc(var(--i) * -4%));
    -webkit-transform: translateY(calc(var(--i) * -4%));
    -moz-transform: translateY(calc(var(--i) * -4%));
    -ms-transform: translateY(calc(var(--i) * -4%));
    -o-transform: translateY(calc(var(--i) * -4%));
  }
}

@keyframes enhance-bounce-in-down {
  25% {
    transform: translateY(8%);
  }
  50% {
    transform: translateY(-4%);
  }
  70% {
    transform: translateY(2%);
  }
  85% {
    transform: translateY(-1%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
