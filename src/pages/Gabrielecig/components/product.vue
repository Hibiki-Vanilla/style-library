<template>
  <div class="product">
    <div class="fp-page__wrap">
      <div></div>
      <div class="home-product-container">
        <transition>
          <div class="grid-container">
            <div
              v-for="(item, index) in list"
              :key="index"
              class="itemDiv"
              :class="item.gridClassName"
            >
              <img class="itemImg" :src="item.image" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      list: [
        {
          gridClassName: "main",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B202-20220930141607.png",
        },
        {
          gridClassName: "dep-one",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B1201-20220930141423.png",
        },
        {
          gridClassName: "dep-two",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B202-20220930141607.png",
        },
        {
          gridClassName: "dep-three",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B1201-20220930141423.png",
        },
        {
          gridClassName: "dep-four",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B202-20220930141607.png",
        },
        {
          gridClassName: "dep-fire",
          image:
            "https://files.myuwell.com/blob/gabriel/product-color/B1201-20220930141423.png",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-slide-active {
  .home-about-container {
    transform: translateY(0);
  }
}

.swiper-slide-prev {
  .home-about-container {
    transform: translateY(-150px);
  }
}

.swiper-slide-next {
  .home-about-container {
    transform: translateY(200px);
  }
}
.home-about-container {
  transition: transform 800ms;
  transition-delay: 200ms;
}

.product {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.fp-page__wrap {
  display: flex;
  justify-content: space-between;
}

.home-product-container {
  position: relative;
  width: 42vw;
  height: 42vw;
}

.grid-container {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5vw 0.5vw;
  grid-auto-flow: row;
  grid-template-areas:
    "main main main main dep-one dep-one "
    "main main main main dep-one dep-one "
    "main main main main dep-two dep-two "
    "main main main main dep-two dep-two "
    "dep-three dep-three dep-four dep-four dep-fire dep-fire "
    "dep-three dep-three dep-four dep-four dep-fire dep-fire ";
}

.main {
  grid-area: main;
}

.dep-one {
  grid-area: dep-one;
}

.dep-two {
  grid-area: dep-two;
}

.dep-three {
  grid-area: dep-three;
}

.dep-four {
  grid-area: dep-four;
}

.dep-fire {
  grid-area: dep-fire;
}

.itemDiv {
  overflow: hidden;
  background-image: url(https://files.myuwell.com/blob/gabriel/images/small-b.webp);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .itemImg {
    display: block;
    height: 100%;
    width: 100%;
    transform: scale(1.1);
    transition: all 300ms;
  }
  .itemImg:hover {
    transform: scale(0.95);
  }
}
</style>
