<template>
  <section class="BasicKeystoke">
    <div class="colorButtom">
      <span>渐变色按钮</span>
    </div>

    <div class="colorButtom colorButtomClip">
      <span>动态边框按钮</span>
    </div>

    <div class="colorButtom colorButtomAct">
      <span>动态变色按钮</span>
    </div>
  </section>
</template>

<style scoped lang="less">
.BasicKeystoke {
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  width: 1000px;
  margin: 0 auto;
}

.colorButtom {
  height: 46px;
  width: 150px;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, gold, deeppink);
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -15px;
    bottom: -15px;
    left: -15px;
    right: -15px;
    border: 5px solid #24acf2;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0px round 10px);
  }

  span {
    color: white;
    font-size: 20px;
  }
}

.colorButtomAct {
  animation: hue 3s infinite linear;
}
.colorButtomClip {
  animation: hue 3s infinite linear;
  &::before,
  &::after {
    animation: clippath 3s infinite linear;
  }
  &::after {
    animation: clippath 3s infinite -1.5s linear;
  }
}

@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes clippath {
  0% {
    clip-path: inset(0 0 95% 0);
    filter: hue-rotate(0deg);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
  100% {
    clip-path: inset(0 0 95% 0);
    filter: hue-rotate(360deg);
  }
}
</style>
