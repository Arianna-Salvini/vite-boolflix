import { reactive } from "vue"
import axios from "axios"

export const state = reactive({
    movies: [],
    api_key: "8369ac113a5db6f855f8b8b039b932f1",
    movieSearch: "",

    getMovies() {
        axios
            // ajax call 
            .get(`https://api.themoviedb.org/3/search/movie?query=${this.movieSearch}&api_key=${this.api_key}&language=it_IT`)
            .then(response => {
                //  filter movies based on the digit typer in searchbar/mivieSearch and put in movie array
                let searchLowercase = this.movieSearch.toLocaleLowerCase()
                if (searchLowercase === '') {
                    this.movies = response.data.results
                } else {
                    this.movies = response.data.results.filter(movie => {
                        return movie.title.toLowerCase().includes(searchLowercase)
                    })
                }
            })
            .catch(error => {
                console.log(error)
                console.error(error.message);
            })
        // clean searchbar
        this.movieSearch = ''
    }
})