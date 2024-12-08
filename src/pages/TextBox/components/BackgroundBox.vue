<template>
  <!-- bgBox -->
  <section class="bgBox" :style="{backgroundImage: 'url(' + boxValue.backgroundImage + ')'}">
    <!-- bgCon -->
    <div class="bgCon" :style="boxValue.bgConStyle">
        <div class="bgTitle" :style="boxValue.titleStyle">{{boxValue.title}}</div>
        <div class="bgContent" :style="boxValue.contentStyle">
{{boxValue.content}}
        </div>
    </div>
    <!-- End bgCon -->
  </section>
  <!-- End bgBox -->
</template>

<script>
export default {
  props: {
    boxValue: {
      type: Object,
        default: () => {}
    },
  },
  watch: {
    boxValue(newValue) {
      console.log(newValue);
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

@font-face{
    font-family: 'Montserrat Bold';
    src: url("@/assets/font/Montserrat-Bold.otf");
}

@font-face{
    font-family: 'Montserrat ExtraBold';
    src: url("@/assets/font/Montserrat-ExtraBold.otf");
}

@font-face{
    font-family: 'Montserrat Light';
    src: url("@/assets/font/Montserrat-Light.otf");
}

@font-face{
    font-family: 'Montserrat Medium';
    src: url("@/assets/font/Montserrat-Medium.otf");
}
@font-face{
    font-family: 'Montserrat Regular';
    src: url("@/assets/font/Montserrat-Regular.otf");
}
@font-face{
    font-family: 'Montserrat SemiBold';
    src: url("@/assets/font/Montserrat-SemiBold.otf");
}

.bgBox {
  position: relative;
  height: 54vw;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bgCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 75%;
  height: 100%;
  top: 0;
  left: 12.5%;
}
.bgTitle{
  width: 100%;
}
.bgContent{
  width: 100%;
}
</style>
