<script>
import { store } from "./store.js"
import axios from "axios"
import AppHeader from "./components/AppHeader.vue"
 
export default {
  components: {
    AppHeader
  },
  created() {
    this.getFilms()
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

</template>

<style scoped>
@import "./styles/generals.scss"
</style>
