<template>
  <section class="smoke">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <filter id="blur">
        <fegaussianblur stddeviation="10"></fegaussianblur>
      </filter>
    </svg>
    <div class="h">
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
      <div class="c"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300);

.smoke {
  background: #332b33;
  height: 100vh;
}

.h {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  border: 4px solid white;

  .c {
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 400px;
    position: absolute;
    margin: auto;
    @for $i from 1 through 60 {
      &:nth-of-type(#{$i}) {
        box-shadow: 3px 0px rgba(255, 255, 255, -($i/40)),
          6px -5px rgba(10, 0, 0, -($i/40));
        width: ($i * 6) + 0px;
        height: ($i * 1) + 0px;
        right: ($i * 10) + 0px;
        bottom: ($i * 10) + 0px;
        //-webkit-filter:blur($i/3 + 8px);
        -webkit-filter: blur($i/3 + 8px);
        -moz-filter: blur($i/3 + 8px);
        -o-filter: blur($i/3 + 8px);
        -ms-filter: blur($i/3 + 8px);
        //filter: url(#blur);
        transform-origin: ($i * 4) + 0px ($i * 2) + 0px;
        animation: spin 3s ($i/10) + 0s linear infinite;
        // background:rgba(90 + ($i*3),33 + ($i*1) ,205,1 - ($i/80));
        background: rgba(255, 255, 255, 1 - ($i/80));
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
