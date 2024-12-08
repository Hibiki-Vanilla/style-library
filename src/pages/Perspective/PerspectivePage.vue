<template>
  <div class="perspecive">
    <ImagePage />
    <SassPage />
  </div>
</template>

<script>
import ImagePage from "./components/ImagePage.vue";
import SassPage from "./components/SassPage.vue";

export default {
  name: "PerspectivePage",
  components: { ImagePage, SassPage },
};
</script>
