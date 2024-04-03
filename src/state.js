import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    movies: [],
    api_key: "8369ac113a5db6f855f8b8b039b932f1",
    movieSearch: "matrix",

    getMovies() {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${this.movieSearch}api_key=${this.api_key}&language=it_IT`)
            .then(response => {
                // console.log(response);
                this.movies = response.data.results;
                // console.log(this.movies);
            })
    }
})
