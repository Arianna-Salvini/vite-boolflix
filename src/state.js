import { reactive } from "vue"
import axios from "axios"

export const state = reactive({
    movies: [],
    series: [],
    api_key: "8369ac113a5db6f855f8b8b039b932f1",
    textSearch: "",

    getMedia() {
        axios
            // ajax call 
            .get(`https://api.themoviedb.org/3/search/multi?api_key=${this.api_key}&language=it_IT&query=${this.textSearch}`)
            .then(response => {
                this.movies = response.data.results.filter(result => result.media_type === 'movie')
                this.series = response.data.results.filter(result => result.media_type === 'tv')
                // console.log(this.movies, this.series);

                // Calcolo rating movie
                this.movies.forEach(movie => {
                    movie.rating = this.ratingCalc(movie.vote_average)
                    console.log(movie.rating)
                })

                // Calcolo rating series
                this.series.forEach(serie => {
                    serie.rating = this.ratingCalc(serie.vote_average)
                    console.log(serie.rating);
                })
            })
            .catch(error => {
                console.log(error)
                console.error(error.message);
            })

        // clean searchbar
        this.textSearch = ''
    },

    // Calcolare il rating da 1 a 5 al posto del rating da 1 a 10
    ratingCalc(voteAverage) {
        return Math.round(voteAverage / 2)
    }

})
