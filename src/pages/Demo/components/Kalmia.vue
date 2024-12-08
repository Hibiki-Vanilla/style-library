<template>
  <!-- kalmia -->
  <section class="kalmia">
    <Swiper id="swiperBox" :options="swiperOption">
      <SwiperSlide class="swiperFirstPage">
        <div class="swiperFirstPageCon">
          <div class="bannerTextBox">
            <img src="@/assets/images/kalmia/logo.png" class="kalmiaLogo" />
            <div class="bannerContent">
              <span class="bannerSpan banerSpanTop">FIT YOUR LIPS</span>
              <span class="bannerSpan banerSpanMid">SOOTHE YOUR AHANDS</span>
              <span class="bannerSpan banerSpanBotoom">CATCH YOUR EYES</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperTwoPage">
        <div class="swiperTwoPageCon">
          <div class="colorTitle">6 COLORS AVAILABLE</div>
          <div class="colorCon">
            <div
              class="colorImgBox"
              v-for="(item, index) of colorList"
              :key="index"
            >
              <img
                class="colorImg"
                :src="item.img"
                :alt="item.name"
                :style="'transition-delay:' + '0.' + (index + 1) + 's'"
              />
              <div
                class="colorName"
                :style="'transition-delay:' + '0.' + (index + 2) + 's'"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperThreePage">
        <div class="swiperThreePageCon">
          <div class="productBox">
            <img
              class="productImg productImgTip"
              src="@/assets/images/kalmia/product/1.png"
            />
            <img
              class="productImg"
              src="@/assets/images/kalmia/product/2.png"
            />
            <div class="productTextRow podText">
              <span class="productTextLeft">Refillable pod</span>
              <div class="productTextLine"></div>
              <div class="productTextRadiu"></div>
            </div>

            <div class="productTextRow deviceText">
              <span class="productTextLeft">Device</span>
              <div class="productTextLine"></div>
              <div class="productTextRadiu"></div>
            </div>

            <div class="productTextRow typeText">
              <span class="productTextLeft">Type-C port</span>
              <div class="productTextLine"></div>
              <div class="productTextRadiu"></div>
            </div>

            <div class="productTextRow plugText">
              <div class="productTextRadiu"></div>
              <div class="productTextLine"></div>
              <span class="productTextRight">Filler plug</span>
            </div>

            <div class="productTextRow ledText">
              <div class="productTextRadiu"></div>
              <div class="productTextLine"></div>
              <span class="productTextRight">LED indicator</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperFourPage">
        <div class="textBox">
          <img
            class="textBoxSign"
            src="@/assets/images/kalmia/sign.png"
            alt=""
          />
          <span class="textBoxBoldText">KALMIA</span>’s elegant and compact
          design makes it a charming companion to consumers. Stable performance
          and effortless operation guarantee you joyful vaping.
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiperFixPage">
        <div class="swiperFixPageCon">
          <div class="fixTextBox">
            <div class="fixTextTitle">
              SOOTHE
              <br />
              YOUR <span class="fixTextTitleWitch">HANDS</span>
            </div>
            <div class="fixTextContent">
              The smooth shell, palm size, and round
              <br />
              corners of KALMIA bring you a pleasant grip.
            </div>
          </div>
        </div>
        <img class="fixRightImg" src="@/assets/images/kalmia/hands/1.png" />
        <img class="fixLeftImg" src="@/assets/images/kalmia/hands/2.png" />
      </SwiperSlide>
      <SwiperSlide class="swiperSixPage">
        <div class="speTextBox">
          <div class="speTextTitle">SPECIFICATIONS</div>
          <div class="speTextSpan speTextSpanOne">
            <span class="speTextSpanBold">Material:</span> PATM0251, AL, PC+ABS,
            POK
          </div>
          <div class="speTextSpan speTextSpanTwo">
            <span class="speTextSpanBold">Size:</span> L:20 mm×W:10.8mm×H:109mm
          </div>

          <div class="speTextSpan speTextSpanThree">
            <span class="speTextSpanBold">Net Weight:</span> 24.5g
          </div>

          <div class="speTextSpan speTextSpanFour">
            <span class="speTextSpanBold">E-liquid Capacity:</span> 1.6ml
          </div>

          <div class="speTextSpan speTextSpanFix">
            <span class="speTextSpanBold">Max Power:</span> 13W
          </div>

          <div class="speTextSpan speTextSpanSix">
            <span class="speTextSpanBold">Battery Capacity:</span> 400mAh
          </div>

          <div class="speTextSpan speTextSpanSeven">
            <span class="speTextSpanBold">Refillable Pod Specification:</span>
          </div>

          <div class="speTextSpan speTextSpanEngith">
            FeCrAl UN2 Meshed-H 1.2Ω refillable pod
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide class="swiperSevenPage">
        <div class="giftBox">
          <div class="giftBoxTitle">WHAT ’ S IN THE BOX</div>
          <div class="giftBoxCon">
            <div class="giftItem" v-for="(item,index) of giftList" :key="index">
                <div  class="giftItemImgBox" >
                    <img class="giftItemImg" :src="item.img"  alt="">
                </div>
                <div class="giftItemText">{{item.name}}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="siwperBottom">
        
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "kalmiaPage",
      components: {
      Swiper,
      SwiperSlide,
    },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。
        speed: 500, // 切换速度
        slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。'auto'则自动根据slides的宽度来设定数量。
        // touchRatio: 0, // 触摸比例。 设置为0时，完全无法滑动
        spaceBetween: 0, // slide之间距离(demo用于区分slide, 实际开发可删除)
      },
      colorList: [
        {
          img: require("@/assets/images/kalmia/color/1.webp"),
          name: "Innoc White",
        },
        {
          img: require("@/assets/images/kalmia/color/2.webp"),
          name: "Calm Cyan",
        },
        {
          img: require("@/assets/images/kalmia/color/3.webp"),
          name: "Gentle Pink",
        },
        {
          img: require("@/assets/images/kalmia/color/4.webp"),
          name: "Youthful Green",
        },
        {
          img: require("@/assets/images/kalmia/color/5.webp"),
          name: "Mysti Black",
        },
        {
          img: require("@/assets/images/kalmia/color/6.webp"),
          name: "Serene Blue",
        },
      ],
      giftList:[
        {img:require("@/assets/images/kalmia/box/1.png"),name:'1× KALMIA pod system'},
        {img:require("@/assets/images/kalmia/box/2.png"),name:'1× FeCrAI UN2 Meshed-H 1.2Ω KALMIA refillable pod(spare)'},
        {img:require("@/assets/images/kalmia/box/3.png"),name:'1× Type-C cable'},
        {img:require("@/assets/images/kalmia/box/4.png"),name:'1× User manual'}
      ]
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.kalmia {
  height: 100vh;
  width: 100%;
}
#swiperBox {
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiperFirstPage {
  position: relative;
  background-image: url("@/assets/images/kalmia/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.swiperFirstPageCon {
  position: relative;
  height: 100%;
  width: 75%;
  margin: 0 auto;
}
.bannerTextBox {
  position: absolute;
  top: 24vh;
  left: 0;
}
.kalmiaLogo {
  transition: all 1.5s 0.2s;
  /* height: 151px; */
  width: 449px;
  padding-bottom: 90px;
  opacity: 0;
}
.bannerContent {
  display: flex;
  flex-direction: column;
}
.bannerSpan {
  font-size: 48px;
  line-height: 1.5;
  color: #000;
  opacity: 0;
}
.banerSpanTop {
  transition: all 1.5s 0.4s;
}
.banerSpanMid {
  transition: all 1.5s 0.6s;
}
.banerSpanBotoom {
  transition: all 1.5s 0.8s;
}
.swiper-slide-active .kalmiaLogo,
.swiper-slide-active .bannerSpan {
  opacity: 1;
}

/* two */
.swiperTwoPage {
  position: relative;
  height: 100%;
  width: 75%;
  margin: 0 auto;
}
.colorTitle {
  color: #000;
  font-size: 112px;
  padding-top: 110px;
  padding-bottom: 90px;
  text-align: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}
.swiper-slide-active .colorTitle {
  opacity: 1;
}
.colorCon {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.colorImgBox {
  width: 16.67%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s linear;
}
.colorImg {
  height: 583px;
  width: 92px;
  opacity: 0;
  transform: translate(0, 200px);
  transition: all 0.8s ease-in;
}
.colorImgBox:hover {
  transform: scale(1.1);
}
.colorName {
  width: 100%;
  text-align: center;
  font-size: 24px;
  opacity: 0;
  transition: all 1.5s ease-in-out;
}
.swiper-slide-active .colorImg,
.swiper-slide-active .colorName {
  opacity: 1;
  transform: translate(0, 0);
}

/* three */
.swiperThreePage {
  background-image: url("@/assets/images/kalmia/product/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.swiperThreePageCon {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.productBox {
  position: relative;

  height: 865px;
  width: 600px;
}
.productImg {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.productImgTip {
  left: -21.3%;
  bottom: -23.5%;
  transition: all 0.8s ease-in;
}
.swiper-slide-active .productImgTip {
  left: 0;
  bottom: 0;
}

.productTextRow {
  position: absolute;
  display: flex;
  align-items: center;
  white-space: nowrap;
  opacity: 0;
  transition: all 1s ease-in;
}
.productTextLeft {
  padding-right: 20px;
}
.productTextRight {
  padding-left: 20px;
}
.productTextLine {
  height: 1px;
  background: #000;
}
.productTextRadiu {
  height: 12px;
  width: 12px;
  border: 1px solid #000;
  border-radius: 100%;
  background-color: #fff;
}

.podText {
  top: 15%;
  right: 27%;
  transform: translate(150px);
  transition-delay: 0.3s;
}
.podText .productTextLine {
  width: 370px;
}

.deviceText {
  top: 43%;
  right: 50%;
  transform: translate(150px);
  transition-delay: 0.7s;
}
.deviceText .productTextLine {
  width: 460px;
}

.typeText {
  top: 97%;
  right: 90%;
  transform: translate(150px);
  transition-delay: 1.1s;
}
.typeText .productTextLine {
  width: 250px;
}

.plugText {
  top: 19%;
  left: 87%;
  transform: translate(-150px);
  transition-delay: 0.5s;
}
.plugText .productTextLine {
  width: 360px;
}
.ledText {
  top: 55%;
  left: 39%;
  transform: translate(-150px);
  transition-delay: 0.9s;
}
.ledText .productTextLine {
  width: 390px;
}

.swiper-slide-active .productTextRow {
  opacity: 1;
  transform: translate(0, 0);
}

.swiperFourPage {
  position: relative;
  background-image: url("@/assets/images/kalmia/four.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.textBox {
  position: absolute;
  bottom: 0;
  left: calc(50% - 550px);
  height: 340px;
  width: 1100px;
  padding-left: 160px;
  padding-top: 80px;
  background-color: rgba(31, 29, 29, 0.2);
  color: #fff;
  font-size: 36px;
  box-sizing: border-box;
  opacity: 0;
  transition: transform 1s 0.2s linear, opacity 1s 0.6s linear;
  transform: translate(0, 340px);
}
.textBoxSign {
  position: absolute;
  top: -14%;
  left: -3%;
}
.textBoxBoldText {
  font-weight: bolder;
}

.swiper-slide-active .textBox {
  opacity: 1;
  transform: translate(0, 0px);
}

.swiperFixPage {
  position: relative;
  background-image: url("@/assets/images/kalmia/hands/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.swiperFixPageCon {
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 75%;
}
.fixTextBox {
  position: absolute;
  z-index: 2;
  top: 310px;
  left: 0;
}
.fixTextTitle {
  font-weight: bolder;
  font-size: 72px;
  color: #000;
  opacity: 0;
  transition: transform 1s 0.2s linear, opacity 1s 0.6s linear;
  transform: translate(0, 300px);
}
.fixTextTitleWitch {
  color: #fff;
}
.fixTextContent {
  font-weight: lighter;
  font-size: 36px;
  color: #635e59;
  opacity: 0;
  transition: transform 1s 0.4s linear, opacity 1s 0.8s linear;
  transform: translate(0, 300px);
}
.swiper-slide-active .fixTextTitle,
.swiper-slide-active .fixTextContent {
  opacity: 1;
  transform: translate(0, 0px);
}
.fixLeftImg {
  position: absolute;
  bottom: -23%;
  left: 20%;
  height: 500px;
  animation: float_produst 10s ease-in-out 1s infinite alternate;
}
.fixRightImg {
  position: absolute;
  right: 8%;
  top: 13%;
  height: 725px;
  animation: float_produst 10s ease-in-out 1s infinite alternate;
}
@keyframes float_produst {
  0% {
    transform: none;
  }
  25% {
    transform: translate(5px, -8px) scale(1.02) rotate(-3deg);
  }
  75% {
    transform: translate(5px, -8px) scale(1.01) rotate(3deg);
  }
  100% {
    transform: none;
  }
}

.swiperSixPage {
  position: relative;
  background-image: url("@/assets/images/kalmia/spe/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.speTextBox {
  position: absolute;
  top: 230px;
  right: 150px;
}
.speTextTitle {
  font-size: 72px;
  padding-bottom: 60px;
  font-weight: bolder;
  color: #585451;
  opacity: 0;
  transition: transform 1.3s 0.2s linear, opacity 1.5s 0.2s linear;
  transform: translate(300px);
}
.speTextSpan {
  font-size: 36px;
  color: #857b75;
  font-weight: lighter;
  line-height: 1.8;
  opacity: 0;
  transform: translate(300px);
}
.speTextSpanBold {
  font-weight: bolder;
}

.swiper-slide-active .speTextTitle,
.swiper-slide-active .speTextSpan {
  opacity: 1;
  transform: translate(0);
}
.speTextSpanOne {
  transition: transform 1.3s 0.3s linear, opacity 1.5s 0.3s linear;
}
.speTextSpanTwo {
  transition: transform 1.3s 0.4s linear, opacity 1.5s 0.4s linear;
}
.speTextSpanTwo {
  transition: transform 1.3s 0.5s linear, opacity 1.5s 0.5s linear;
}
.speTextSpanThree {
  transition: transform 1.3s 0.6s linear, opacity 1.5s 0.6s linear;
}
.speTextSpanFour {
  transition: transform 1.3s 0.7s linear, opacity 1.5s 0.7s linear;
}
.speTextSpanFix {
  transition: transform 1.3s 0.8s linear, opacity 1.5s 0.8s linear;
}
.speTextSpanSix {
  transition: transform 1.3s 0.9s linear, opacity 1.5s 0.9s linear;
}
.speTextSpanSeven {
  transition: transform 1.3s 1s linear, opacity 1.5s 1s linear;
}
.speTextSpanEngith {
  transition: transform 1.3s 1.1s linear, opacity 1.5s 0.8s linear;
}

.swiperSevenPage {
  position: relative;
  background-image: url("@/assets/images/kalmia/box/boxBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.giftBox {
  position: absolute;
  top: 150px;
  left: calc(50% - 750px);
  height: 650px;
  width: 1500px;
  background-color: rgba(245, 247, 255, 0.75);
  opacity: 0;
  transform: scale(0.1);
  transition: transform 1.3s 0.2s linear, opacity 1.5s 0.2s linear;

}
.giftBoxTitle {
  width: 100%;
  padding-top: 70px;
  font-size: 72px;
  font-weight: bolder;
  color: #3a3a3a;
  text-align: center;
}

.giftBoxCon{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.giftItem{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.giftItemImgBox{
  height: 380px;
  width: 100%;
  display: flex;
  justify-content: center;
align-items: center;
}

.giftItemText{
  font-size: 24px;
  text-align: center;
  color: #000;
}

.swiper-slide-active .giftBox{
  opacity: 1;
  transform: scale(1);
}



.siwperBottom {
  height: 500px;
  background-color: #000;
}

.siwperBottomCon{
  height: 100%;
  width: 75%;
  margin: 0 auto;
}


</style>
