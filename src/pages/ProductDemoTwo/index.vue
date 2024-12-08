<template>
  <div class="productDemo">
    <section class="banner pageItem"></section>
    <!-- video -->
    <section class="videoPage">
      <video
        class="videoPageCon"
        autoplay
        loop="loop"
        muted="muted"
        x5-video-player-fullscreen="true"
        playsinline="true"
        webkit-playsinline="true"
        x5-video-player-type="h5"
      >
        <source
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/caliburn-gz2-cyber.mp4"
          type="video/mp4"
        />
      </video>
    </section>

    <!-- theme -->
    <section class="theme pageItem">
      <video
        class="themeVideo"
        autoplay
        preload
        loop="loop"
        muted="muted"
        x5-video-player-fullscreen="true"
        playsinline="true"
        webkit-playsinline="true"
        x5-video-player-type="h5"
      >
        <source
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/video.mp4"
          type="video/mp4"
        />
      </video>

      <video
        class="themeVideoMo"
        autoplay
        preload
        loop="loop"
        muted="muted"
        x5-video-player-fullscreen="true"
        playsinline="true"
        webkit-playsinline="true"
        x5-video-player-type="h5"
      >
        <source
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/video.mp4"
          type="video/mp4"
        />
      </video>
      <picture>
        <source
          srcset="
            https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/themeTop.webp
          "
          media="(max-width: 1000px)"
        />
        <img
          class="themeTop"
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/themeTop.webp"
          alt=""
        />
      </picture>

      <div class="themeCon" data-aos="fade-up">
        <div class="titleSize titleFamily titleColor">
          INTRODUCING ZEGA FORM
          <br />
          WTIH CYBER THEME
        </div>

        <div class="textSize textMedium">
          Amplified TRON-Style RGB Sparkling with ZEGA
        </div>
      </div>

      <div class="themeTwoCon textRegular textColor" data-aos="fade-up">
        The enhanced chic and stylish RGB makes this pod system stand out and
        even outshine until 2035. The vaping experience is more enjoyable with
        it held in your hand, highlighting the young & bold spirits and matching
        your unique ootd.
      </div>
    </section>

    <!-- logos -->
    <section class="logos pageItem">
      <div class="logosTextCon" data-aos="fade-up">
        <div class="titleSize titleFamily titleColor">
          TRENDY ELEMENTS:
          <br />
          FULL-PRINTED LOGOS
        </div>

        <div class="textSize textRegular textColor">
          To make this GZ2 Cyber pod system more fashionable, we adapted the
          full-printed ZEGA logos to cover the battery, making it a highlight of
          the transparent design.
        </div>
      </div>

      <img
        class="logosCon"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="600"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/logosCon.webp"
        alt=""
      />
    </section>

    <!--  factor -->
    <section class="factor pageItem">
      <div class="factorCon" data-aos="fade-up">
        <div class="titleSize titleFamily titleColor">
          ZEGA - UWELL EXCLUSIVE
          <br />
          FORM FACTOR
        </div>

        <div class="factorTip textMedium textColor">
          History of Pod form factors
        </div>

        <div class="factorRow">
          <div class="factorRowItem">
            <div class="textRegular textColor">Reduced to max.</div>
            <div class="factorRowLeft factorRowNum textBold">
              {{ leftNum }}%
            </div>
            <div class="textRegular textColor">Front area</div>
          </div>

          <div class="factorRowItem">
            <div class="textRegular textColor">Increased by max.</div>
            <div class="factorRowRight factorRowNum textBold">
              {{ rightNum }}%
            </div>
            <div class="textRegular textColor">Battery capacity</div>
          </div>
        </div>
      </div>
    </section>

    <!-- color -->
    <section class="color pageItem">
      <img
        v-for="(item, index) in 4"
        :key="'color'+index"
        class="colorImg"
        :src="`https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/color/${item}.webp`"
        alt=""
      />

      <img
        v-for="(item, index) in 4"
        :key="'colorTwo' +index"
        class="colorLightImg"
        :class="[{ colorLightImgAct: colorStatus }, `colorLightImgAct-${item}`]"
        :src="`https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/color/${item}-act.webp`"
      />

      <!-- mo -->
      <div class="colorMoCon">
        <img
          v-for="(item, index) in 4"
          :key="index"
          class="colorMoImg"
          :class="[{ colorMoImgAct: nowColor === index }]"
          :src="`https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/color/${item}.webp`"
          alt=""
        />
        <div class="colorMoButtonRow">
          <div
            v-for="(item, index) in 4"
            :key="index"
            class="colorMoButton"
            :class="`colorMoButton-${item}`"
            @click="nowColor = index"
          ></div>
        </div>
      </div>
      <div class="titleSize titleFamily titleColor" data-aos="fade-up">
        4 STUNNING COLORS TO CHOOSE
      </div>
    </section>

    <!-- ill -->
    <section class="ill pageItem">
      <picture>
        <source
          srcset="
            https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/illTop.webp
          "
          media="(max-width: 1000px)"
        />
        <img
          class="illImg"
          data-aos="zoom"
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/illTop.webp"
          alt=""
        />
      </picture>
    </section>

    <!-- systems -->
    <section class="systems pageItem">
      <div class="systemsCon" data-aos="fade-up">
        <div class="titleSize titleFamily titleColor">
          VERSATILE COMPATIBILITY
        </div>

        <div class="textSize textMedium textColor">
          Compatible with most CALIBURN pod systems’
          <br />
          cartridges and the CALIBURN G coils.
        </div>

        <img
          class="systemsCoil"
          src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/coil.webp"
          alt=""
        />

        <div class="systemsClickCon">
          <div
            v-for="(item, index) in wideList"
            :key="index"
            class="sysClickItem"
            :class="[{ sysClickItemAct: nowWide === index }]"
            @mouseover="(nowWide = index), (isWideHovering = true)"
            @mouseleave="isWideHovering = false"
          >
            <div class="sysImgBox">
              <img
                :src="item.img"
                :style="`height:${item.height};width:${item.width}`"
                alt=""
              />
            </div>

            <div
              class="sysImgText textSemiBold"
              :class="[{ sysImgTextAct: nowWide === index }]"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="textRegular sysTip">
          *The 1.0 Ω CALIBURN G Coil is sold separately.
        </div>
      </div>
      <!-- mid -->
      <img
        class="sysPodImg"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/pod.webp"
        alt=""
      />
      <!-- down -->
      <img
        class="sysProductImg sysPodImgOne"
        :class="{ sysProductImgAct: nowWide === 0 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/g2.webp"
      />
      <img
        class="sysProductImg sysPodImgTwo"
        :class="{ sysProductImgAct: nowWide === 1 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/gk2.webp"
      />
      <img
        class="sysProductImg sysPodImgThree"
        :class="{ sysProductImgAct: nowWide === 2 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/tenet.webp"
      />
      <img
        class="sysProductImg sysPodImgFour"
        :class="{ sysProductImgAct: nowWide === 3 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/tenet-koko.webp"
      />
      <img
        class="sysProductImg sysPodImgFive"
        :class="{ sysProductImgAct: nowWide === 4 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/gk2-vision.webp"
      />
      <img
        class="sysProductImg sysPodImgSix"
        :class="{ sysProductImgAct: nowWide === 5 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/gz2.webp"
      />
      <img
        class="sysProductImg sysPodImgSeven"
        :class="{ sysProductImgAct: nowWide === 6 }"
        src="https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/gz2-cyber.webp"
      />
    </section>

    <!-- window -->
    <section class="window pageItem">
      <div class="titleSize titleFamily titleColor" data-aos="fade-up">
        UWELL EXCLUSIVE TECHS
      </div>

      <div class="windowCon" data-aos="fade-up">
        <div class="windowLeft">
          <div class="windowLeftTop windowImg"></div>
          <div class="windowLeftBottom windowImg"></div>
        </div>

        <div class="windowRight">
          <div class="windowRightTop windowImg"></div>
          <div class="windowRightBottom windowImg"></div>
        </div>
      </div>
    </section>

    <!-- windowTwo -->
    <section class="windowTwo pageItem">
      <div class="titleSize titleFamily titleColor" data-aos="fade-up">
        EVERY DETAIL POLISHED
      </div>

      <div class="windowTwoCon" data-aos="fade-up">
        <div class="windowTwoLeft">
          <div class="windowTwoLeftTop windowImg"></div>
          <div class="windowTwoLeftBottom windowImg"></div>
        </div>

        <div class="windowTwoRight">
          <div class="windowTwoRightTop windowImg"></div>
          <div class="windowTwoRightBottom windowImg"></div>
        </div>
      </div>
    </section>

    <!-- spe -->
    <section class="spe pageItem">
      <div class="speCon" data-aos="fade-up">
        <div class="titleSize titleFamily titleColor">SPECIFICATIONS</div>
        <div class="speText textMedium">
          <span class="textBold">Materials:</span>
          <br class="brMo" />
          Device: Aluminum Alloy + PC, Cartridge: PCTG
          <br />
          <span class="textBold">Dimensions:</span>
          28.9 mm × 22.9 mm × 72.5 mm
          <br />
          <span class="textBold">Net Weight:</span>
          Approx. 47 g
          <br />
          <span class="textBold">E-liquid Capacity:</span>
          2 ml
          <br />
          <span class="textBold">Output Power:</span>
          Maximum 17 W
          <br />
          <span class="textBold">Coil Specifications: </span>

          <br />

          FeCrAl UN2 Meshed 0.8 Ω CALIBURN G Coil
          <br />

          FeCrAl UN2 Meshed 1.2 Ω CALIBURN G2 Coil
          <br />

          FeCrAl 1.0 Ω CALIBURN G Coil (sold separately)
          <br />
          <span class="textBold">Battery Capacity:</span>
          850 mAh
        </div>
      </div>
    </section>

    <!-- inbox -->
    <section class="inbox pageItem">
      <div class="titleSize titleColor titleFamily" data-aos="fade-up">
        IN THE BOX
        <span class="textRegular" v-if="inboxIndex === 1">(CRC)</span>
      </div>
      <div class="inboxImgBox">
        <img
          v-for="(item, index) in 2"
          :key="index"
          :src="`https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/inbox-${item}.webp`"
          class="inboxImg"
          :class="{ inboxImgAct: inboxIndex === index }"
          alt=""
        />
        <img
          class="inboxAirLeft"
          @click="inboxIndex = inboxIndex === 1 ? 0 : 1"
          src="https://files.myuwell.com/uwell/product/caliburn-gz2/pc/air.webp"
          alt=""
        />
        <img
          class="inboxAirRight"
          @click="inboxIndex = inboxIndex === 1 ? 0 : 1"
          src="https://files.myuwell.com/uwell/product/caliburn-gz2/pc/air.webp"
          alt=""
        />
      </div>
    </section>

    <!-- mo inbox -->
    <section class="inboxMo pageItem">
      <div class="inboxMoCon">
        <div class="inboxMoScroll">
          <div class="inboxImgMoBox">
            <img
              v-for="(item, index) in 2"
              :key="index"
              :src="`https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/inbox-${item}.webp`"
              class="inboxImgMo"
              :class="{
                inboxImgAct:
                  inboxMoIndex === index || (inboxMoIndex > 0 && index !== 0),
              }"
              alt=""
            />
            <div class="titleSize titleColor titleFamily" data-aos="fade-up">
              IN THE BOX
              <span class="textRegular" v-if="inboxMoIndex === 1">(CRC)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Aos from "aos";
import "aos/dist/aos.css";
export default {
  name: "ProductDemo",
  components: {},
  data() {
    return {
      numStatus: false,
      numTimer: null,
      leftNum: 0,
      rightNum: 0,

      colorStatus: false,
      nowColor: 0,

      inWideId: null,
      nowWide: 6,
      isWideHovering: false,
      wideList: [
        {
          name: "CALIBURN\nG2",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-g2.webp",
          width: "3.02vw",
          height: "12.29vw",
        },
        {
          name: "CALIBURN\nGK2",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-gk2.webp",
          width: "6.82vw",
          height: "8.28vw",
        },
        {
          name: "CALIBURN\nTENET",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-tenet.webp",
          width: "3.125vw",
          height: "11.56vw",
        },
        {
          name: "CALIBURN\nTENET KOKO",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-tenet-koko.webp",
          width: "6.51vw",
          height: "7.60vw",
        },
        {
          name: "CALIBURN\nGK2 (VISION)",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-gk2-vision.webp",
          width: "6.51vw",
          height: "7.91vw",
        },
        {
          name: "CALIBURN\nGZ2",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-gz2.webp",
          width: "3.07vw",
          height: "7.44vw",
        },
        {
          name: "CALIBURN\nGZ2 Cyber",
          img: "https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/c-gz2-cyber.webp",
          width: "3.17vw",
          height: "7.5vw",
        },
      ],

      inboxIndex: 0,
      inboxMoIndex: 0,
    };
  },
  methods: {
    animationScroll() {
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // factor
      const factorHeight = document.querySelector(".factor").offsetHeight;
      const factorTop = document.querySelector(".factor").offsetTop;
      if (factorTop - scrollHeight < factorHeight / 4) {
        if (!this.numStatus) {
          this.numStatus = true;
          this.numChange();
        }
      } else {
        this.leftNum = 0;
        this.rightNum = 0;
      }

      // color
      const colorHeight = document.querySelector(".color").offsetHeight;
      const colorTop = document.querySelector(".color").offsetTop;
      this.colorStatus = colorTop - scrollHeight < colorHeight / 5;

      this.inboxMoIndex = this.stickyAnime(".inboxMoCon", ".inboxMoScroll", 2);
    },
    numChange() {
      this.numTimer = setInterval(() => {
        this.leftNum = this.leftNum !== 50 ? this.leftNum + 1 : 50;
        this.rightNum = this.rightNum !== 22 ? this.rightNum + 1 : 22;

        if (this.leftNum === 50 && this.rightNum === 22) {
          clearInterval(this.numTimer);
          this.numStatus = false;
        }
      }, 50);
    },
    stickyAnime(conName, stickyName, level) {
      const conOffsetHeight = document.querySelector(conName).offsetHeight;
      const stickyOffsetTop = document.querySelector(stickyName).offsetTop;
      const stickyOffsetHeight =
        document.querySelector(stickyName).offsetHeight;
      const rollNumber = (conOffsetHeight - stickyOffsetHeight) / level;
      const index = parseInt(stickyOffsetTop / rollNumber);
      return index;
    },
    lightTime() {
      let thes = this;
      this.inWideId = setInterval(() => {
        if (!thes.isWideHovering) {
          thes.nowWide = thes.nowWide === 0 ? 6 : thes.nowWide - 1;
        }
      }, 2000);
    },
  },

  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.animationScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.animationScroll);
    this.lightTime();
    // aos
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      mirror: false,
    });
  },
};
</script>

<style lang="less" scoped>

.pageItem {
  position: relative;
  height: 56.25vw;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

@font-face {
  font-family: "GRAYSTROKE ITALIC";
  font-display: swap;
  src: url("https://www.myuwell.com/css/fonts/GRAYSTROKE-ITALIC.otf");
}

.titleFamily {
  font-family: "GRAYSTROKE ITALIC";
  letter-spacing: -0.1vw;
  transform: scale(1, 0.8);
  -webkit-transform: scale(1, 0.8);
  -moz-transform: scale(1, 0.8);
  -ms-transform: scale(1, 0.8);
  -o-transform: scale(1, 0.8);
}
.textRegular {
  font-family: "Montserrat Regular";
}
.textMedium {
  font-family: "Montserrat Medium";
}
.textBold {
  font-family: "Montserrat Bold";
}
.textSemiBold {
  font-family: "Montserrat SemiBold";
}

.titleSize {
  font-size: 3.64vw;
}

.textSize {
  font-size: 1.56vw;
}

.titleColor {
  color: #ffffff;
}

.textColor {
  color: #ffffff;
}

@media (max-width: 1000px) {
  .pageItem {
    height: 13.34rem;
  }

  .titleSize {
    font-size: 0.55rem;
  }

  .textSize {
    font-size: 0.3rem;
  }
}

/* banner */
.banner {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/banner.webp);
}

@media (max-width: 1000px) {
  .banner {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/banner.webp);
  }
}

/* video */
.videoPage {
  height: 56.25vw;
}

.videoPageCon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* theme */
.theme {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/themeBg.webp);
  overflow: hidden;
}

.themeVideo {
  position: absolute;
  top: 30%;
  left: 5%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.themeTop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.themeCon {
  position: absolute;
  top: 5vw;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

.themeCon .textSize {
  margin-top: 1vw;
  height: 3vw;
  width: 42vw;
  line-height: 3vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/2-tip.webp);
  background-size: 100% 100%;
  text-align: center;
  color: #afc9f9;
}

.themeTwoCon {
  position: absolute;
  top: 30vw;
  left: 23.9vw;
  width: 24vw;
  font-size: 1.3vw;
}
.themeVideoMo {
  display: none;
}

@media (max-width: 1000px) {
  .theme {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/themeBg.webp);
  }

  .themeVideo {
    display: none;
  }
  .themeVideoMo {
    display: block;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .themeCon {
    top: 1.5rem;
  }

  .themeCon .textSize {
    margin-top: 0.6rem;
    height: 0.6rem;
    width: 6.68rem;
    line-height: 0.6rem;
    font-size: 0.25rem;
  }

  .themeTwoCon {
    position: absolute;
    top: 4.6rem;
    left: calc(50% - 2.7rem);
    width: 5.4rem;
    font-size: 0.2rem;
    text-align: center;
  }
}

/* logos */
.logos {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/logos.webp);
}

.logosTextCon {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}

.logos .titleSize {
  text-align: center;
}

.logos .textSize {
  padding-top: 2vw;
  text-align: center;
  width: 45vw;
  margin: 0 auto;
}

.logosCon {
  position: absolute;
  bottom: 3.64vw;
  /*left: 42.86vw;
  */
  left: 50%;
  width: auto;
  transform: translate(-40%, 0);
  -webkit-transform: translate(-40%, 0);
  -moz-transform: translate(-40%, 0);
  -ms-transform: translate(-40%, 0);
  -o-transform: translate(-40%, 0);
}

.logosCon[data-aos^="fade"][data-aos^="fade"] {
  opacity: 1;
  transition-property: opacity, transform, height;
}
.logosCon[data-aos="fade-down"] {
  height: 40vw;
  transform: translate(-40%, 0);
  -webkit-transform: translate(-40%, 0);
  -moz-transform: translate(-40%, 0);
  -ms-transform: translate(-40%, 0);
  -o-transform: translate(-40%, 0);
}

.logosCon[data-aos^="fade"][data-aos^="fade"].aos-animate {
  height: 27.03vw;
  transform: translate(-40%, 0);
  -webkit-transform: translate(-40%, 0);
  -moz-transform: translate(-40%, 0);
  -ms-transform: translate(-40%, 0);
  -o-transform: translate(-40%, 0);
}

@media (max-width: 1000px) {
  .logos {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/logos.webp);
  }

  .logos .titleSize {
    padding-top: 1rem;
  }

  .logos .textSize {
    padding-top: 0.4rem;
    width: 5.7rem;
  }

  .logosCon {
    position: absolute;
    bottom: 1.7rem;
    left: 50%;
    width: auto;
    transform: translate(-30%, 0);
    -webkit-transform: translate(-30%, 0);
    -moz-transform: translate(-30%, 0);
    -ms-transform: translate(-30%, 0);
    -o-transform: translate(-30%, 0);
  }

  .logosCon[data-aos="fade-down"] {
    height: 8rem;
    transform: translate(-30%, 0);
    -webkit-transform: translate(-30%, 0);
    -moz-transform: translate(-30%, 0);
    -ms-transform: translate(-30%, 0);
    -o-transform: translate(-30%, 0);
  }

  .logosCon[data-aos^="fade"][data-aos^="fade"].aos-animate {
    height: 6.4rem;
    transform: translate(-30%, 0);
    -webkit-transform: translate(-30%, 0);
    -moz-transform: translate(-30%, 0);
    -ms-transform: translate(-30%, 0);
    -o-transform: translate(-30%, 0);
  }
}

/* factor */
.factor {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/factor.webp);
}

.factorCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7vw;
  text-align: center;
}

.factorTip {
  padding-top: 4vw;
  font-size: 2.34vw;
}

.factorRow {
  padding-top: 13.5vw;
  display: flex;
  justify-content: center;
  font-size: 1.3vw;
}

.factorRowItem {
  width: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.factorRowItem + .factorRowItem {
  margin-left: 5vw;
}

.factorRowNum {
  font-size: 4.06vw;
}

.factorRowLeft {
  background-image: linear-gradient(to top, #ffe71d 0%, #00d6dc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.factorRowRight {
  background-image: linear-gradient(to bottom, #e07bfd 0%, #3f80f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 1000px) {
  .factor {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/factor.webp);
  }

  .factorCon {
    padding-top: 1.3rem;
  }

  .factorTip {
    padding-top: 1.4rem;
    font-size: 0.35rem;
  }

  .factorRow {
    padding-top: 3.7rem;
    font-size: 0.25rem;
  }

  .factorRowItem {
    width: 2.6rem;
  }

  .factorRowItem + .factorRowItem {
    margin-left: 1rem;
  }

  .factorRowNum {
    font-size: 0.78rem;
  }
}

/* color */

.color {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/color/bg.webp);
}

.color .titleSize {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 3vw;
  width: 100%;
  text-align: center;
}

.colorImg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.colorLightImg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition-property: opacity;
  -webkit-transition: opacity;
  -moz-transition: opacity;
  -ms-transition: opacity;
  -o-transition: opacity;
  transition-timing-function: linear;
}

.colorLightImgAct-1 {
  transition-duration: 600ms;
}
.colorLightImgAct-2 {
  transition-duration: 800ms;
  -webkit-transition-delay: 200ms;
}
.colorLightImgAct-3 {
  transition-duration: 1000ms;
  -webkit-transition-delay: 400ms;
}
.colorLightImgAct-4 {
  transition-duration: 1200ms;
  -webkit-transition-delay: 600ms;
}

.colorLightImgAct {
  opacity: 1;
}

.colorMoCon {
  display: none;
}

@media (max-width: 1000px) {
  .color {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/color/bg.webp);
  }

  .color .titleSize {
    padding-top: 0.8rem;
  }

  .colorImg {
    display: none;
  }
  .colorLightImg {
    display: none;
  }

  .colorMoCon {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .colorMoImg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s linear;
    -webkit-transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    -ms-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
  }
  .colorMoImgAct {
    opacity: 1;
  }

  .colorMoButtonRow {
    position: absolute;
    top: 11.74rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .colorMoButton + .colorMoButton {
    margin-left: 0.86rem;
  }

  .colorMoButton {
    height: 0.53rem;
    width: 0.53rem;
    border: 0.01rem solid #fff;
  }

  .colorMoButton-1 {
    background-color: #000000;
  }
  .colorMoButton-2 {
    background-color: #b7ed44;
  }
  .colorMoButton-3 {
    background-color: #ff8e1f;
  }
  .colorMoButton-4 {
    background-color: #f4a6ee;
  }
}

/* ill */
.ill {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/ill.webp);
}

.illImg {
  height: 100%;
  width: 100%;
}

@media (max-width: 1000px) {
  .ill {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/ill.webp);
  }
}

/* systems */

.systems {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/body/bg.webp);
  overflow: hidden;
}

.systemsCon {
  position: absolute;
  top: 8vw;
  left: 9vw;
}
.systemsCon .textSize {
  margin-top: 1vw;
}
.systemsCoil {
  margin-top: 2vw;
  width: 50.3125vw;
}

.systemsClickCon {
  margin-top: 3px;
  height: 18.75vw;
  width: 50.1vw;
  padding: 2vw 2vw 0;
  box-sizing: border-box;
  background-color: #2d2b35;
  display: flex;
  justify-content: space-between;
}

.sysClickItem {
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sysImgBox {
  display: flex;
  align-items: center;
  justify-items: center;
  height: 12.82vw;
}

.sysImgText {
  padding-top: 0.5vw;
  white-space: pre-line;
  text-align: center;
  color: #4a4754;
  font-size: 0.93vw;
}

.sysClickItemAct .sysImgText {
  color: #ffffff;
}

.sysImgTextAct {
  color: #4a4754;
}

.sysTip {
  margin-top: 2vw;
  font-size: 1.04vw;
  color: #919191;
}

.sysPodImg {
  position: absolute;
  top: 7.91vw;
  right: 10.15vw;
  width: 13.17vw;
  height: 22.44vw;
}

.sysProductImg {
  position: absolute;
  transition: top 0.5s linear;
  -webkit-transition: top 0.5s linear;
  -moz-transition: top 0.5s linear;
  -ms-transition: top 0.5s linear;
  -o-transition: top 0.5s linear;
  opacity: 0;
}

/* one */
.sysPodImgOne {
  height: 53.85vw;
  width: 13.125vw;
  top: 25vw;
  right: 10.15vw;
}
.sysPodImgOne.sysProductImgAct {
  top: 19.01vw;
  opacity: 1;
}

.sysPodImgTwo {
  height: 33.38vw;
  width: 27.6vw;
  top: 23vw;
  right: 9.947vw;
}
.sysPodImgTwo.sysProductImgAct {
  top: 17.13vw;
  opacity: 1;
}

.sysPodImgThree {
  height: 50.36vw;
  width: 13.75vw;
  top: 23vw;
  right: 9.947vw;
}
.sysPodImgThree.sysProductImgAct {
  top: 18.69vw;
  opacity: 1;
}

.sysPodImgFour {
  height: 31.61vw;
  width: 30.677vw;
  top: 24vw;
  right: 8.958vw;
}
.sysPodImgFour.sysProductImgAct {
  top: 19.27vw;
  opacity: 1;
}

.sysPodImgFive {
  height: 33.385vw;
  width: 27.55vw;
  top: 22vw;
  right: 9.58vw;
}
.sysPodImgFive.sysProductImgAct {
  top: 17.08vw;
  opacity: 1;
}

.sysPodImgSix {
  height: 32.03125vw;
  width: 13.4375vw;
  top: 23vw;
  right: 10vw;
}
.sysPodImgSix.sysProductImgAct {
  top: 18.85vw;
  opacity: 1;
}

.sysPodImgSeven {
  height: 31.82vw;
  width: 13.4375vw;
  top: 23vw;
  right: 9.947vw;
}
.sysPodImgSeven.sysProductImgAct {
  top: 18.645vw;
  opacity: 1;
}

@media (max-width: 1000px) {
  .systems {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/systems.webp);
    overflow: hidden;
  }

  .systemsCon {
    position: absolute;
    top: 0.6rem;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .systemsCon .textSize {
    margin-top: 0.2rem;
  }
  .systemsCoil {
    margin-top: 0.3rem;
    width: 6.48rem;
  }

  .systemsClickCon {
    display: none;
  }

  .sysTip {
    display: none;
  }

  .sysPodImg {
    top: 4.87rem;
    right: 2.27rem;
    width: 2.53rem;
    height: 4.31rem;
  }

  /* one */
  .sysPodImgOne {
    height: 10.34rem;
    width: 2.52rem;
    top: 8rem;
    right: 2.3rem;
  }
  .sysPodImgOne.sysProductImgAct {
    top: 7rem;
  }

  .sysPodImgTwo {
    height: 6.41rem;
    width: 5.3rem;
    top: 7.5rem;
    right: 2.3rem;
  }
  .sysPodImgTwo.sysProductImgAct {
    top: 6.64rem;
  }

  .sysPodImgThree {
    height: 9.67rem;
    width: 2.64rem;
    top: 8rem;
    right: 2.25rem;
  }
  .sysPodImgThree.sysProductImgAct {
    top: 6.94rem;
  }

  .sysPodImgFour {
    height: 6.07rem;
    width: 5.89rem;
    top: 8.05rem;
    right: 2.1rem;
  }
  .sysPodImgFour.sysProductImgAct {
    top: 7rem;
  }

  .sysPodImgFive {
    height: 6.41rem;
    width: 5.24rem;
    top: 7.63rem;
    right: 2.2rem;
  }
  .sysPodImgFive.sysProductImgAct {
    top: 6.63rem;
  }

  .sysPodImgSix {
    height: 6.15rem;
    width: 2.58rem;
    top: 7.97rem;
    right: 2.25rem;
  }
  .sysPodImgSix.sysProductImgAct {
    top: 6.97rem;
  }

  .sysPodImgSeven {
    height: 6.11rem;
    width: 2.58rem;
    top: 7.93rem;
    right: 2.25rem;
  }
  .sysPodImgSeven.sysProductImgAct {
    top: 6.93rem;
    opacity: 1;
  }
}

/* window */

.window {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/bg-1.webp);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.window .titleSize {
  padding: 3vw 0 2.5vw;
}

.windowCon {
  display: flex;
  justify-content: space-between;
}

.windowImg {
  box-sizing: border-box;
  overflow: hidden;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.3s linear;
  -webkit-transition: background-size 0.3s linear;
  -moz-transition: background-size 0.3s linear;
  -ms-transition: background-size 0.3s linear;
  -o-transition: background-size 0.3s linear;
}
.windowImg:hover {
  background-size: 110% 110%;
}

.windowLeft {
  padding-top: 0.78vw;
  display: flex;
  flex-direction: column;
}

.windowLeftTop {
  height: 20.1vw;
  width: 28.48vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/U-VALVE.webp);
}

.windowLeftBottom {
  margin-top: 4px;
  margin-left: -0.4vw;
  height: 21.5625vw;
  width: 28.59vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/CLEARVIEW.webp);
}

.windowRightTop {
  height: 23.28vw;
  width: 28.59vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/IAFC.webp);
}

.windowRightBottom {
  margin-top: 4px;
  margin-left: -0.4vw;
  height: 18.38vw;
  width: 28.59vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/pro-focs.webp);
}

@media (max-width: 1000px) {
  /* window */

  .window {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/bg-1.webp);
    overflow: hidden;
  }

  .window .titleSize {
    padding: 1rem 0 0.5rem;
    width: 5rem;
    text-align: center;
  }

  .windowLeft {
    padding-top: 0.1rem;
  }

  .windowLeftTop {
    height: 4.56rem;
    width: 3.57rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/U-VALVE.webp);
  }

  .windowLeftBottom {
    margin-top: 0.01rem;
    margin-left: -0.05rem;
    height: 4.89rem;
    width: 3.58rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/CLEARVIEW.webp);
  }

  .windowRightTop {
    height: 4.96rem;
    width: 3.58rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/IAFC.webp);
  }

  .windowRightBottom {
    margin-top: 0.01rem;
    margin-left: -0.05rem;
    height: 4.48rem;
    width: 3.57rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/profocs.webp);
  }
}

/* windowTwo */
.windowTwo {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/bg-2.webp);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.windowTwo .titleSize {
  padding: 3vw 0 2.5vw;
}

.windowTwoCon {
  display: flex;
  justify-content: space-between;
}

.windowTwoLeft {
  padding-top: 0.78vw;
  display: flex;
  flex-direction: column;
}

.windowTwoLeftTop {
  height: 14.58vw;
  width: 28.43vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/2A.webp);
}

.windowTwoLeftBottom {
  margin-top: 4px;
  margin-left: -0.4vw;
  height: 28.75vw;
  width: 29.63vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/850MAH.webp);
}

.windowTwoRight {
  margin-left: -0.8vw;
}

.windowTwoRightTop {
  height: 23.28vw;
  width: 28.59vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/battery.webp);
}

.windowTwoRightBottom {
  margin-top: 4px;
  margin-left: -0.3vw;
  height: 18.38vw;
  width: 28.54vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/window/auto.webp);
}

@media (max-width: 1000px) {
  .windowTwo {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/bg-2.webp);
    overflow: hidden;
  }

  .windowTwo .titleSize {
    padding: 1rem 0 0.5rem;
    text-align: center;
  }

  .windowTwoLeft {
    padding-top: 0.1rem;
  }

  .windowTwoLeftTop {
    height: 4.18rem;
    width: 3.58rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/2A.webp);
  }

  .windowTwoLeftBottom {
    margin-top: 0.01rem;
    margin-left: -0.08rem;
    height: 5.12rem;
    width: 4.32rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/850MAH.webp);
  }

  .windowTwoRight {
    margin-left: -0.65rem;
  }

  .windowTwoRightTop {
    height: 5.22rem;
    width: 3.66rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/battery.webp);
  }

  .windowTwoRightBottom {
    margin-top: 0.01rem;
    margin-left: -0.05rem;
    height: 4.08rem;
    width: 3.6rem;
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/window/auto.webp);
  }
}

/* spe */
.spe {
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/spe.webp);
}

.speCon {
  position: absolute;
  top: 13.64vw;
  right: 9vw;
  height: 34.42vw;
  width: 42.44vw;
  background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/pc/speCon.webp);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 4.94vw;
  padding-left: 2.7vw;
}
.speText {
  padding-top: 2vw;
  font-size: 1.3vw;
  color: #5e5d63;
  line-height: 1.6;
}

.speText .textBold {
  color: #fff;
}

@media (max-width: 1000px) {
  .spe {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/spe.webp);
  }

  .speCon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: none;
    padding-top: 1.6rem;
    padding-left: 0;
  }

  .speCon .titleSize {
    text-align: center;
    padding-bottom: 0.76rem;
  }
  .speText {
    background-image: url(https://files.myuwell.com/uwell/product/caliburn-gz2-cyber/mo/speCon.webp);
    background-size: 100% 100%;
    height: 6.61rem;
    width: 6.75rem;
    margin-left: 0.25rem;
    padding-top: 1.1rem;
    padding-left: 0.25rem;
    font-size: 0.25rem;
    line-height: 1.8;
  }
}

/* inbox */
.inbox {
  background-color: #0a0811;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inbox .titleSize {
  display: flex;
  align-items: center;
  padding-top: 4.5vw;
  padding-bottom: 2vw;
}
.inbox .titleSize .textRegular {
  padding-left: 1vw;
}

.inboxImgBox {
  position: relative;
  width: 62.8125vw;
  height: 42.1875vw;
}

.inboxImg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s linear;
  -webkit-transition: opacity 0.3s linear;
  -moz-transition: opacity 0.3s linear;
  -ms-transition: opacity 0.3s linear;
  -o-transition: opacity 0.3s linear;
}

.inboxImgAct.inboxImg {
  opacity: 1;
}

.inboxAirLeft {
  cursor: pointer;
  position: absolute;
  height: 2.2vw;
  width: 1.4vw;
  top: 50%;
  left: -3.5vw;
  transform: translate(0, -50%) rotate(180deg);
  -webkit-transform: translate(0, -50%) rotate(180deg);
  -moz-transform: translate(0, -50%) rotate(180deg);
  -ms-transform: translate(0, -50%) rotate(180deg);
  -o-transform: translate(0, -50%) rotate(180deg);
}
.inboxAirRight {
  cursor: pointer;
  position: absolute;
  height: 2.2vw;
  width: 1.4vw;
  top: 50%;
  right: -3.5vw;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
}
.inboxMo {
  display: none;
}

@media (max-width: 1000px) {
  .inbox {
    display: none;
  }

  .inboxMo {
    display: block;
    height: 180vh;
  }

  .inboxMoCon {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .inboxMoScroll {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .inboxImgMoBox {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .inboxImgMo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s linear;
    -webkit-transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    -ms-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
  }

  .inboxImgMo.inboxImgAct {
    opacity: 1;
  }

  .inboxMo .titleSize {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 1rem;
    text-align: center;
    justify-content: center;
  }
  .inboxMo .titleSize .textRegular {
    padding-left: 0.1rem;
  }
}
</style>
