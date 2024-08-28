import { reactive } from "vue"

export const store = reactive ({
    api_key: "?api_key=bbf024ce6479c00488d2e7b78041a3e7",
    api_url: "https://api.themoviedb.org/3",
    movie_endpoint: "/search/movie",
    tv_series_endpoint: "/search/tv",
    movies_array: [],
    user_input: "",
    input_searched: "",
    tv_series_array: [],
    api_image: 'https://image.tmdb.org/t/p/',
    default_movies_array: [],
    default_tvseries_array: [],
    popular_movies_endpoint: "/movie/popular",
    popular_tvseries_endpoint: "/tv/popular"
})