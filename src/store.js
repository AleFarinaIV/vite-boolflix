import { reactive } from "vue"

export const store = reactive ({
    api_key: "?api_key=bbf024ce6479c00488d2e7b78041a3e7",
    api_url: "https://api.themoviedb.org/3",
    movie_endpoint: "/search/movie",
    tv_endpoint: "/search/tv"
})