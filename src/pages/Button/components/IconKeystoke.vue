<template>
  <section class="iconKeystoke">
    <!-- tga按钮 -->
    <button class="menuButton" @click="status = !status">
      <span class="menuIcon" :class="{ active: status }">
        <span class="menuIconLine menuIconLineTop"></span>
        <span class="menuIconLine menuIconLineMiddle"></span>
        <span class="menuIconLine menuIconLineBottom"></span>
      </span>
      <span class="menuIconClose" :class="{ active: status }">
        <span class="menuIconLineClose menuIconLineLeft"></span>
        <span class="menuIconLineClose menuIconLineRight"></span>
      </span>
    </button>
    <!-- transform  -->
    <button class="menuButton" @click="twoStatus = !twoStatus">
      <span class="menuIcon" :class="{ active: twoStatus }">
        <span class="menuIconLine menuIconLineTwoTop"></span>
        <!-- <span class="menuIconLine menuIconLineTwoMiddle"></span> -->
        <span class="menuIconLine menuIconLineTwoBottom"></span>
      </span>
      <span class="menuIconClose" :class="{ active: twoStatus }">
        <span class="menuIconLineCloseTwo menuIconLineTwoLeft"></span>
        <span class="menuIconLineCloseTwo menuIconLineTwoRight"></span>
      </span>
    </button>
    <!--  -->
    <!-- <button class="menuButton" @click="threeStatus = !threeStatus">
      <span class="menuIcon">
        <span class="menuIconLine menuIconLineThreeTop"></span>
        <span class="menuIconLine menuIconLineThreeMiddle"></span>
        <span class="menuIconLine menuIconLineThreeBottom"></span>
      </span>
    </button> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      twoStatus: false,
      threeStatus: false,
    };
  },
};
</script>

<style lang="less" scoped>
.iconKeystoke {
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  width: 1000px;
  margin: 0 auto;
}
// tga
.menuButton {
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 50px;
  width: 50px;
  border: 0;
  //   background-color: transparent;
  background-color: rgba(212, 63, 16, 1);
  padding: 0;
  margin: 0;
  line-height: inherit;
  outline: none;
  transition: color 0.4s, background-color 0.4s;

  .menuIcon {
    position: absolute;
    width: 30px;
    height: 18px;
    overflow: hidden;
    .menuIconLine {
      position: absolute;
      display: block;
      border-radius: 10px;
      height: 2px;
      width: 100%;
      background-color: rgba(255, 255, 255, 1);
    }
    .menuIconLineTop {
      top: 0;
      right: 0;
      transition: width 400ms 375ms;
    }

    .menuIconLineMiddle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: width 300ms 275ms;
    }
    .menuIconLineBottom {
      bottom: 0;
      right: 0;
      margin-right: 12px;
      transition: width 400ms 375ms;
    }
  }

  .menuIconClose {
    position: absolute;
    width: 30px;
    height: 30px;

    .menuIconLineClose {
      left: 50%;
      top: 50%;
      height: 2px;
      width: 0;
      display: block;
      border-radius: 10px;
      position: absolute;
    }
    .menuIconLineLeft {
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transition: width 300ms;
      background-color: rgba(255, 255, 255, 1);
    }
    .menuIconLineRight {
      background: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      transition: width 400ms 100ms;
    }
  }

  // act

  .active {
    .menuIconLineTop {
      transition: width 400ms;
      width: 0;
    }
    .menuIconLineMiddle {
      transition: width 300ms;
      width: 0;
    }
    .menuIconLineBottom {
      transition: width 400ms;
      width: 0;
    }

    .menuIconLineLeft {
      transition: width 300ms 150ms;
      width: 100%;
    }
    .menuIconLineRight {
      transition: width 400ms 250ms;
      width: 100%;
    }
  }
}

// translate
.menuIconLineTwoTop {
  top: 0;
  left: 0;
  transition: all 400ms 375ms;
}
.menuIconLineTwoMiddle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menuIconLineTwoBottom {
  bottom: 0;
  left: 0;
  transition: all 400ms 375ms;
}

.menuIconLineCloseTwo {
  left: 50%;
  top: 50%;
  height: 2px;
  width: 100%;
  display: block;
  border-radius: 10px;
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  transform: translateX(-50%) translateY(-50%);
  transition: transform 400ms 100ms;
}

.active {
  .menuIconLineTwoTop {
    opacity: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 400ms;
  }
  .menuIconLineTwoMiddle {
  }
  .menuIconLineTwoBottom {
    opacity: 0;
    bottom: calc(50% - 2px);
    transform: translate(0, -50%);
    transition: all 400ms;
  }

  .menuIconLineTwoLeft {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transition: all 400ms 250ms;
  }
  .menuIconLineTwoRight {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    transition: all 400ms 250ms;
  }
}



.menuIconLineThreeTop {
  top: 0;
  left: 0;
  transition: all 400ms 375ms;
}
.menuIconLineThreeMiddle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menuIconLineThreeBottom {
  bottom: 0;
  left: 0;
  transition: all 400ms 375ms;
}
</style>
