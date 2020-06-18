<template>
    <div>
        <div id="video" class="container" >
            <div class="containerVideo">
                <video autoplay="true" preload="auto" class="video_intro" src="../assets/Auschwitz.mp4" controls>Auschwitz
                </video>
            </div>
            <div class="divButton"> 
                <router-link to="/accueil">
                    <button class="buttonSkip"><p>Passer ▼</p></button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">

body {
    background: black;
}

.containerVideo {
    @media (max-width: 1000px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
 
.container {
    position: relative;
    width: 100%;
    height: 110vh;

    @media (max-width: 1000px) {
        height: 100vh;
    }
}

.video_intro {
    z-index: 30;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        height: 80%;
    }
}

.divButton {
  position: fixed;
  top:0 ;
  bottom: -77%;
  left: 90%;
  right: 0;
  text-align: center;

    @media (max-width: 1000px) {
        left: 50%;
        transform: translateX(-50%);
    }
}

.divButton::before{
    content: ' ';
    display: block;
    
    height: 50%;
    
}

 .buttonSkip {
    font-family: "Ebrima";
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 23px;
    background-color:black ;
    padding: 15px;
    border-radius: 15px;
    max-height: 100px;
    opacity: 0.7;
    transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  cursor: pointer;


    & p {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    opacity: 0.9;
    }
    & img {
        height: 70px;
    }
 }

 </style>