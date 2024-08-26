<script>

import { store } from "../store.js"
import MovieCard from "./MovieCard.vue"

export default {
    components: {
        MovieCard
    },
    data() {
        return {
            store
        }
    }

}

</script>

<template>

    <div class="container">
        <div class="col-12">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                <MovieCard v-for="movie in store.movies_array" :key="movie.id" 
                :movie_card="movie"/>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
