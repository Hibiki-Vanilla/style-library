<template>
  <section>
    <div class="textBox">
      <div class="reveal" v-show="revealStatus">Css3 Style Animation</div>
    </div>
    <div class="buttonRow">
      <button @click="clickChange">触发效果</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      revealStatus: true,
    };
  },
  methods: {
    clickChange() {
      if (this.revealStatus) {
        this.revealStatus = false;

        setTimeout(() => {
          this.revealStatus = true;
          this.animationBuild();
        }, 1000);
      }
    },
    animationBuild() {
      let delay = 0.3;
      let revealText = document.querySelector(".reveal");
      let letters = revealText.textContent.split("");
      revealText.textContent = "";
      let middle = letters.filter((e) => e !== " ").length / 2;

      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
        revealText.append(span);
      });
    },
  },
  mounted() {
    this.animationBuild();
  },
};
</script>

<style lang="less" scoped >
.textBox {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  .reveal {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: 2em;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;

    span {
      opacity: 0;
      transform: scale(0);
      animation: fadeIn 2.4s forwards;
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      background: black;
      opacity: 0;
      transform: scale(0);
    }

    &::before {
      left: 50%;
      animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }

    &::after {
      right: 50%;
      animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}
</style>
