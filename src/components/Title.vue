<template>
    <div class="title">
        <h1>{{ chapter }}</h1>
        <h2>{{ title_chapter }}</h2>
        <h3>{{ date }}</h3>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: {
        chapter: String,
        title_chapter: String,
        date: String
    },
    data: function (){
        return {
            info: null
        }
    },
    mounted: {
        // axios: 
        //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //     .then(response => (this.info = response))
    }
}
</script>

<style lang="scss">
    .title {
        width: 45%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        @media (max-width: 750px) {
            height: 35vh;
            width: 80%;
        }

        @media (max-width: 1000px) {
            height: 35vh;
            width: 60%;
        }
    }

    h1 {
        font-family: 'EbrimaBold';
        font-style: normal;
        font-weight: bold;
        font-size: 130px;
        line-height: 140px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;

        @media (max-width: 750px) {
            font-size: 80px;
            line-height: 110px;
        }
    }

    h2 {
        font-family: 'MetropolisBold';
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 61px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;

        @media (max-width: 750px) {
            font-size: 18px;   
            line-height: 24px;
        }
    }

    h3 {
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;

        @media (max-width: 750px) {
            font-size: 16px;
            line-height: 20px;
        }
    }

    .line {
        width: 160px;
        height: 6px;
        background: white;
        margin-top: 5px;
    }
</style>