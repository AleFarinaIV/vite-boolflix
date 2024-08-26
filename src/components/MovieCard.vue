<script>
export default {

    props: {
        movie_card: Object
    },
    computed: {
        flagCode() {
            const langToFlag = {
                en: 'gb',
                hi: 'in',
                ja: 'jp',
                ko: 'kr',
                zh: 'cn',
            }

            return langToFlag[this.movie_card.original_language] || this.movie_card.original_language ;
        }
    }
}

</script>

<template>
    <div class="col">
        <div class="content">
            <h2>Titolo: {{ movie_card.title }}</h2>
            <h2>Titolo Originale: {{ movie_card.original_title }}</h2>
            <h4>Lingua: {{ movie_card.original_language }}</h4>
            <span :class="`fi fi-${flagCode}`"></span>
            <h6>Voto: {{ movie_card.vote_average }} </h6>
        </div>
    </div>
</template>

<style scoped>

</style>