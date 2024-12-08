<template>
  <div class="banner">
    <div class="fp-page__wrap">
      <Swiper
        id="swiperBox"
        ref="swiperBanner"
        :options="swiperOption"
        @mousemove="slideWithMouse"
      >
        <SwiperSlide v-for="(item, index) in imgList" :key="index">
          <div :class="index == activeIndex ? 'animated' : ''">
            <div class="minbanner">
              <div class="mibanner-box">
                <slot name="game">
                  <img
                    :src="item.img"
                    alt="miHoYo_imitate"
                    class="mibanner-game"
                    :class="index == activeIndex ? 'animate' : ''"
                    :style="style"
                  />
                </slot>
              </div>
            </div>

            <div class="mibanner__info">
              <div class="mibanner__info-name">
                <div style="font-weight: bold">
                  {{ item.name.title }}
                </div>
                <span class="enname anim">{{ item.name.context }}</span>
              </div>
              <div class="mibanner__info-slash"></div>
              <div class="mibanner__info-desc">
                <p v-for="(desc, descIndex) in item.desc" :key="descIndex">
                  {{ desc }}
                </p>
              </div>
              <div
                class="mibanner__info-socials"
                v-if="item.socials || item.socials.length > 0"
              >
                <div
                  v-for="(social, index) in item.socials"
                  :key="index"
                  class="mibanner__info-social"
                >
                  <span>
                    {{ social.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="navBar" style="top: 8.9rem, left: 50%">
        <nav
          class="nav-item"
          v-for="(item, index) in items"
          :class="index === selected ? 'nav-item-border' : ''"
          :key="index"
          @click="
            navChange(index);
            change(index);
          "
        >
          <slot name="img" :item="item">
            <img :src="item" alt="miHoYo" />
          </slot>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "BannerDiv",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      translate: 0,
      transition_duration: 700,
      style: null,
      boardstyle: null,
      timeOut: null,
      activeIndex: -1,
      swiperOption: {
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper,也就是响应式
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        preloadImages: true,
        updateOnImagesReady: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        on: {
          init: () => {
            // 将原本没有的animated类，经过一定的延时添加，才能产生过渡效果，直接添加的话是没有过渡的，直接就是最终样式
            setTimeout(
              () => (this.activeIndex = this.$refs.swiperBanner.swiper.activeIndex),
              10
            );
          },
          transitionStart: () => {
            // 向外发出当前的index
            this.activeIndex = this.$refs.swiperBanner.swiper.activeIndex;
          },
          touchMove: () => {
            // 手动切换元素后，也暂停10s，
            this.pause(10000);
          },
        },
      },
      imgList: [
        {
          img:
            "https://files.myuwell.com/blob/gabriel/home-banner/B202%20%20banner-20220915161051.jpg",
          name: {
            title: "名字A",
            context: "描述文本A",
          },
          desc: ["简述文本"],
          socials: [
            {
              title: "Facebook",
              herf: "////",
            },
            {
              title: "Twitter",
              herf: "////",
            },
            {
              title: "YouTube",
              herf: "////",
            },
          ],
        },
        {
          img:
            "https://files.myuwell.com/blob/gabriel/home-banner/B1201%E9%A6%96%E9%A1%B5banner-2-20220917174020.jpg",
          name: {
            title: "名字B",
            context: "描述文本B",
          },
          desc: ["简述文本"],
          socials: [
            {
              title: "Facebook",
              herf: "////",
            },
            {
              title: "Twitter",
              herf: "////",
            },
          ],
        },
      ],

      selected: 0,
      items: [
        "https://webstatic.mihoyo.com/upload/op-public/2021/10/09/c218c585aac4aad0a30ab9a6e0e0794c_3908343860724847173.png",
        "https://webstatic.mihoyo.com/upload/op-public/2021/10/12/7bca19669fd95c1a961a26dc009c342e_7821980510293425191.png",
      ],
    };
  },
  methods: {
    autoplay() {
      this.timeOut = setTimeout(() => {
        if (this.$refs.swiperBanner.swiper.isEnd) {
          // 如果是结尾 就回到开头
          this.$refs.swiperBanner.swiper.slideTo(0);
        } else {
          this.$refs.swiperBanner.swiper.slideNext();
        }
        this.selected = this.selected + 1 == this.imgList.length ? 0 : this.selected + 1;
        this.autoplay();
      }, 3420);
    },
    navChange(index) {
      this.$refs.swiperBanner.swiper.slideTo(index);
    },
    change(index) {
      // 用户点击后，将 selected 设置为 index
      this.selected = index;
      this.pause(10000);
    },
    bannertransition(time) {
      this.$refs.swiperBanner.swiper.pause(time);
    },
    /**
     * 设置轮播图暂停一段时间
     * @param {number|boolean} time 需要暂停的时间，单位为毫秒(ms),如果传入true则永久暂停直到手动开启，传入false重新启动
     */
    pause(time) {
      clearTimeout(this.timeOut);
      // 切记一定要获得延迟后的定时器id，否则如果短时间内多次调用会导致产生很多定时器，从而混乱
      if (time == false) {
        this.autoplay();
      } else if (typeof time == "number") {
        this.timeOut = setTimeout(() => {
          // 一定要在这里清除一次鼠标对轮播图的位移影响，不然自动播放后，图片会"跳"一下
          this.style = null;
          this.boardstyle = null;
          this.autoplay();
        }, time);
      }
    },

    slideWithMouse(e) {
      this.bannertransition(this.transition_duration);
      // 让元素随着鼠标相反的方向移动
      this.translate = -0.05 * e.pageX + 38.4; // box中的轮播大图最终位移位置
      let trans_board = -0.015 * e.pageX + 11.52; // board中背景小图的最终位移位置
      this.style = `transform: translate(${this.translate}px, 0); transition: transform ${this.transition_duration}ms cubic-bezier(0,.3,.5,1);`;
      this.boardstyle = `transform: translate3d(${trans_board}px, 0px, 0px) scale(1.2, 1.2); backface-visibility: hidden; transform-style: preserve-3d;transition: transform 600ms cubic-bezier(0,.3,.5,1)`;
      this.pause(this.transition_duration);
    },
  },
  mounted() {
    this.autoplay();
  },
};
</script>

<style lang="less" scoped>
@keyframes shiftslide {
  0% {
    transform: translate(-71px, 0);
    opacity: 0;
  }

  15% {
    transform: translate(-30px, 0);
    opacity: 1;
  }

  100% {
    transform: translate(0px, 0);
  }
}

@keyframes infoslide {
  0% {
    transform: translate(500px, 0);
    opacity: 0;
  }

  15% {
    transform: translate(30px, 0);
    opacity: 1;
  }

  100% {
    transform: translate(30px, 0);
  }
}

@keyframes exit {
  0% {
    transform: translate(30px, 0);
  }

  15% {
    transform: translate(500px, 0);
  }

  100% {
    transform: translate(500px, 0);
  }
}

@keyframes masked-animation {
  0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: 100px;
  }
}

.banner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  .fp-page__wrap {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    transition-property: opacity;
  }

  #swiperBox {
    width: 100%;
    height: 100%;

    .mibanner__info-name,
    .mibanner__info-slash,
    .mibanner__info-desc,
    .mibanner__info-socials {
      opacity: 0;
      transform: translateX(0.6rem);
      -webkit-transform: translateX(0.6rem);
      -ms-transform: translateX(0.6rem);
      transition: opacity 500ms ease-out, transform 500ms ease-out;
    }

    .animated {
      .mibanner__info-name,
      .mibanner__info-slash,
      .mibanner__info-desc,
      .mibanner__info-socials {
        opacity: 1;
        transform: translateX(0);
        -webkit-transform: translateX(0);
      }

      .mibanner__info-name {
        transition-delay: 300ms;
      }

      .mibanner__info-slash {
        transition-delay: 500ms;
      }

      .mibanner__info-desc {
        transition-delay: 700ms;
      }

      .mibanner__info-socials {
        transition-delay: 900ms;
      }
    }
  }

  .minbanner {
    position: relative;
    top: 4.68vw;
    width: 66.66vw;
    height: calc(100% - 4.68vw);
    margin: 0 auto;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   right: 18.23vw;
    //   top: 27.08vw;
    //   width: 1.56vw;
    //   height: 1.56vw;
    //   background-color: #3778e5;
    // }
  }
  .mibanner-box {
    position: absolute;
    top: 0;
    left: -18vw;
    z-index: 1;
    min-width: 68vw;
    height: 38vw;
    overflow: hidden;
    padding-left: 1.56vw;
    margin: 0 auto;
    img {
      display: block;
      height: 38vw;
      transform-origin: center;
      overflow-y: hidden;
      pointer-events: none;
      transition: all 300ms;
    }
  }

  .animate {
    opacity: 1;
    animation: shiftslide 3000ms ease-out backwards;
    animation-delay: 0.2s;
    transition: opacity 500ms ease-out;
  }

  .mibanner__info {
    position: absolute;
    top: 7vw;
    right: 4vw;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .mibanner__info-name {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 85px;
    font-family: HarmonyOS, Arial, Helvetica, sans-serif;
    line-height: 1;
    font-weight: bold;
    color: #242933;

    .enname {
      margin-top: 14px;
      font-size: 20px;
      font-family: HarmonyOS, Arial, Helvetica, sans-serif;
      background: linear-gradient(to right, #3778e5, #e98bc0);
      color: transparent;
      background-clip: text;
    }
    .anim {
      background-image: linear-gradient(
        -135deg,
        #3778e5,
        #e98bc0,
        #3778e5,
        #e98bc0,
        #3778e5
      );
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-size: 200% 100%;
      animation: masked-animation 3s infinite linear;
    }
  }

  .mibanner__info-slash {
    position: relative;
    width: 100px;
    height: 50px;
    margin: 16px 0;

    &::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 60px;
      border-top: 1px solid #242933;
      transform: rotate(-34deg);
      transform-origin: top right;
    }
  }

  .mibanner__info-desc {
    max-width: 750px;
    text-align: right;
    font-size: 16px;
    line-height: 28px;
    color: #3d424d;

    p {
      text-align: right;
      white-space: pre-wrap;
    }
  }

  .mibanner__info-socials {
    display: flex;
    margin-top: 30px;
    margin-right: 14px;
    cursor: pointer;

    .mibanner__info-social {
      font-size: 20px;
      font-weight: bold;
      color: #3d424d;
      margin-left: 30px;
      cursor: pointer;

      &:hover {
        color: #3778e5;

        .mibanner__info-social-qrcode {
          display: block;
        }
      }

      span {
        position: relative;
      }
    }

    // .mibanner__info-social-qrcode {
    //   position: absolute;
    //   bottom: -1.6rem;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 1.36rem;
    //   height: 1.45rem;
    //   padding: 0.08rem;
    //   padding-top: 0.17rem;
    //   background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACRCAYAAAAYY/ABAAAAAXNSR0IArs4c6QAABOlJREFUeF7t1E9olwUcx/Hn+flzjtFo5QK3JkYlURaElStsIEWdCoIivCT01yjoupkeFmgm3YIisTzkRRpCB6GDREVJ/0cHk6LMhG2GbbZYjN/mb3uiaESRbnyOvt+/6+/5HD6f7+t5ysKfC1xggdJ1/lnglv4Tl9bLFW82q5nHv9pzzW9uUxQCWVAwWNU2NMbeKYvi/rIoDq8+0f3A0FA5R0cikL8FbBgY21kW1fa1Xcu/+/70ueuqotz1+UvdOwRCX6Aoitv7Rx6uyvLg+qtXDL/25MrDz+ybuG/4x5n1ZVVt/nRPz9vkifBfkNueH7m5Nl8evXJlffzAc51vtbXU5qZn55c98sr4ltGJZud8rdr4xYs9X1ORoIH0bTt9xblq/stLWmsdbzzbuXdNZ316AcKp8WbbE6+Ob/29MT+5vKzd+tHurl+ISLBAbhj8pqW90XGkvqy8Y+fmy/ZvurH15/8C+OBYY9WOg78+1pyrPplqnbzn+OC6WRoSLJDebWOvl0W19dFN7Yeeurf92PkOv+/I1Lr97089VBXl3s92dz+NA9I7MFrRSi/07bu+9eOXt1z+3mL9+w+cvevD442+xZ67GP8v/wSyqqM+srarfupiLHi+Tm0risb2BzuOttRri74gs835ctehyY3TM0UrZaOTZ5o9IxPNNX8BWeqbRBnHnkXxwtDZO98dbtwtEDX87wICEcYFFxCIQASigXwBvyD5doikQBBnzksKJN8OkRQI4sx5SYHk2yGSAkGcOS8pkHw7RFIgiDPnJQWSb4dICgRx5rykQPLtEEmBIM6clxRIvh0iKRDEmfOSAsm3QyQFgjhzXlIg+XaIpEAQZ85LCiTfDpEUCOLMeUmB5NshkgJBnDkvKZB8O0RSIIgz5yUFkm+HSAoEcea8pEDy7RBJgSDOnJcUSL4dIikQxJnzkgLJt0MkBYI4c15SIPl2iKRAEGfOSwok3w6RFAjizHlJgeTbIZICQZw5LymQfDtEUiCIM+clBZJvh0gKBHHmvKRA8u0QSYEgzpyXFEi+HSIpEMSZ85ICybdDJAWCOHNeUiD5doikQBBnzksKJN8OkRQI4sx5SYHk2yGSAkGcOS8pkHw7RFIgiDPnJQWSb4dICgRx5rykQPLtEEmBIM6clxRIvh0iKRDEmfOSAsm3QyQFgjhzXlIg+XaIpEAQZ85LCiTfDpEUCOLMeUmB5NshkgJBnDkvKZB8O0RSIIgz5yUFkm+HSAoEcea8pEDy7RBJgSDOnJcUSL4dIikQxJnzkgLJt0MkBYI4c15SIPl2iKRAEGfOSwok3w6RFAjizHlJgeTbIZICQZw5LymQfDtEUiCIM+clBZJvh0gKBHHmvKRA8u0QSYEgzpyXFEi+HSIpEMSZ85ICybdDJAWCOHNeUiD5doikQBBnzksKJN8OkRQI4sx5SYHk2yGSAkGcOS8pkHw7RFIgiDPnJQWSb4dICgRx5rykQPLtEEmBIM6clxRIvh0iKRDEmfOSAsm3QyQFgjhzXlIg+XaIpEAQZ85LCiTfDpEUCOLMeUmB5NshkgJBnDkvKZB8O0RSIIgz5yUFkm+HSAoEcea8pEDy7RBJgSDOnJcUSL4dIikQxJnzkgLJt0Mk/wWkp7P+002rW35ANLfkkhb4dnT2qpNnmteWvQOj1ZISPoRc4A+oyxkEmgdh9wAAAABJRU5ErkJggg==") no-repeat center/100% 100%;
    //   display: none;

    //   img {
    //     width: 100%;
    //   }
    // }
  }
}

.navBar {
  position: absolute;
  top: 43vw;
  left: 50%;
  z-index: 9;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  width: 66vw;
  height: 5.2vw;
  transform: translateX(-81.8%);
}

.nav-item {
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  align-items: center;
  width: 3.85vw;
  height: 3.85vw;
  padding: 2px;
  margin-right: 0.5rem;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: border 300ms;
  cursor: pointer;
}

.nav-item:hover {
  border-color: #3778e5;
}

.nav-item-border {
  border-color: #3778e5;
}

.nav-item img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  filter: blur(0.32px);
}
</style>
