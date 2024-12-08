<template>
  <section class="textBox">
    <!-- inputRow  -->
    <div class="container">
      <div class="row">
        <span>背景图：</span>
        <input
          class="inputStyle"
          type="text"
          v-model="boxValue.backgroundImage"
        />
        <span style="width: 100%">文本位置</span>
        <div class="row">
          <button
            class="buttonSytle"
            @click="boxValue.bgConStyle.textAlign = 'center'"
          >
            居中
          </button>
          <button
            class="buttonSytle"
            @click="boxValue.bgConStyle.textAlign = 'left'"
          >
            居左
          </button>
          <button
            class="buttonSytle"
            @click="boxValue.bgConStyle.textAlign = 'right'"
          >
            居右
          </button>
        </div>
        <span style="width: 100%">标题：</span>
        <input class="inputStyle" type="text" v-model="boxValue.title" />
        <span>标题字体大小(px)：</span>
        <input
          class="inputStyle"
          type="text"
          v-model="boxValue.titleStyle.fontSize"
        />
        <span>标题字体颜色：</span>
        <input
          class="inputStyle"
          type="text"
          v-model="boxValue.titleStyle.color"
        />
        <span style="width: 100%">标题字体：</span>
        <div class="row" style="width: 100%">
          <button
            class="buttonSytle"
            @click="fontFamilyCilck('Montserrat Bold')"
          >
            Montserrat Bold
          </button>
          <button
            class="buttonSytle"
            @click="fontFamilyCilck(' Montserrat ExtraBold')"
          >
            Montserrat ExtraBold
          </button>
          <button
            class="buttonSytle"
            @click="fontFamilyCilck(' Montserrat Light')"
          >
            Montserrat Light
          </button>
          <button
            class="buttonSytle"
            @click="fontFamilyCilck(' Montserrat Medium')"
          >
            Montserrat Medium
          </button>
          <button
            class="buttonSytle"
            @click="fontFamilyCilck(' Montserrat Regular')"
          >
            Montserrat Regular
          </button>
          <button
            class="buttonSytle"
            @click="fontFamilyCilck(' Montserrat SemiBold')"
          >
            Montserrat SemiBold
          </button>
        </div>

        <span>内容文本：</span>
        <input class="inputStyle" type="text" v-model="boxValue.content" />
        <span>内容文本字体大小(px)：</span>
        <input
          class="inputStyle"
          type="text"
          v-model="boxValue.contentStyle.fontSize"
        />
        <span>内容文本颜色：</span>
        <input
          class="inputStyle"
          type="text"
          v-model="boxValue.contentStyle.color"
        />
        <span style="width: 100%">内容文本字体：</span>
        <div class="row" style="width: 100%">
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck('Montserrat Bold')"
          >
            Montserrat Bold
          </button>
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck(' Montserrat ExtraBold')"
          >
            Montserrat ExtraBold
          </button>
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck(' Montserrat Light')"
          >
            Montserrat Light
          </button>
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck(' Montserrat Medium')"
          >
            Montserrat Medium
          </button>
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck(' Montserrat Regular')"
          >
            Montserrat Regular
          </button>
          <button
            class="buttonSytle"
            @click="contentFontFamilyCilck(' Montserrat SemiBold')"
          >
            Montserrat SemiBold
          </button>
        </div>
      </div>
    </div>
    <!--End inputRow  -->
    <!-- Model -->
    <BackgroundBox :boxValue="boxValue" />
    <!-- End Model -->
  </section>
</template>

<script>
import BackgroundBox from "./components/BackgroundBox.vue";

export default {
  name: "TextBoxPage",
  components: { BackgroundBox },
  data() {
    return {
      boxValue: {
        backgroundImage:
          "https://files.myuwell.com/blob/product/kalmia/pc/vibrationBg.webp",
        bgConStyle: {
          textAlign: "center",
        },
        title: "Title Text",
        titleStyle: {
          fontSize: "48px",
          color: "#000",
          fontFamily: "Montserrat Bold",
          width: "100%",
        },
        content: "Content Text",
        contentStyle: {
          fontSize: "24px",
          color: "#000",
          fontFamily: "Montserrat light",
          width: "100%",
        },
      },
    };
  },
  methods: {
    fontFamilyCilck(family) {
      this.boxValue.titleStyle.fontFamily = family;
    },
    contentFontFamilyCilck(family) {
      this.boxValue.contentStyle.fontFamily = family;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.textBox {
  padding: 30px 0;
}
.inputStyle {
  width: 100%;
}
.buttonSytle {
  margin: 0 10px;
}
</style>
