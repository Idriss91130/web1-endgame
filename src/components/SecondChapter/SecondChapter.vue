<template>
    <div id="chapter2" class="Chapter">
        <div id="chapter2_contain" class="chapter_contain">
            <div class="media2">
                <div v-on:click="photo" class="img_noactivate photo" v-bind:class="{iconPhoto_activate: activated_photo}"></div>
                <div v-on:click="video" class="img_noactivate video" v-bind:class="{iconVideo_activate: activated_video}"></div>
            </div>
            <div class="title_chapter">
                <Title chapter="II" title_chapter="DISCOURS D’HIMMLER DEVANT LE REICHSTAG " date="27 avril 1940"/>
                <ChapterText text="Himmler donne l’ordre d’aménager un camp de concentration dans les anciennes casernes 
                de l’artillerie polonaise à Oswiecim, rebaptisé Auschwitz. Construit par des Juifs de la ville requis par 
                les nazis, le camp d’Auschwitz reçoit un premier transport de prisonniers polonais, le 14 juin 1940."/>
            </div>
        </div>
        <div class="photo_noactivate2" v-bind:class="{photo_activate2: activated_photo}">
            <img v-on:click="photo" src="../../assets/croix.svg">
            <div class="power">
                <h1> Heinrich Himmler 1900-1945</h1>
                <p>Il est Reichsführer-SS, le maître absolu de la SS, Chef der Deutschen Polizei (chef de toutes les 
                    polices allemandes, dont la Gestapo) et, à partir de 1943, ministre de l'Intérieur du Reich et 
                    Chef der Heeresrüstung und Befehlshaber des Ersatzheers (responsable de l'équipement militaire 
                    de l'Armée de terre et commandant en chef de l'Armée de terre de réserve). Criminel de guerre, 
                    il est qualifié par certains auteurs allemands de « meurtrier du siècle »</p>
            </div>
        </div>
        <div v-bind:class="{video_activate2: activated_video}" class="video_noactivate2">
            <img v-on:click="video" src="../../assets/croix.svg">
            <iframe src="https://www.youtube.com/embed/dY9EVQoUJRI" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import ChapterText from '@/components/ChapterText.vue'

export default {
    name: 'SecondChapter',
    components: {
        Title,
        ChapterText,
    },
    data: function() {
        return {
            activated_photo: false,
            activated_video: false
        }
    },
    methods: {
        photo: function (){
            this.activated_photo = !this.activated_photo;
        },
        video: function (){
            this.activated_video = !this.activated_video;
        }
    }
}
</script>

<style lang="scss">

.Chapter {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        height: 100vh;
    }
}

.media2 {
    height: 110px;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    top: 5px;
    left: 10px;
    background: transparent;

    .photo {
        background-image: url("../../assets/photo.svg");
        background-size: cover;
    }

    .iconPhoto_activate {
        background-image: url("../../assets/photo_activate.svg");
        z-index: 14;
        position: fixed;
        top: 20px;
    }

    .video {
        background-image: url("../../assets/video.svg");
        background-size: cover;
    }

    .iconVideo_activate {
        background-image: url("../../assets/video_activate.svg");
        z-index: 14;
        position: fixed;
        top: 60px;
    }

    .img_noactivate {
        height: 55px;
        width: 55px;
        cursor: pointer;
    }
}

.photo_noactivate2 {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.photo_activate2 {
    z-index: 10;
    position: fixed;
    top: 2%;
    left: 1%;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    background-image: url("../../assets/discours_himmler.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 1000px) {
        height: 100%;
    }

    img {
        cursor: pointer;
        height: 46px;
        width: 55px;
        position: fixed;
        top: 2.7%;
        right: 1.1%;
    }
}

.video_noactivate2 {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.video_activate2 {
    z-index: 10;
    position: fixed;
    top: 2%;
    left: 1%;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    background: rgba(33, 33, 33, 0.96);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        height: 100%;
    }

    img {
        cursor: pointer;
        height: 46px;
        width: 55px;
        position: fixed;
        top: 2.7%;
        right: 1.1%;
    }

    iframe {
        width: 50%;
        height: 70%;

        @media (max-width: 1000px) {
            width: 100%;
            height: 50%;
        }
    }
}

</style>