<template>
    <div id="chapter3" class="Chapter">
        <div id="chapter3_contain" class="chapter_contain">
            <div class="media3">
                <div v-on:click="photo" class="img_noactivate photo" v-bind:class="{iconPhoto_activate: activated_photo}"></div>
                <div v-on:click="video" class="img_noactivate video" v-bind:class="{iconVideo_activate: activated_video}"></div>
            </div>
            <div class="title_chapter">
                <Title chapter="III" title_chapter="LE DEBUT DE L’ENFER" date="18 juillet 1942"/>
                <ChapterText text=" Les Allemands déportèrent des Juifs âgés ou éminents d'Allemagne, d'Autriche, du Protectorat 
                de Bohème Moravie et d'Europe orientale au ghetto de Theresienstadt, qui servit également de camp de transit pour 
                les déportations plus à l'est, le plus souvent à Auschwitz-Birkenau."/>
            </div>
        </div>
        <div class="photo_noactivate3" v-bind:class="{photo_activate3: activated_photo}">
            <img v-on:click="photo" src="../../assets/croix.svg">
            <div class="power">
                <p>A la descente du train, les déportés doivent laisser sur place tous leurs biens personnels. Les vêtements, 
                    chaussures, prothèses, lunettes et autres objets sont récupérés.</p>
            </div>
        </div>
        <div v-bind:class="{video_activate3: activated_video}" class="video_noactivate3">
            <img v-on:click="video" src="../../assets/croix.svg">
            <iframe src="https://www.youtube.com/embed/mNaGaknaalk?start=134" frameborder="0" 
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

.media3 {
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

.photo_noactivate3 {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.photo_activate3 {
    z-index: 10;
    position: fixed;
    top: 2%;
    left: 1%;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    background-image: url("../../assets/detenusblock2.jpg");
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

.video_noactivate3 {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.video_activate3 {
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