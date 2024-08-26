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
    <div id="my_col" class="col">
        <div class="content">
            <h1 class="text-danger">Film</h1>
            <h6>Titolo: {{ movie_card.title }}</h6>
            <h6>Titolo Originale: {{ movie_card.original_title }}</h6>
            <span class="fw-bold me-1">Lingua: {{ movie_card.original_language }}</span>
            <span :class="`fi fi-${flagCode}`"></span>
            <h6>Voto: {{ movie_card.vote_average }} </h6>
        </div>
    </div>
</template>

<style scoped>

    #my_col {

        min-height: 300px;
        max-height: 300px;
        margin-bottom: 20px;

        .content {
            min-height: 300px;
        max-height: 300px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #f9f9f9;
        }
    }

</style>