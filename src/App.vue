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
    getFilms(input) {
      let moviesUrl = `${store.api_url}${store.movie_endpoint}${store.api_key}` 
      axios.get(`${moviesUrl}&query=${input}`)
      .then((result) => {
        let movies = result.data.results
        store.movies_array = movies
        console.log(movies)
      })
    },
    getTvSeries(input) {
      let seriesUrl = `${store.api_url}${store.tv_series_endpoint}${store.api_key}`
      axios.get(`${seriesUrl}&query=${input}`).then((result) => {
        let series = result.data.results
        store.tv_series_array = series
        console.log(series)
      })
    },
    getInput(input) {
      this.getFilms(input);
      this.getTvSeries(input);
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

  <AppHeader @searchMoviesAndSeries="getInput" />

  <AppMain />

</template>

<style>
@import "./styles/generals.scss"
</style>
