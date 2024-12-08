<template>
    <section class="keystoke">
        <HoverButton/>
        <BasicKeystoke />
        <IconKeystoke/>
        <EmojiKeystoke/>
        <CyberKeysotke/>
        <SwitchButton/>
        <NightDayButton/>
        <LightButton />
        <SvgButton />
    </section>
</template>

<script>
import HoverButton from './components/HoverButton.vue';
import BasicKeystoke from './components/BasicKeystoke.vue';
import IconKeystoke from './components/IconKeystoke.vue';
import EmojiKeystoke from './components/EmojiKeystoke.vue';
import CyberKeysotke from './components/CyberKeysotke.vue';
import SwitchButton from './components/SwitchButton';
import NightDayButton from './components/NightDayButton';
import LightButton from './components/LightButton';
import SvgButton from './components/SvgButton';


export default {
     name: "KeystokePage",
    components:{HoverButton,BasicKeystoke,IconKeystoke,EmojiKeystoke,CyberKeysotke,SwitchButton,NightDayButton ,LightButton,SvgButton}
}
</script>