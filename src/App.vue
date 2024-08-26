<script>
import { store } from "./store.js"
import axios from "axios"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
 
export default {
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    getFilms(movie) {
      let moviesUrl = `${store.api_url}${store.movie_endpoint}${store.api_key}` 
      axios.get(`${moviesUrl}&query=${movie}`)
      .then((result) => {
        let movies = result.data.results
        store.movies_array = movies
        console.log(movies)
      })
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

  <AppHeader @searchMovies="getFilms" />

  <AppMain />

</template>

<style>
@import "./styles/generals.scss"
</style>
