<template>
    <section class="rowColor d-flex align-items-center">
        <div class="container d-flex flex-column">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="colorBoxRow">
                    <div
                        class="colorItem"
                        :class="'colorItem' + index"
                        v-for="(item, index) of colorList"
                        :key="index"
                    >
                        <img :src="item" alt="caliburn-gk2" />
                        <div class="colorText">{{ colorName[index] }}</div>
                    </div>
                </div>
            </div>
            <div class="row textRow d-flex flex-column">
                <p>渐进入产品图片展示</p>
                <span>1. 宽高统一(px单位)的产品图片</span>
            </div>
        </div>
    </section>
</template>


<script>
import ScrollReveal from "scrollreveal";

export default {
    data() {
        return {
            colorList: [
                "https://files.myuwell.com/blob/product/caliburn-gk2/color/1.webp",
                "https://files.myuwell.com/blob/product/caliburn-gk2/color/2.webp",
                "https://files.myuwell.com/blob/product/caliburn-gk2/color/3.webp",
                "https://files.myuwell.com/blob/product/caliburn-gk2/color/4.webp",
            ],
            colorName: [
                "Ribbon Red",
                "Ocean Flame",
                "Matte Black",
                "Aurora Green",
            ],
        };
    },
    methods: {
        scrollRevealBuild() {
            const config = {
                reset: true,
                origin: "bottom",
                distance: "100px",
                over: 0.5,
                easing: "linear",
                duration: 1000,
                interval: 200,
            };
            ScrollReveal().reveal(".colorItem", config);
        },
    },
    mounted() {
        this.scrollRevealBuild();
    },
};
</script>


<style scoped>
.rowColor {
    height: 100vh;
    width: 100%;
    background-color: bisque;
}

.colorBoxRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.colorItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23%;
}

.colorItem img {
    display: block;
    width: 100%;
}
.colorText {
    width: 100%;
    font-family: "Montserrat Medium";
    font-size: 24px;
    text-align: center;
    color: black;
}

.textRow {
  padding: 100px 0;
  font-size: 36px;
  font-weight: 500;
}

.textRow span {
  font-size: 18px;
  font-weight: 400;
}

</style>