<template>
    <section class="roulette">
        <NineBox />
        <CirBox/>
    </section>
</template>

<script>
import NineBox from "./components/NineBox.vue";
import CirBox from "./components/CirBox.vue";

export default {
    name: "RoulettePage",
    components: { NineBox,CirBox },
};
</script>
