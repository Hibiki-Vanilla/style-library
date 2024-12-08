<template>
  <section class="hoverBlock">
    <div class="hoverBlockCon">
      <!-- top -->
      <div class="topRow itemStyle">
        <img class="topRowImg" src="@/assets/hover/hover-top.webp" alt="" />
      </div>
      <!-- mid -->
      <div class="midRow">
        <div class="midRowLeft itemStyle">
          <div class="midRowLeftText">welcome</div>
          <img class="topRowImg" src="@/assets/hover/hover-top.webp" alt="" />
        </div>
        <div class="midRowRight itemStyle">
          <img
            class="midRowRightImg"
            src="@/assets/hover/hover-top.webp"
            alt=""
          />
        </div>
      </div>
      <!-- bottom -->
      <!-- <div class="bottomRow">
        <div class="bottomRowLeft">
          <img class="bottomRowImg" src="@/assets/hover/hover-top.webp" />
        </div>
        <div class="bottomRowRight">
          <div class="bottomRowRightTop">
            <img class="bottomRowImg" src="@/assets/hover/hover-top.webp" />
          </div>

          <div class="bottomRowRightBottom">
            <img class="bottomRowImg" src="@/assets/hover/hover-top.webp" />
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "HoverBlock",
};
</script>

<style lang="less" scoped>
.hoverBlock {
  display: flex;
  justify-content: center;
}
.hoverBlockCon {
  width: 800px;

  .itemStyle {
    overflow: hidden;
  }
  .topRow {
    width: 100%;
    height: 480px;
    margin-bottom: 20px;
  }
  .topRowImg {
    width: 100%;
    height: 100%;
    display: block;
    max-width: 100%;
    transform: scale(1.1);
    transition: all 0.3s;
  }
  .topRow:hover {
    .topRowImg {
      transform: scale(1);
    }
  }

  .midRow {
    display: flex;
    justify-content: space-between;
    height: 480px;
    margin-bottom: 20px;
    .midRowLeft {
      position: relative;
      width: calc(50% - 10px);
    }
    .midRowLeftText {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-size: 24px;
      color: #fff;
    }

    .midRowRight {
      position: relative;
      width: calc(50% - 10px);
      background-image: url("@/assets/hover/hover-top.webp");
      background-size: 100% 100%;

      display: flex;
      .midRowRightImg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: all 0.3s;
      }
    }

    .midRowLeft:hover .midRowLeftText {
      height: 100%;
    }
    .midRowRight:hover {
      flex-direction: row-reverse;
      .midRowRightImg {
        left: -50%;
      }
    }
  }

  .bottomRow {
    width: 100%;
    height: 480px;
    display: flex;
    justify-content: space-between;
    .bottomRowLeft {
      width: calc(33.33% - 10px);
      height: 100%;
      overflow: hidden;
      .bottomRowImg {
        height: 100%;
        width: 100%;
      }
    }
    .bottomRowLeft {
    }
    .bottomRowRight {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc(66.66% - 10px);
      height: 100%;

      .bottomRowRightTop {
                overflow: hidden;
        width: 100%;
        height: calc(50% - 10px);
      }

      .bottomRowRightBottom {
                overflow: hidden;
        width: 100%;
        height: calc(50% - 10px);
      }

      .bottomRowImg {

        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
