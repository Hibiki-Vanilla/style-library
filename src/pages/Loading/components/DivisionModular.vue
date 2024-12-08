<template>
  <section>
    <div class="division">
      <p class="landIn">Welcome to the loading system</p>
    </div>
    <div class="buttonRow">
      <button @click="clickChange">触发效果</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    clickChange() {
      this.spanTextBuild();
    },
    spanTextBuild() {
      let landInTexts = document.querySelectorAll(".landIn");
      landInTexts.forEach((landInText) => {
        let letters = landInText.textContent.split("");
        landInText.textContent = "";
        letters.forEach((letter, index) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${index * 0.05}s`;
          landInText.append(span);
        });
      });
    },
  },

  mounted() {
    this.spanTextBuild();
  },
};
</script>

<style lang="less">
.division {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0 9em;
    font-size: 2em;
    font-weight: 600;
  }

  .landIn {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    white-space: pre;
  }

  span {
    animation: landIn 0.8s ease-out both;
  }

  @keyframes landIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.buttonRow {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
