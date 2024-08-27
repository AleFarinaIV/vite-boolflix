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
            <div class="movie_container p-3">
                <h1 class="text-danger">Film</h1>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <MovieCard v-for="movie in store.movies_array" :key="movie.id" 
                    :movie_card="movie"/>
                </div>
            </div>
            <div class="tv_series_container p-3">
                <h1 class="text-danger">Serie TV</h1>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <TvSeriesCard v-for="series in store.tv_series_array" :key="series.id" 
                    :tv_series_card="series"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .movie_container {
        width: 100%;
        min-height: 500px;
        border: 1px solid black;
        margin-bottom: 50px;
    }

    .tv_series_container {
        width: 100%;
        min-height: 500px;
        border: 1px solid black;
    }

</style>
