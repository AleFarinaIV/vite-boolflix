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
        },
        isNameSimilar() {
            return (
                this.tv_series_card.name.toLowerCase() === this.tv_series_card.original_name.toLowerCase()
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
                <img :src="tv_series_card.poster_path !== null ? `${store.api_image}w342${tv_series_card.poster_path}` : 'https://placehold.co/600x400?text=Copertina%20non%20trovata'" alt="Poster">
            </div>
            <div v-if="showInfo" class="info">
                <div class="info-item">
                    <span class="label">Titolo:</span>
                    <span>{{ tv_series_card.name }}</span>
                </div>
                <div v-if="!isNameSimilar()" class="info-item">
                    <span class="label">Titolo Originale:</span>
                    <span>{{ tv_series_card.original_name }}</span>
                </div>
                <div class="info-item">
                    <span class="label">Lingua:</span>
                    <span>{{ tv_series_card.original_language }}</span>
                    <span :class="`fi fi-${flagCode()}`"></span>
                </div>
                <div class="info-item">
                    <span class="label">Voto:</span>
                    <span v-html="ratingsStars()"></span>
                </div>
                <div class="info-item">
                    <span class="label">Overview:</span>
                    <span>{{ tv_series_card.overview }}</span>
                </div>
            </div>
        </div>
    </div>
        
</template>

<style scoped>

    #my_col {
        
        min-height: 250px;
        max-height: 350px;
        max-width: 300px;
        margin-bottom: 20px;
        
        .content {
            min-height: 250px;
            max-height: 350px;
            max-width: 300px;
        
            border-radius: 5px;
            margin-bottom: 10px;
            position: relative;
            overflow: hidden;
        
            .size {
                width: 100%;
                height: 100%;
            
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        
        
            .info {
                font-size: 12px;
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
                justify-content: flex-start;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                
                .info-item {
                    display: flex;
                    gap: 5px;
                    width: 100%;
                    flex-wrap: wrap;
                }
                
                .label {
                    font-weight: bold;
                }
            }
        }
        
        .content:hover .info{
            opacity: 1;
        }
    }

</style>