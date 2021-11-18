<template>
    <div>
        <HeadBar current="message"></HeadBar>
        <BgAnimation></BgAnimation>
    </div>
</template>

<script>
import HeadBar from "@/components/HeadBar.vue";
import BgAnimation from '@/components/BgAnimation.vue';
export default {
    components:{
        HeadBar,BgAnimation
    },
    navHide:true
}
</script>

<style scoped>

</style>