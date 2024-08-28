<script>
import { store } from "../store.js"
import { flagCode, ratingsStars } from "../data/usefulFunctions.js"

export default {

    props: {
        default_tvseries: Object,
    },
    methods: {
        flagCode() {
            return flagCode(this.default_tvseries.original_language);
        },
        ratingsStars() {
            return ratingsStars(this.default_tvseries.vote_average);
        },
        isNameSimilar() {
            return (
                this.default_tvseries.name.toLowerCase() === this.default_tvseries.original_name.toLowerCase()
            )
        },
        toggleInfo(show) {
            this.showInfo = show;
        },
    },
    data() {
        return{
            store,
            showInfo: false,
        }
    }
}

</script>

<template>
    <div id="my_col" class="col" @mouseover="toggleInfo(true)" @mouseleave="toggleInfo(false)">
        <div class="content">
            <div class="size mb-2">
                <img :src="default_tvseries.poster_path !== null ? `${store.api_image}w342${default_tvseries.poster_path}` : 'https://placehold.co/600x400?text=Copertina%20non%20trovata'" alt="Poster">
            </div>
            <div v-if="showInfo" class="info">
                <h6>Titolo: {{ default_tvseries.name }}</h6>
                <h6 v-if="!isNameSimilar()">Titolo Originale: {{ default_tvseries.original_name }}</h6>
                <span class="fw-bold me-1">Lingua: {{ default_tvseries.original_language }}</span>
                <span :class="`fi fi-${flagCode()}`"></span>
                <h6>Voto: <span v-html="ratingsStars()"></span> </h6>
            </div>
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
            position: relative;
            overflow: hidden;

            .size {
                width: 100%;
                height: 200px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .info {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
        }

        .content:hover .info{
            opacity: 1;
        }
    }

</style>