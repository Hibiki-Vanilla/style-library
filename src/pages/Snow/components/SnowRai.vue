<template>
  <div class="mask">
    <div
      v-for="(item, index) in 100"
      :key="index"
      class="snow"
      :class="`snow-${index}`"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="less" scoped>
.mask {
  position: relative;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
}

.snow {
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
}

.loop(@n,@i:0) when (@i < @n) {



    @trans-value:~`Math.random() * 100`;
    @random-scale: ~`Math.random()`;

    @fall-duration:~`10 + Math.floor( Math.random() * 20)`;
    @fall-delay: ~` Math.floor(Math.random() * 30) * -1`;


     @random-x: ~`Math.random() * 100`;
     @random-offset:~`-10 + Math.floor( Math.random() * 1)`;
    @random-x-end-yoyo:~`@{random-x} + (@{random-offset} / 2)`;






      @random-yoyo-time:~`(3 + Math.floor( Math.random() * 5)) / 10`;
    @random-yoyo-y: @random-yoyo-time * 100;
    @random-x-end: @random-x + @random-offset;

      @random-yoyo-time-now:@random-yoyo-time * 100;

      @random-yoyo-time-form:~"@{random-yoyo-time-now}%";



    .snow-@{i}{
      opacity:~ `Math.random()`;
      transform:~'translate(@{trans-value}vw , -10px) scale(@{random-scale})';
      animation: ~"fall-@{i} @{fall-duration}s @{fall-delay}s linear infinite";
    }

        @keyframes ~"fall-@{i}" {

        @{random-yoyo-time-form}{

        transform: ~"translate(@{random-x-end}vw, @{random-yoyo-y}vh) scale(@{random-scale})";
      }

      to {
        transform: ~'translate(@{random-x-end-yoyo}vw, 100vh) scale(@{random-scale})';
      }
    }


  .loop(@n, (@i + 1));

  }

    .loop(100);
</style>
