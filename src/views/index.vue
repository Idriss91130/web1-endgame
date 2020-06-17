<template>
    <div width="100%">
        <FirstChapter/>
        <SecondChapter/>
        <ThirdChapter/>
        <FourthChapter/>
        <navbar/>
    </div> 
</template>

<script>
import FirstChapter from '@/components/FirstChapter/FirstChapter.vue'
import SecondChapter from '@/components/SecondChapter/SecondChapter.vue'
import ThirdChapter from '@/components/ThirdChapter/ThirdChapter.vue'
import FourthChapter from '@/components/FourthChapter/FourthChapter.vue'
import navbar from '@/components/navbar.vue'

export default {
    name: 'index',
    components: {
        FirstChapter,
        SecondChapter,
        ThirdChapter,
        FourthChapter,
        navbar
    },
}
</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
    overflow: hidden;

    @media (max-width: 1000px) {
        overflow: visible;
    }
}
</style>

