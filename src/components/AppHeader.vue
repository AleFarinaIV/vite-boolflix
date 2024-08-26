<script>
import {store} from "../store.js"
export default {
methods: {
    searchMoviesAndSeries(input) {
        this.$emit('searchMoviesAndSeries', input)
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

    <div class="container my-5">
        <div class="row">
            <div class="col">
                <!-- devo creare una input con button per cercare i film -->
                <input @keyup.enter="searchMoviesAndSeries(store.user_input)" type="text" v-model="store.user_input" placeholder="Cerca un film..." >
                <button @click="searchMoviesAndSeries(store.user_input)">Cerca</button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
