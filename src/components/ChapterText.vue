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
        font-size: 12px;
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
</style>