<template>
  <div class="navBar" @click="closeOverlay">
    <router-link to="/"><img src="../assets/logowitz.png" alt="Sound" class="navBar__Witz" /></router-link>
    <div class="navBar__container">
      <div>
        
      </div>
                  <div
        class="navBar__VolumeLogo"
        @click="toggleMute"
        :class="isMute ? 'isMute' : null">
        
        <audio
      class="song"
      ref="audio"
      autoplay
      src="../assets/musikterrif.mp3">
        <img src="../assets/Audio.png" alt="Sound" class="navBar__Sound" />
      </audio>
        <img src="../assets/Audio.png" alt="Sound" class="navBar__Sound" />
      
      </div>
      <nav class="navBar__timeLine">
        <div @click="changePage(scroll * 10)" :class="page === 1 ? 'isSelected' : null">
          <a href="#chapter1">I - Discours d'Hitler devant le Reichstag  </a>
        </div>
        <div @click="changePage(scroll * 20)" :class="page === 2 ? 'isSelected' : null">
          <a class="gang" href="#chapter2">II - Discours d'Himmler  devant le Reichstag </a>
        </div>
        <div @click="changePage(scroll * 30)" :class="page === 3 ? 'isSelected' : null">
          <a href="#chapter3">III - Le début de l'enfer </a>
        </div>
        <div @click="changePage(scroll * 40)" :class="page === 4 ? 'isSelected' : null">
          <a href="#chapter4">IV - Les portes de l'enfer  </a>
        </div>
      </nav>
    </div>
  </div>
</template>


<script>


export default {
  methods: {
      toggleMute() {
      this.isMute = !this.isMute;
      this.$refs.audio.muted = !this.$refs.audio.muted;
      }
  },
    mounted () {
    this.$refs.audio.volume = 0.1;
    }
}
</script>
   

<style lang="scss" scoped>

.navBar {

  @media (max-width: 1000px) {
    display: none;
  }
}

.navBar__container {
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;;
  bottom: 0px;
  left: 0;
  height: 78px;
  width: 100%;
  background-color: rgba(40, 38, 38, 0.95);
  transition: height 0.3s;
  overflow: hidden;
  border-top: 0.5px solid ;
  box-shadow: 10px 0px 15px ;
  & a {
    clip-path: polygon(0% 0, 0% 0, 0% 0%, 0% 100%);
  }
  &:hover {
    transform: none;
    height: 150px;
     & nav div {
      width: 175px;
      height: 35px;
      border-radius: 15px;
      padding: 10px;
      transition: height 0.2s ease-in-out;

      &:hover {
        background-color: white;
        border: red 3px solid;
        
        a {
          color: red;
        }
      } 
      

      & a {
        font-size: 16px;
        clip-path: none;
        transform: none;
        opacity: 3; 
        left: 15px;
        top: 5px;
        color: white;
        user-select: none;
        font-family: "Metropolis";
        text-decoration: none;
        width: 15%;

        &:hover {
          color: red;
          text-decoration: underline;
        }
      }
      &.isSelected a {
        font-size: 1.02rem;
        opacity: 1;
        width: 200px;
        height: 100px;
        &:hover {
          text-decoration: none;
          cursor: default;
        }
      }
    }
  }
}

.navBar__Witz {
  z-index: 11;
  position: fixed;
  bottom: 22px;
  left: 12px;
  width: 40px;
  height: 40px; 
  transition: transform 0.1s;
  opacity: 0.8;
  user-select: none;
  &:hover {
    transform: scale(1.3);
    opacity: 1;
    & img{
      width: 100%;
      height: 100%;
    }
  }
}
.navBar__timeLine {
  z-index: 5;
  height: 1px;
  width: 100%;
  background-color: #FFFF;
  margin-left:55px ;
  margin-right: 55px;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div {
    background-color: red ;
    right: 200%;
    width: 15px;
    height: 15px;
    opacity: 1;
    border-radius: 50%;
    border: 1px solid ;

    p {
      font-family: "Metropolis";
      color: white;
      text-decoration: none;
    }

    &.isSelected {
      background-color: rgba(40, 38, 38, 0.95);
    }
  }
}
.navBar__VolumeLogo {
  position: fixed;
  z-index: 2;
  right: 17px;
  bottom: 26px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.8;
  user-select: none;

  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.3);
    opacity: 1;
  }
}
//   &.isMute::after {
//     content: "";
//     position: absolute;
//     display: block;
//     width: 30px;
//     height: 2px;
//     background-color: red;
//     border: 0.1px solid red;
//     transform: translateY(-12px) translatex(-7px) rotate(-45deg);
//   }
// }
    
  
  </style>