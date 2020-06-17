<template>
    <div style="width: 100%; position: relative">
        <div id="chapter1" class="title_chapter_FC">
            <div id="chapter1_contain" class="chapter_contain">
                <div class="media">
                    <div v-on:click="photo" class="img_noactivate photo" v-bind:class="{iconPhoto_activate: activated_photo}"></div>
                    <div v-on:click="video" class="img_noactivate video" v-bind:class="{iconVideo_activate: activated_video}"></div>
                </div>
                <Title chapter="I" title_chapter="DISCOURS D’HITLER DEVANT LE REICHSTAG" date="30 janvier 1939"/>
                <ChapterText text="Nous avons des centaines de milliers d'enfants de paysans et des classes laborieuses 
                très intelligents. Nous devons les éduquer - en fait nous avons déjà commencé - et nous souhaitons qu'un
                jour, eux et non les représentants d'une race étrangère, puisse occuper les positions dominantes de l'Etat
                en même temps que nos classes éduquées. Et surtout, la culture allemande, comme en témoigne son nom seul, 
                est allemande et non juive, et c'est pourquoi sa direction et sa gestion seront confiées à des membres de 
                notre nation." />
            </div>
            <div class="photo_noactivate" v-bind:class="{photo_activate: activated_photo}">
                <img v-on:click="photo" src="../../assets/croix.svg">
                <div class="power">
                    <h1>Prise de Pouvoir 1933-1934</h1>
                    <p>D’abord freiné par la prospérité des années 1920, le parti nazi est ensuite servi par les conséquences de
                        la crise de 1929. Hitler cultive l’ambiguïté pour puiser des voix dans tous les groupes sociaux : 
                        chômeurs, ouvriers, petits bourgeois, enseignants, grande bourgeoisie d’affaires. 
                        Le 30 janvier 1933, il devient chancelier du Reich et, le 2 août 1934, président. 
                        Entre ces deux dates, il a réduit à néant toute forme d’opposition (camps de concentration), 
                        pris les premières mesures antisémites et doublé les institutions de la république d'organes et 
                        d’agents nazis.</p>
                </div>
            </div>
        </div>
        <div v-bind:class="{video_activate: activated_video}" class="video_noactivate">
            <img v-on:click="video" src="../../assets/croix.svg">
            <iframe src="https://www.youtube.com/embed/i9aHGvpe2V0" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<router-link to="/firstchapter2"><img src="@/assets/Arrow.png"></router-link>

<script>
import Title from '@/components/Title.vue'
import ChapterText from '@/components/FirstChapter/ChapterText.vue'


export default {
    name: 'FirstChapter',
    components: {
        Title,
        ChapterText,
    },
    data: function() {
        return {
            activated_photo: false,
            activated_video: false,
            info: null
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

* {
    margin: 0;
}

.title_chapter_FC {
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        height: 100%;
    }
}

.chapter_contain {
    position: relative;
    background-color: black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 98%;
    height: 84.9%;
    border-radius: 10px;
    margin-top: 1%;
    background-size: cover;
}

.title_chapter {
    width: 100%;
    height: 100vh;
    margin-top: 1%;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        height: 100%;
    }
}

.title_chapter {
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        height: 100%;
    }
}

#chapter1 {
    background: #141414;
}

#chapter2 {
    background: #141414;
}

#chapter3 {
    background: #141414;
}

#chapter4 {
    background: #141414;
}

#chapter1_contain {
    background-image: url("../../assets/hitler2.png");
}

#chapter2_contain {
    background-image: url("../../assets/himmler4.png");
}

#chapter3_contain {
    background-image: url("../../assets/enfer.png");
}

#chapter4_contain {
    background-image: url("../../assets/portesenfer.png");
}

.photo_noactivate {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.photo_activate {
    z-index: 10;
    position: fixed;
    top: 2%;
    left: 1%;
    width: 98%;
    height: 85%;
    border-radius: 10px;
    background-image: url("../../assets/hitler_photo.png");
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

.video_noactivate {
    position: fixed;
    z-index: -100;
    height: 5%;
}

.video_activate {
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
        right: 1.7%;
    }

    iframe {
        width: 50%;
        height: 70%;

        @media (max-width: 1000px) {
            width: 100%;
        }
    }
}

.power {
    background: rgba(33, 33, 33, 0.90);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 80%;
    width: 36%;
    padding: 0 20px;
    margin-right: 5%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 14;

    @media (max-width: 750px) {
        width: 90%;
        height: 65%;
    }

    @media (max-width: 1000px) {
        height: 50vh;
        width: 70%;
    }

    h1 {
        font-family: "MetropolisBold";
        font-style: normal;
        font-size: 33px;
        line-height: 49px;
        color: #FF0000;

        @media (max-width: 750px) {
            font-size: 30px;
        }
    }

    p {
        font-family: "Metropolis";
        font-style: normal;
        font-size: 21px;
        line-height: 29px;
        color: #FFFFFF;

        @media (max-width: 750px) {
            font-size: 12px;
            line-height: 20px;
        }
    }
}

.media {
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
        top: 2.7%;
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

</style>