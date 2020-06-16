<template>
    <div class="text_chapter">
        <p>{{ text }}</p>
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
.text_chapter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30vh;
    width: 100%;
    background: rgba(33, 33, 33, 0.76);

    @media (max-width: 1000px) {
        height: 40vh;
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

p {
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 33px;
    color: #FFFFFF;
    text-align: left;
    width: 81%;

    @media (max-width: 1000px) {
        font-size: 12px;
        width: 95%;
    }
}
</style>