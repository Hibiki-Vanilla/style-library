<template>
  <div class="appleTextPage">
    <ClipPage />
    <LinearPage/>
    <GsapPage />
  </div>
</template>

<script>
import ClipPage from "./components/ClipPage.vue";
import LinearPage from "./components/LinearPage.vue";
import GsapPage from "./components/GsapPage.vue";

export default {
  name: "AppleTextPage",
  components: { ClipPage, 
  LinearPage,
   GsapPage },
};
</script>
