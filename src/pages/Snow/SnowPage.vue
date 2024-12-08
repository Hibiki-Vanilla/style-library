<template>
    <section class="snow">
        <SnowRai />
        <SnowHtml />
        <BlinkTest/>
    </section>
</template>

<script>
import SnowRai from './components/SnowRai.vue';
import SnowHtml from './components/SnowHtml.vue';
import BlinkTest from './components/BlinkTest.vue';



export default {
  name: "SnowPage",
  components:{ SnowRai,SnowHtml,BlinkTest },
}
</script>
