<template>
    <div class="text_chapter_FC">
        <p><img src="../../assets/up-chevron1.svg"/>{{ text }} <img src="../../assets/up-chevron2.svg"/></p>
    </div>
</template>

<script>
export default {
    name: 'ChapterText',
    props: {
        text: String,
        link: String
    }
}
</script>

<style lang="scss">
.text_chapter_FC {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    width: 100%;
    border-radius: 10px;

    p {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 33px;
    color: #FFFFFF;
    text-align: left;
    width: 90%;

        img {
            @media (max-width: 750px) {
                height: 15px;
                width: 15px;
            }
        }

        @media (max-width: 750px) {
            font-size: 11px;
            width: 95%;
        }
    }

    @media (max-width: 750px) {
        height: 65vh;
    }

    img {
        margin: 0 10px;
        width: 15px;
    }
}

$bg-and-border: #ffffff;

@keyframes scroll {
  from { transform: translateY(0); }
  50% { transform: translateY(10px) }
  to { transform: translateY(0) }  
}

.caption { 
    margin-top: 10px;
    color: #ffffff;
    font-family: 'MetropolisLight';
}

.mouse {
  display: inline-block;
  height: 44px;
  width: 28px;
  border-radius: 12px;
  border: 3px solid $bg-and-border;
  text-align: center;
  &:after {
    display: inline-block;
    height: 5px;
    width: 5px;
    background-color: $bg-and-border;
    border-radius: 50%;
    content: "";
    animation: scroll 1.3s ease-out infinite forwards;
  }
}

</style>