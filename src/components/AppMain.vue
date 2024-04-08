<script>

import { state } from '../state.js'
import { languageToCountry } from '../assets/js/languageToCountry.js'

export default {
    name: 'AppMain',

    data() {
        return {
            state,
            languageToCountry,
        }
    },
}

</script>

<template>
    <!-- Results of research -->
    <div class="container">

        <h2>Movies</h2>
        <section class="movies">

            <!-- Card Movie -->
            <div v-for="(movie, index) in state.movies" :key="index" class="card">
                <img class="poster_card" :src="`https://image.tmdb.org/t/p/w342` + movie.poster_path" alt="Poster"
                    v-if="movie.poster_path">

                <!-- Info visibili con l'over -->
                <div class="card_info">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>

                    <!-- change originallanguage with relative flags -->
                    <div v-if="languageToCountry[movie.original_language]"
                        :class="'fi fi-' + languageToCountry[movie.original_language]">
                    </div>

                    <!-- Trasformare il voto da 1 -10 a 1-5 e aggiungere le stelline -->
                    <div class="rating">
                        <span v-for="i in 5">
                            <i v-if="i <= movie.rating" class="fas fa-star"></i>
                            <i v-else class="far fa-star"></i>
                        </span>
                    </div>

                    <!-- Aggiungere l' overview -->
                    <div class="overview">
                        <strong class="overview_title">Overview</strong>
                        <br>
                        {{ movie.overview }}
                    </div>

                </div>

            </div>
        </section>
        <!-- /.movies -->

        <h2>Series</h2>
        <section class="series">

            <!-- Card Series -->
            <div v-for="(serie, index) in state.series" :key="index" class="card">

                <!-- visalizzazione del solo poster per la card fino all'over -->
                <img class="poster_card" :src="`https://image.tmdb.org/t/p/w342` + serie.poster_path" alt="Poster"
                    v-if="serie.poster_path">

                <!-- Info visibili con l'over -->
                <div class="card_info">
                    <h3>{{ serie.name }}</h3>
                    <h4>{{ serie.original_name }}</h4>

                    <!-- change originallanguage with relative flags -->
                    <div class="flag" v-if="languageToCountry[serie.original_language]"
                        :class="'fi fi-' + languageToCountry[serie.original_language]">
                    </div>
                    <div class="rating">

                        <!-- Trasformare il voto da 1 -10 a 1-5 e aggiungere le steldivne -->
                        <span v-for="i in 5">
                            <i v-if="i <= serie.rating" class="fas fa-star"></i>
                            <i v-else class="far fa-star"></i>
                        </span>
                    </div>

                    <!-- Aggiungere l' overview -->
                    <div class="overview">
                        <strong class="overview_title">Overview</strong>
                        <br>
                        {{ serie.overview }}
                    </div>
                </div>
            </div>
        </section>
        <!-- /.series -->

    </div>
</template>

<style>
.container {
    margin: 3rem 1rem;

    & h2 {
        padding: 2rem 1rem 0;
        font-size: 1.6rem;
        display: block;
    }

    & section {
        padding: 2rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        .card {
            position: relative;
            /* Aggiungo tridimensionalità */
            perspective: 1000px;
            border: 1px solid #333333;

            .poster_card {
                width: 342px;
                height: 100%;
                object-fit: cover;
                object-position: center;
                position: relative;
                /* transizione più fluida */
                transition: transform 0.8s ease-in-out;
                z-index: 1;
            }

            .card_info {
                width: 342px;
                height: 100%;
                color: #ffffff;
                background-color: #00000070;
                padding-left: 1.5rem;
                padding: 0.8rem;
                opacity: 0;
                overflow: auto;
                position: absolute;
                top: 0;
                left: 0;
                display: none;

                /* transizione più fluida */
                transition: opacity 0.8s ease-in-out, trasform 0.8s ease-in-out;
                transform: translateY(100%);
                transform-origin: bottom;

                &>* {
                    margin: 0.5rem 1rem;
                }

                & h3 {
                    font-size: 1.3rem;
                }

                .overview {
                    font-size: 0.9rem;
                    line-height: 1.3rem;

                    .overview_title {
                        font-size: 1.1rem;
                        line-height: 1.7rem;
                    }
                }
            }

            &:hover .card_info {
                display: block;
                background-color: #000000af;
                border: 2px inset #888888;
                opacity: 1;
                transform: translateY(0%);
                box-shadow: 0 1rem 2rem #00000066;
                z-index: 3;
            }

            &:hover .poster_card {
                transform: scale(1.01);
                z-index: 2;
            }
        }
    }
}

/* Scroolbar */

::-webkit-scrollbar {
    width: 0.1rem;
    background-color: #333333;
}

::-webkit-scrollbar-track {
    background: #333333;
    box-shadow: inset 0 0 1rem #000000, 0 0 1rem #000000;
}

::-webkit-scrollbar-thumb {
    border: 1px solid #222222;
    border-radius: 10px;
    box-shadow: inset 0 0 0.5rem 0.1rem #333333;
}
</style>