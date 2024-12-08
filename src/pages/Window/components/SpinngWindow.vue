<template>
  <section id="window" v-if="comStatus">
    <div class="box">
      <div class="text-box">
        <div class="title-top">
          COVID SHIPPING <br class="title-br" />
          DELAY ANNOUNCEMENT
        </div>
        <div class="title-text">Dear UWELL Fans,</div>

        <div class="content-text">
          In light of the recent Covid pandemic, the SHENZHEN Government enacted
          a Home Quarantine Order as a preventive measure to battle against
          coronavirus.
          <br />
          On that account, we are out of the office from Mar. 14 to Mar.
          20,delivery will be delayed.
          <br />
          When we are back to the office we will send out the parcels as soon as
          possible.
          <br />
          Sorry for the inconvenience. Thank you for your understanding.
        </div>
      </div>
      <div role="button" @click="clickThis()" class="button-box">Got it</div>
    </div>
  </section>
</template>

<script>
module.exports = {
  props: [
    "comStatus"
  ],
  watch: {
    comStatus(newValue) {
      this.windowStatus = newValue;
    },
  },
  data() {
    return {
      windowStatus: false,
    };
  },
  methods: {
    clickThis() {
        this.$emit('closeMain', false);
    },
  },
};
</script>
<style scoped>
/* window */
#window {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.9);
}
#window .box {
  width: 1000px;
  min-height: 560px;
  padding: 80px;
  padding-right: 110px;
  border: 2px solid #ffe100;
  background-size: 100% 100%;
  border-radius: 14px;
  box-sizing: border-box;
  background-color: rgba(15, 15, 15, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
}
#window .text-box {
  width: 100%;
  color: #ffe100;
  padding-bottom: 90px;
}
#window .title-top {
  font-family: "Montserrat Bold";
  text-align: center;
  font-size: 36px;
  padding-bottom: 50px;
}
#window .title-br {
  display: none;
}
#window .title-text {
  width: 100%;
  font-family: "Montserrat Bold";
  font-size: 24px;
  padding-bottom: 5px;
}
#window .content-text {
  font-family: "Montserrat Regular";
  font-size: 18px;
  line-height: 1.5;
}
#window .button-box {
  cursor: pointer;
  color: #000;
  font-family: "Montserrat Regular";
  font-size: 18px;
  background-color: #ffe100;
  height: 48px;
  line-height: 48px;
  text-align: center;
  width: 240px;
}

@media (max-width: 1920px) {
  #window .box {
    width: 50vw;
    min-height: 28vw;
    padding: 4vw;
    padding-right: 5.5vw;
    border-radius: 0.7vw;
  }
  #window .text-box {
    padding-bottom: 4.5vw;
  }
  #window .title-top {
    font-size: 1.8vw;
    padding-bottom: 2.5vw;
  }
  #window .title-text {
    font-size: 1.2vw;
  }
  #window .content-text {
    font-size: 0.9vw;
  }
  #window .button-box {
    font-size: 0.9vw;
    height: 2.4vw;
    line-height: 2.4vw;
    width: 12vw;
  }
}

@media (max-width: 1000px) {
  #window .box {
    width: 6.4rem;
    min-height: 10.6rem;
    padding: 0.8rem;
    border-radius: 0.14rem;
  }
  #window .text-box {
    padding-bottom: 0.9rem;
  }
  #window .title-top {
    font-size: 0.36rem;
    padding-bottom: 0.5rem;
  }
  #window .title-br {
    display: block;
  }
  #window .title-text {
    font-size: 0.24rem;
    padding-bottom: 0.3rem;
  }
  #window .content-text {
    font-size: 0.24rem;
    line-height: 2;
  }
  #window .button-box {
    font-size: 0.18rem;
    height: 0.54rem;
    line-height: 0.54rem;
    width: 5.4rem;
  }
}
</style>
