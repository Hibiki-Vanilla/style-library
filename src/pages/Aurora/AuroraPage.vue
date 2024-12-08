<template>
  <div>
    <div class="aurora">
      <div class="g-aurora"></div>
    </div>
    <svg id="blob" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wave">
          <feTurbulence
            baseFrequency="0.003 0.003"
            id="turbulence"
            numOctaves="3"
            result="noise"
            seed="10"
          ></feTurbulence>
          <feDisplacementMap
            id="displacement"
            in2="noise"
            in="SourceGraphic"
            scale="96"
          ></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frames: 0,
      rad: Math.PI / 180,
    };
  },
  methods: {
    freqAnimation() {
      let filter=document.querySelector("#turbulence");
      let bfx = 0.005;
      let  bfy = 0.005;
      this.frames += .5;
        bfx += 0.0025 * Math.cos(this.frames * this.rad);
        bfy += 0.0025 * Math.sin(this.frames * this.rad);
      const bf = bfx.toString() + " " + bfy.toString();
      filter.setAttributeNS(null, "baseFrequency", bf);
      window.requestAnimationFrame(this.freqAnimation);
    },
  },
  mounted() {
    window.requestAnimationFrame(this.freqAnimation);
  },
};
</script>

<style lang="scss" scoped>
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function shadowSet($n, $size) {
  $shadow: 0 0 0 0 #fff;

  @for $i from 0 through $n {
    $x: randomNum(1920);
    $y: randomNum(1080);
    $scale: randomNum($size) / 10;

    $shadow: $shadow, #{$x}px #{$y}px 0 #{$scale}px rgba(255, 255, 255, 0.8);
  }

  @return $shadow;
}

body,
html {
  width: 100%;
  height: 100%;
  display: flex;
}

.aurora {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100vh;
  background: #0b1a3a;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: shadowSet(200, 6);
  }
}

.g-aurora {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100vw;
    background: radial-gradient(
      circle at 100% 100%,
      transparent 45%,
      #bd63c1 55%,
      #53e5a6 65%,
      transparent 85%
    );
    box-shadow: inset 0px 0 30px 0 #0b1a3a;
    filter: url(#wave);
    mix-blend-mode: color-dodge;
    transform: rotate(45deg) scaleX(1.4);
  }
}

@keyframes bmove {
  from {
    transform: translateZ(10px) translateY(0);
  }
  to {
    transform: translateZ(10px) translateY(-80px);
  }
}

@keyframes cmove {
  from {
    transform: translateZ(-5px) translateY(0);
  }
  to {
    transform: translateZ(-5px) translateY(80px);
  }
}

svg {
  height: 0;
  position: absolute;
}
</style>
