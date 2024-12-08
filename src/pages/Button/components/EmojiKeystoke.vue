<template>
  <section class="emojiKeystoke">
    <div class="g-wrap">
      <div class="emoji" v-for="index in 50" :key="index"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.emojiKeystoke {
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  width: 1000px;
  margin: 0 auto;

  $expression: "😀", "🤣", "❤️", "😻", "👏", "🤘", "🤡", "🤩", "👍🏼", "🐮", "🎈",
    "💕", "💓", "💚";

  .g-wrap {
    position: relative;
    width: 50px;
    height: 50px;
    &::before {
 content: "👍🏼";
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        text-align: center;
        z-index: -1;
        user-select: none;
        filter: grayscale(1);
        border: 1px solid #999;
        border-radius: 50%;
        background: #999;
        transition: 0.1s;
    }
    &:active::before {
      transform: scale(1.1);
    }
  }

  @for $i from 1 to 51 {
    .emoji:nth-child(#{$i}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      transform: rotate(#{random() * 80 - 40}deg);
      animation: move
        #{random() *
        2500 +
        1500}ms
        infinite
        #{random() *
        4000 /
        -1000}s
        cubic-bezier(.46,.53,.51,.62);;

       opacity: 0;
      transition: 1.5s opacity 0.8s;

      &::before {
        content: nth($expression, random(length($expression)));
        position: absolute;
        font-size: 50px;
      }
    }

    .emoji:active {
        opacity: 1!important;
      transition: 0.1s opacity;
    }
    @keyframes move {
      100% {
        transform: rotate(0) translate(0, -250px);
      }
    }
  }
}
</style>
