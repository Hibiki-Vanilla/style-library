<template>
  <div class="yummy">
    <HeaderModule :scrollToAnchor="scrollToAnchor" />
    <BannerModule :scrollToAnchor="scrollToAnchor" />
    <AboutModule />
    <WhyUsModule />
    <StatsCounterModule />
    <MenuModule />
    <TestimonialsModule />
    <EventsModule />
    <ChefsModule />
    <BookATableModule />
    <GalleryModule />
    <ContactModule />
    <FooterModule />
  </div>
</template>

<script>
import HeaderModule from "./components/HeaderModule.vue";
import BannerModule from "./components/BannerModule.vue";
import AboutModule from "./components/AboutModule.vue";
import WhyUsModule from "./components/WhyUsModule.vue";
import StatsCounterModule from "./components/StatsCounterModule.vue";
import MenuModule from "./components/MenuModule.vue";
import TestimonialsModule from "./components/TestimonialsModule.vue";
import EventsModule from "./components/EventsModule.vue";
import ChefsModule from "./components/ChefsModule.vue";
import BookATableModule from "./components/BookATableModule.vue";
import GalleryModule from "./components/GalleryModule.vue";
import ContactModule from "./components/ContactModule.vue";
import FooterModule from "./components/FooterModule.vue";

import Aos from "aos";
import "aos/dist/aos.css";
export default {
  name: "YunmmyPage",
  components: {
    HeaderModule,
    BannerModule,
    AboutModule,
    WhyUsModule,
    StatsCounterModule,
    MenuModule,
    TestimonialsModule,
    EventsModule,
    ChefsModule,
    BookATableModule,
    GalleryModule,
    ContactModule,
    FooterModule,
  },
  methods: {
    scrollToAnchor(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  },
};
</script>

<style lang="less" scoped>
@import "./var.less";
@import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
</style>
