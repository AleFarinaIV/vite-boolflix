<script>
import { store } from "../store.js"
import { flagCode, ratingsStars } from "../data/usefulFunctions.js"

export default {

    props: {
        default_movie: Object,
    },
    methods: {
        flagCode() {
            return flagCode(this.default_movie.original_language);
        },
        ratingsStars() {
            return ratingsStars(this.default_movie.vote_average);
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
                <img :src="default_movie.poster_path !== null ? `${store.api_image}w342${default_movie.poster_path}` : 'https://placehold.co/600x400?text=Copertina%20non%20trovata'" alt="Poster">
            </div>
            <h6>Titolo: {{ default_movie.title }}</h6>
            <h6>Titolo Originale: {{ default_movie.original_title }}</h6>
            <span class="fw-bold me-1">Lingua: {{ default_movie.original_language }}</span>
            <span :class="`fi fi-${flagCode()}`"></span>
            <h6>Voto: <span v-html="ratingsStars()"></span> </h6>
        </div>
    </div>
</template>


<style scoped>

    #my_col {

        min-height: 450px;
        max-height: 450px;
        margin-bottom: 20px;

        .content {
            min-height: 450px;
            max-height: 450px;
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