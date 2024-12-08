<template>
  <section class="sequence">
    <div class="container" id="container">
    </div>
  </section>
</template>

<script>
export default {
  name: "SequenceAmine",
  data() {
    return {
      indexRange: [1, 199],
      store: { lengthNum: 0 },
    };
  },
  methods: {
    loadImg() {
      // 图片序列预加载
      let that = this;
      for (
        let start = this.indexRange[0];
        start <= this.indexRange[1];
        start++
      ) {
        (function (index) {
          var img = new Image();
          img.onload = function () {
            that.store.lengthNum = that.store.lengthNum + 1;
            // 存储预加载的图片对象
            that.store[index] = this;
            that.play();
          };
          img.onerror = function () {
            that.store.lengthNum = that.store.lengthNum + 1;
            that.play();
          };
          img.src = require(`@/assets/sequence/1 (${index}).webp`);
          img.class = 'imgItem';
          img.style.position = 'absolute';
          img.style.height = '100%';
          img.style.width = '100%';
        
        })(start);
      }
    },
    play() {
        let that = this;
      let eleContainer = document.getElementById("container");
      let percent = Math.round(( 100 * this.store.lengthNum) / 199);


      // 全部加载完毕，无论成功还是失败
      if (percent == 100) {
        let index = this.indexRange[0];
        eleContainer.innerHTML = "";
        // 依次append图片对象
        let step = function () {
          if (that.store[index - 1]) {
            eleContainer.removeChild(that.store[index - 1]);
          }
          eleContainer.appendChild(that.store[index]);
          // 序列增加
          index++;
          // 如果超过最大限制
          if (index <= that.indexRange[1]) {
            setTimeout(step, 42);
          } else {
            // 本段播放结束回调
            that.play()
          }
        };
        // 等100%动画结束后执行播放
        setTimeout(step, 100);
      }
    },
  },
  mounted() {
    this.loadImg();
  },
};
</script>

<style lang="less" scoped>
.sequence {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 60vw;
  height: 50vw;
  background-color: #000;
  position: relative;

  img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

</style>
