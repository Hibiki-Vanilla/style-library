<template>
    <section class="SequencePage">
        <SequenceAnime/>
        <Image360/>
    </section>
</template>

<script>
import SequenceAnime from "./components/SequenceAnime.vue";
import Image360 from "./components/Image360.vue";

export default {
    name: "SequencePage",
    components: { SequenceAnime,Image360 },
};
</script>

