<script>
import {store} from "../store.js"
export default {
methods: {
    searchMovies(movie) {
        this.$emit('searchMovies', movie)
    }
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
        <div class="row">
            <div class="col">
                <!-- devo creare una input con button per cercare i film -->
                 <input type="text" v-model="store.user_input" placeholder="Cerca un film...">
                 <button @click="searchMovies(store.user_input)">Cerca</button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
