<script>
import { store } from "../store.js"
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
    },
    data() {
        return{
            store
        }
    }
}

</script>

<template>
    <div id="my_col" class="col">
        <div class="content">
            <div class="size mb-2">
                <img :src="movie_card.poster_path !== null ? `${store.api_image}w342${movie_card.poster_path}` : 'https://placehold.co/600x400?text=Copertina%20non%20trovata'" alt="Poster">
            </div>
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

        min-height: 430px;
        max-height: 430px;
        margin-bottom: 20px;

        .content {
            min-height: 430px;
            max-height: 430px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #f9f9f9;

            .size {
                width: 100%;
                height: 200px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

</style>