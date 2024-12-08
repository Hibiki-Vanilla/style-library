<template>
  <section>
    <div class="loading">
      <div class="dot dot-one"></div>
      <div class="dot dot-two"></div>
      <div class="dot dot-three"></div>
      <div class="dot dot-four"></div>
      <div class="dot dot-five"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@colors: {
  one: #7ef9ff;
  two: #89cff0;
  three: #4682b4;
  four: #0f52ba;
  five: #000080;
};
@length: length(@colors);
.loading {
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }
  }

  each(@colors,{
    .dot-@{key}{
        background: @value;
    &::before {
        animation-delay: @index * 0.2s;
      }
    }

});
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>
