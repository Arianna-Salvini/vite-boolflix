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
            }

        }
    }
}

</script>

<template>
    <!-- Results of research -->
    <div class="container">
        <div class="movies">
            <ul>
                <h2>Movies</h2>

                <li v-for="(movie, index) in state.movies">
                    <img :src="`https://image.tmdb.org/t/p/w342` + movie.poster_path" alt="Poster"
                        v-if="movie.poster_path">
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

                </li>
            </ul>
        </div>
        <!-- /.movies -->

        <div class="series">
            <ul>
                <h2>Series</h2>
                <li v-for="(serie, index) in state.series">
                    <img :src="`https://image.tmdb.org/t/p/w342` + serie.poster_path" alt="Poster"
                        v-if="serie.poster_path">
                    <h3>{{ serie.name }}</h3>
                    <h4>{{ serie.original_name }}</h4>
                    <!-- change originallanguage with relative flags -->
                    <div v-if="languageToCountry[serie.original_language]"
                        :class="'fi fi-' + languageToCountry[serie.original_language]">
                    </div>
                    <div class="rating">
                        <!-- Trasformare il voto da 1 -10 a 1-5 e aggiungere le stelline -->
                        <span v-for="i in 5">
                            <i v-if="i <= serie.rating" class="fas fa-star"></i>
                            <i v-else class="far fa-star"></i>
                        </span>
                    </div>

                </li>
            </ul>
        </div>
        <!-- /.series -->

    </div>
</template>

<style></style>