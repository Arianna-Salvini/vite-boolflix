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
                let searchLowercase = this.textSearch.toLocaleLowerCase()
                if (searchLowercase !== '') {
                    response.data.results.forEach(media => {
                        if (media.media_type === 'movie' || media.media_type === 'tv') {
                            if (media.media_type === 'movie') {
                                this.movies.push(media)
                            } else if (media.media_type === 'tv') {
                                this.series.push(media)
                            }
                        }

                    });
                }
            })

            // // Second try

            // .then(response => {
            //     this.movies = response.data.result.filter(result => result.media_type === 'movie')
            //     this.series = response.data.result.filter(result => result.media_type === 'tv')
            // },

            .catch(error => {
                console.log(error)
                console.error(error.message);
            })
        // clean searchbar
        this.textSearch = ''
    },

    // getMovies() {
    //     axios
    //         // ajax call 
    //         .get(`https://api.themoviedb.org/3/search/movie?query=${this.textSearch}&api_key=${this.api_key}&language=it_IT`)
    //         .then(response => {
    //             //  filter movies based on the digit typer in searchbar/mivieSearch and put in movie array
    //             let searchLowercase = this.textSearch.toLocaleLowerCase()
    //             if (searchLowercase === '') {
    //                 this.movies = response.data.results
    //             } else {
    //                 this.movies = response.data.results.filter(movie => {
    //                     return movie.title.toLowerCase().includes(searchLowercase)
    //                 })
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             console.error(error.message);
    //         })
    //     // clean searchbar
    //     this.textSearch = ''
    // },
})
