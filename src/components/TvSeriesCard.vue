<script>
import { store } from "../store.js"
import { flagCode, ratingsStars } from "../data/usefulFunctions.js"

export default {
    props: {
        tv_series_card: Object
    },
    methods: {
        flagCode() {
            return flagCode(this.tv_series_card.original_language);
        },
        ratingsStars() {
            return ratingsStars(this.tv_series_card.vote_average);
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
                <img :src="tv_series_card.poster_path !== null ? `${store.api_image}w342${tv_series_card.poster_path}` : 'https://placehold.co/600x400?text=Copertina%20non%20trovata'" alt="Poster">
            </div>
            <h6>Titolo: {{ tv_series_card.name }}</h6>
            <h6>Titolo Originale: {{ tv_series_card.original_name }}</h6>
            <span class="fw-bold me-1">Lingua: {{ tv_series_card.original_language }}</span>
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