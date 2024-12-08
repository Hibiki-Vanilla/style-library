<template>
  <section class="page">
    <div class="con">
      <img src="@/assets/video/opacity/base.webp" />
      <img src="@/assets/video/opacity/top.webp" class="actImg topImg" />
      <img src="@/assets/video/opacity/bottom.webp" class="actImg bottomImg" />
    </div>
    <div class="con">
      <img src="@/assets/video/opacity/base-2.webp" />
      <img src="@/assets/video/opacity/1.webp" class="actTwoImg oneImg" />
      <img src="@/assets/video/opacity/2.webp" class="actTwoImg twoImg" />
      <img src="@/assets/video/opacity/3.webp" class="actTwoImg threeImg" />
      <img src="@/assets/video/opacity/4.webp" class="actTwoImg fourImg" />
      <img src="@/assets/video/opacity/5.webp" class="actTwoImg fiveImg" />
      <img src="@/assets/video/opacity/6.webp" class="actTwoImg sixImg" />
      <img src="@/assets/video/opacity/7.webp" class="actTwoImg sevenImg" />
    </div>
  </section>
</template>

<style lang="less" scoped>
.con {
  background-color: aqua;
  margin: 0 auto;
  width: 821px;
  height: 540px;
  position: relative;
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
  .actImg {
    position: absolute;
    top: 0;
    transition: opacity 0.3s ease 0s;
    opacity: 0;
  }
  .topImg {
    animation: opacityTop 5s infinite ease;
  }

  .bottomImg {
    animation: opacityBottom 5s infinite ease;
  }

  @keyframes opacityTop {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes opacityBottom {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.con + .con {
  width: 720px;
  height: 520px;
  margin-top: 150px;
}
.actTwoImg {
  position: absolute;
  top: 0;
  transition-duration: 1s;
  transform: translateY(0px);

}

.sevenImg {
  animation: sevenImg 5s infinite ease;
}
.sixImg{
  animation: sixImg 5s infinite ease;
}
.fiveImg{
  animation: fiveImg 5s infinite ease;

}
.fourImg{
 animation: fourImg 5s infinite ease;
}
.threeImg{
 animation: threeImg 5s infinite ease;
}
.twoImg{
 animation: twoImg 5s infinite ease;
}

@keyframes twoImg {
  0% {
    transform: translateY(0px);
  }
  50% {
transform: translateY(-8.08%);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes threeImg {
  0% {
    transform: translateY(0px);
  }
  50% {
 transform: translateY(-12.12%);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes fourImg {
  0% {
    transform: translateY(0px);
  }
  50% {
   transform: translateY(-14.81%);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes fiveImg {
  0% {
    transform: translateY(0px);
  }
  50% {
      transform: translateY(-16.73%);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes sixImg {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-18.85%);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes sevenImg {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-22.5%);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
