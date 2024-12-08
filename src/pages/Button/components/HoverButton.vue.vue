<template>
  <section class="hoverButton">
    <div class="item">
      <button class="leftButtomAnime">按钮</button>
    </div>
    <div class="item">
      <button class="rightButtomAnime">按钮</button>
    </div>
    <div class="item">
      <button class="leftTopAnime">按钮</button>
    </div>
    <div class="item">
      <button class="rightTopAnime">按钮</button>
    </div>
    <div class="item">
      <button class="midAnime">按钮</button>
    </div>

    <!-- 操作 -->
    <div class="item">
      <button class="jellyAnime">果冻</button>
    </div>
    <div class="item">
      <button class="pulse">脉冲</button>
    </div>
    <div class="item">
      <button class="shine">闪耀</button>
    </div>

    <!-- 滑动 -->
    <div class="item">
      <button class="topSlideAnime">滑动</button>
    </div>
    <div class="item">
      <button class="rightSlideAnime">滑动</button>
    </div>
    <div class="item">
      <button class="leftSlideAnime">滑动</button>
    </div>
    <div class="item">
      <button class="bottomSlideAnime">滑动</button>
    </div>

    <!-- 输入框 -->
    <div class="item">
      <div class="inputLine">
        <input type="text" placeholder="输入轮廓" />
        <span class="bottom"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="left"></span>
      </div>
    </div>

    <div class="item">
      <div class="inputLineCon">
        <input type="text" placeholder="输入轮廓" />
        <span class="bottom"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="left"></span>
      </div>
    </div>

    <div class="item">
      <div class="inputLoop">
        <input type="text" placeholder="输入轨迹" />
        <span class="bottom"></span>
        <span class="right"></span>
        <span class="top"></span>
        <span class="left"></span>
      </div>
    </div>

    <!-- 下划线 -->
    <div class="item">
      <div class="inputUnline">
        <input type="text" placeholder="输入下划线">
  <span></span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
.hoverButton {
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2em;
  grid-auto-rows: 8em;
  padding: 80px 0;
  margin: 0 auto;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(39, 41, 84, 0.5);
  }

  button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: #fff;
    padding: 0.5em 1em;
    outline: 0;
    border: none;
    background-color: #2d3058;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
    }
  }

  .leftButtomAnime:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: -webkit-transform 0.45s ease-in-out;
    transition: transform 0.45s ease-in-out;
    transition: transform 0.45s ease-in-out, -webkit-transform 0.45s ease-in-out;
  }

  .leftButtomAnime:hover:before {
    -webkit-transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }

  .rightButtomAnime:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 100%;
    left: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  .rightButtomAnime:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
  .leftTopAnime:before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  .leftTopAnime:hover::before {
    transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
  }

  .rightTopAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 100%;
    left: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  .rightTopAnime:hover::before {
    transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
  }

  .midAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  .midAnime:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }

  //   果冻
  .jellyAnime:hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }

  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }

  // 脉冲
  .pulse {
    overflow: unset;
  }
  .pulse::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 4px solid hsl(236, 32%, 26%);
    transform-origin: center;
    transform: scale(1);
  }

  .pulse:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
  }

  // 闪耀
  .shine::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  .shine:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }

  .topSlideAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  .topSlideAnime:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
  .rightSlideAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center left;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  .rightSlideAnime:hover::before {
    transform-origin: center right;
    transform: scaleX(1);
  }

  .leftSlideAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  .leftSlideAnime:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  .bottomSlideAnime::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center top;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  .bottomSlideAnime:hover::before {
    transform-origin: center bottom;
    transform: scaleY(1);
  }

  //   输入框
  .inputLine {
    position: relative;
    input {
      width: 6.5em;
      color: white;
      font-size: inherit;
      font-family: inherit;
      background-color: hsl(236, 32%, 26%);
      padding: 0.35em 0.45em;
      border: 1px solid transparent;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }

    span {
      position: absolute;
      background-color: #3cefff;
      transition: transform 0.5s ease;
    }

    .bottom,
    .top {
      height: 1px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 1px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    input:focus ~ .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    input:focus ~ .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    input:focus ~ .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    input:focus ~ .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }

  .inputLineCon {
    position: relative;

    input {
      width: 6.5em;
      color: white;
      font-size: inherit;
      font-family: inherit;
      background-color: hsl(236, 32%, 26%);
      padding: 0.35em 0.45em;
      border: 1px solid transparent;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }

    span {
      position: absolute;
      background-color: #fc2f70;
      transform-origin: center;
      transition: transform 0.5s ease;
    }

    .bottom,
    .top {
      height: 1px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 1px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .top {
      top: 0;
    }

    .bottom {
      bottom: 0;
    }

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }

    input:focus ~ .top,
    input:focus ~ .bottom {
      transform: scaleX(1);
    }

    input:focus ~ .left,
    input:focus ~ .right {
      transform: scaleY(1);
    }
  }
  // 输入轮廓
  .inputLoop {
    position: relative;
    input {
      width: 6.5em;
      color: white;
      font-size: inherit;
      font-family: inherit;
      background-color: hsl(236, 32%, 26%);
      padding: 0.35em 0.45em;
      border: 1px solid transparent;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: hsla(0, 0%, 100%, 0.6);
    }

    span {
      position: absolute;
      background-color: #fc2f70;
      transition: transform 0.1s ease;
    }

    .bottom,
    .top {
      height: 1px;
      left: 0;
      right: 0;
      transform: scaleX(0);
    }

    .left,
    .right {
      width: 1px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    input:focus ~ .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
      transition-delay: 0.05s;
    }

    input:focus ~ .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
      transition-delay: 0.15s;
    }

    input:focus ~ .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
      transition-delay: 0.25s;
    }

    input:focus ~ .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }

//   下划线
}
</style>
