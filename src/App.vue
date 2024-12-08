<template>
  <div id="app">
    <Sider :siderStatus="siderStatus" />
    <div class="content" :class="{contentOn:siderStatus}">
      <router-view :key="new Date().getTime()" />
    </div>
  </div>
</template>

<script>
import Sider from "./components/Sider.vue";

export default {
  name: "App",
  components: { Sider },
  data(){
    return{
      siderStatus:true,
    }
  },
};
</script>

<style scoped>
#app {
  display: flex;
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* background: linear-gradient(
    -45deg,
    hsla(170deg, 100%, 70%, 0.7),
    hsla(219deg, 90%, 80%, 0.5) 100%,
    #002268
  ); */
}

.content {
  width: calc(100% - 50px);
}
.content.contentOn{
  width: calc(100% - 200px);
}
</style>
