<script>

import { state } from '../state.js'

export default {
    name: 'AppMain',

    data() {
        return {
            state,
            languageToCountry: {
                it: "it",
                en: "us",
                es: "es",
                fr: "fr",
                de: "de",
                ja: "jp",
                zh: "cn",
                ru: "ru",
                pt: "pt",
                ar: "sa",
                ko: "kr",
                nl: "nl",
                gsw: "ch",
                sv: "se",
                fi: "fi",
                da: "dk",
                no: "no",
                el: "gr",
                he: "il",
                tr: "tr",
                pl: "pl",
                hu: "hu",
                cs: "cz",
                sk: "sk",
                bg: "bg",
                ro: "ro",
                uk: "ua",
                sr: "rs",
                hr: "hr",
                bs: "ba",
                mk: "mk",
                sq: "al",
                lv: "lv",
                lt: "lt",
                et: "ee",
                is: "is",
                ga: "ie",
                gl: "es",
                ca: "es",
                eu: "es",
                cy: "gb",
                gd: "gb",
                br: "fr",
                hi: "in",
                bn: "bd",
                ta: "in",
                te: "in",
                mr: "in",
                ur: "pk",
                gu: "in",
                kn: "in",
                ml: "in",
                or: "in",
                pa: "in",
                si: "lk",
                th: "th",
                km: "kh",
                vi: "vn",
                id: "id",
                fil: "ph",
                ms: "my",
                sw: "tz",
                am: "et",
                so: "so",
                ha: "ng",
                yi: "il",
                af: "za",
                zu: "za",
                xh: "za",
                st: "za",
                su: "sd",
                fa: "ir",
                ku: "iq",
                ps: "af",
                tl: "ph",
                qu: "pe",
                gn: "py",
                ay: "bo",
                tt: "ru",
                ba: "ru",
                ug: "cn",
                ky: "kg",
                bo: "cn",
                ce: "ru",
                os: "ru",
                tyv: "ru",
                cv: "ru",
                to: "to",
                sm: "ws",
                mi: "nz",
                haw: "us",
                fj: "fj",
                gil: "ki",
                na: "nr",
                mfe: "mu",
                ty: "pf",
                ch: "gu",
                kr: "fm",
                pau: "pw",
                mh: "mh",
                bi: "vu",
                tpi: "pg",
                ho: "pg",
                paa: "pg",
                sbi: "sb",
                pih: "nf",
                tvl: "tv",
                niu: "nu",
                wls: "wf",
                lem: "mw",
                hy: "am",
            },
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
    margin-top: 3rem;

    & h2 {
        padding-top: 2rem;
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

            .poster_card {
                position: relative;
                overflow: hidden;
            }

            .card_info {
                width: 100%;
                height: 100%;
                color: #ffffff;
                background-color: #00000070;
                padding-left: 1.5rem;
                padding: 0.8rem;
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                display: none;

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
                border: 3px inset #888888;
                opacity: 1;
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