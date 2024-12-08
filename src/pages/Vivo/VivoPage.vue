<template>
    <section class="vivoPage">
        <HeaderModal/>
        <BannerModal/>
        <BannnerContainer/>
    </section>
</template>


<script>
import HeaderModal from "./components/HeaderModal.vue";
import BannerModal from "./components/BannerModal.vue";
import BannnerContainer from "./components/BannnerContainer.vue";



export default {
  name: "VivoPage",
  components: { HeaderModal,BannerModal,BannnerContainer },

};
</script>

<style scoped>
/*--------------------------------------------------------------
# ColorPage
--------------------------------------------------------------*/
.vivoPage {
  width: 100%;
  min-height: 100vh;
}
</style>