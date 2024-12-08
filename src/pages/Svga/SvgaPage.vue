<template>
  <div class="svgaContainer">
    <canvas id="canvas"> </canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var ws = new WebSocket("ws://localhost:8080");
    ws.onopen = function () {
      console.log("ws onopen");
      ws.send("from client: hello");
    };
    ws.onmessage = function (e) {
      console.log("ws onmessage");
      console.log("from server: " + e.data);
    };

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = "rgb(255,255,255)";
    context.fill();
  },
};
</script>

<style lang="less" scoped>
.svgaContainer {
  height: 100vh;
  width: 100%;
}

#canvas {
  background: #000;
}
</style>
