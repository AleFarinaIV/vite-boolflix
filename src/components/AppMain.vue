<script>

import { store } from "../store.js"
import MovieCard from "./MovieCard.vue"
import TvSeriesCard from "./TvSeriesCard.vue"
import PopularMovieCard from "./PopularMovieCard.vue"
import PopularTvSeriesCard from "./PopularTvSeriesCard.vue"
import axios from "axios"

export default {
    components: {
        MovieCard,
        TvSeriesCard,
        PopularMovieCard,
        PopularTvSeriesCard
    },
    methods: {
        defaultMovie() {
            axios.get(`${store.api_url}${store.popular_movies_endpoint}${store.api_key}`)
            .then((result) => {
                let default_movies = result.data.results
                store.default_movies_array = default_movies
                console.log(default_movies)
            })
        },
        defaultTvSeries() {
            axios.get(`${store.api_url}${store.popular_tvseries_endpoint}${store.api_key}`)
            .then((result) => {
                let default_tvseries = result.data.results
                store.default_tvseries_array = default_tvseries
                console.log(default_tvseries)
            })
        },
    },
    mounted() {
        this.defaultMovie(),
        this.defaultTvSeries()
    },
    data() {
        return {
            store
        }
    }

}

</script>

<template>

    <div class="container py-5">
        <div class="col-12">
            <div class="movie_container p-3">
                <h2 class="text-white mb-4">Film più popolari</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <PopularMovieCard v-for="default_movie in store.default_movies_array" :key="default_movie.id"
                    :default_movie="default_movie"/>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <MovieCard v-for="movie in store.movies_array" :key="movie.id" 
                    :movie_card="movie"/>
                </div>
            </div>
            <div class="tv_series_container p-3">
                <h2 class="text-white mb-4">Serie TV più popolari</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <PopularTvSeriesCard v-for="default_tvseries in store.default_tvseries_array" :key="default_tvseries.id"
                    :default_tvseries="default_tvseries"/>
                </div>
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
        margin-bottom: 50px;
    }

    .tv_series_container {
        width: 100%;
        min-height: 500px;
    }

</style>
