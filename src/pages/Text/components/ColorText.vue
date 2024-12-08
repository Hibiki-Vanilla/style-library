<template>
  <section class="colorText">
    <div class="container">
      <div class="row rowBox">
        <div class="col-lg-5">
          <h3>基础文本</h3>
        </div>
        <div class="col-lg-7">
          <h5>默认黑色字体</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textRed">文本颜色修改</h3>
        </div>
        <div class="col-lg-7">
          <h5>需提供html色值或RGB色值</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textRgba">黑色50%透明度(RGBA)</h3>
        </div>
        <div class="col-lg-7">
          <h5>需提供色值与百分比透明度</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textLinear">渐变色（45度角）</h3>
        </div>
        <div class="col-lg-7">
          <h5>需提供两个色值以及角度</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textLinearFour">渐变色可设定多个数值</h3>
        </div>
        <div class="col-lg-7">
          <h5>渐变色可设置多个色值变化,建议在5个色值以内</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textAnimation">动态变色文本</h3>
        </div>
        <div class="col-lg-7">
          <h5>需切换的色值,以及开始色值到结束色值的时间（单位/秒）</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textMix">雕刻文本</h3>
        </div>
        <div class="col-lg-7">
          <h5>由文字阴影组成,需提供文字本体色值以及阴影色值</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5">
          <h3 class="textColorHover">鼠标移入颜色切换</h3>
        </div>
        <div class="col-lg-7">
          <h5>需提供基础色值,以及鼠标移入后变化色值,默认变化过程时间为0.3s</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textSizeHover">鼠标移入大小变化</h3>
        </div>
        <div class="col-lg-7">
          <h5>需基础字体大小,与变化后字体大小。可颜色与大小同时变化</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textChangeHover">
            <div class="textChangeHoverTop">鼠标移入文本变化</div>
            <div class="textChangeHoverBottom">文本变化移出消除</div>
          </h3>
        </div>

        <div class="col-lg-7">
          <h5>需变化前后的文本内容,建议文本字数差距不宜过大</h5>
        </div>

        <div class="col-lg-5">
          <h3 class="textTransitionHover">鼠标移入位移</h3>
        </div>
        <div class="col-lg-7">
          <h5>需提供位移前后的位置,如向右位移多少Px单位</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.colorText {
  min-height: 100vh;
  padding-top: 100px;
}
.colorText h3 {
  margin-bottom: 20px;
}
.textRed {
  color: aqua;
}
.textRgba {
  color: rgba(0, 0, 0, 0.5);
}
.textLinear {
  background: linear-gradient(120deg, blue, red);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.textLinearFour {
  background: linear-gradient(120deg, blue, white, red, black);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.textAnimation {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 600% 600%;
  animation: gradientBG 3s ease infinite;
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.textMix {
  color: #fff;
  text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
}

.textColorHover:hover {
  transition: all 0.3s;
  color: #23a6d5;
}
.textSizeHover:hover {
  transition: all 0.3s;
  font-size: 36px;
}
.textChangeHover {
  position: relative;
}
.textChangeHoverTop {
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.3s;
}
.textChangeHoverBottom {
  opacity: 0;
  transition: all 0.3s;
}
.textChangeHover:hover .textChangeHoverTop {
  opacity: 0;
}
.textChangeHover:hover .textChangeHoverBottom {
  opacity: 1;
}
.textTransitionHover:hover {
  transition: all 0.3s;
  transform: translate(50px);
}

.rowBox {
  padding-bottom: 100px;
}
</style>
