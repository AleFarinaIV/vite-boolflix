<script>

import { store } from "../store.js"
import MovieCard from "./MovieCard.vue"
import TvSeriesCard from "./TvSeriesCard.vue"

export default {
    components: {
        MovieCard,
        TvSeriesCard
    },
    data() {
        return {
            store
        }
    }

}

</script>

<template>

    <div class="container pb-3">
        <div class="col-12">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <MovieCard v-for="movie in store.movies_array" :key="movie.id" 
                :movie_card="movie"/>
                <TvSeriesCard v-for="series in store.tv_series_array" :key="series.id" 
                :tv_series_card="series"/>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
