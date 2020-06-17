<template>
    <div width="100%">
        <p class="disclaimer">Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus 
            présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à 
            des fins commerciales et ne sera pas publié</p>
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

.disclaimer {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8px;
    color: burlywood;
    z-index: 3000;
    width: 100%;
}
</style>

