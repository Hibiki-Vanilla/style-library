<template>
  <div>
    <section class="alphardex">
      <div class="box" v-show="status">
        <h1 class="title slide-bar">I'm alphardex.</h1>
        <p class="subtitle slide-bar">A CSS Wizard</p>
      </div>
    </section>
    <div class="buttonRow">
      <button @click="clickChange">触发效果</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
    };
  },
  methods: {
    clickChange() {
      if (this.status) {
        this.status = false;
        setTimeout(() => {
          this.status = true;
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.alphardex {
  display: flex;
  justify-content: center;
  background: #222;
  width: 100%;
  height: 100px;
  padding: 20px 0;
}
.slide-bar {
  position: relative;
  color: transparent;
  animation: fill-text-white 2s 1.6s forwards;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #35b9f1;
    transform: scaleX(0);
    transform-origin: left;
    animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
  }
}

@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: white;
  }
}

.box {
  .title,
  .subtitle {
    width: 250px;
    height: 30px;
  }

  .title {
    margin: 0;
    font-size: 32px;
    line-height: 30px;

    &::before {
      background: #ff4081;
    }
  }

  .subtitle {
    margin: 10px 0 0 0;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    text-transform: uppercase;
    animation-delay: 3.2s;

    &::before {
      background: #03a9f4;
      animation-delay: 2s;
    }
  }
}
</style>
