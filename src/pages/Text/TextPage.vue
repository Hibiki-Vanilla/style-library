<template>
    <section class="text">
        <ColorText />
        <AosText />
    </section>
</template>

<script>
import AosText from './components/AosText.vue';
import ColorText from './components/ColorText.vue';


export default {
  name: "TextPage",
  components:{ AosText,ColorText },
}
</script>
