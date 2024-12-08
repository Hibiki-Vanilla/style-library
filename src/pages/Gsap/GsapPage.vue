<template>
  <div class="bg">
    <canvas id="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "GsapPage",
  methods: {
    play() {},
  },

  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#28a92b";

    let position = { x: 0, y: 0 };

    function draw() {
      // 擦除canvas
      ctx.clearRect(0, 0, 300, 300);
      // 在新的位置重新绘制方块
      ctx.fillRect(position.x, position.y, 100, 100);
    }

    //把position的x和y的值进行变化
    gsap.to(position, {
      x: 200,
      y: 200,
      duration: 4,
      // canvas需要在每一帧进行重新绘制，才会有动画效果
      onUpdate: draw,
    });

    // const play = document.querySelector("#play");
    // const pause = document.querySelector("#pause");
    // const reverse = document.querySelector("#reverse");
    // let tl = gsap.timeline({ paused: true });
    // tl.to(".green", { x: 100, opacity: 0.5, duration: 3 });
    // // play.onclick = () => {
    // //     tl.play();
    // // };
    // pause.onclick = () => {
    //     tl.pause();
    // };
    // reverse.onclick = () => {
    //     tl.reverse();
    // };
  },
};
</script>

<style lang="less" scoped>
.box {
  height: 20px;
  width: 20px;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}
.blue {
  background-color: blue;
}
</style>
