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
                lem: "mw"
            }

        }
    }
}

</script>

<template>
    <!-- Results of research -->
    <div class="container">
        <ul>
            <li v-for="(movie, index) in state.movies" :key="index">
                <h2>{{ movie.title }}</h2>
                <h4>{{ movie.original_title }}</h4>
                <!-- change originallanguage with relative flags -->
                <span v-if="languageToCountry[movie.original_language]"
                    class="fi fi-{{languageToCountry[movie.original_language]}} flag-icon-squared"></span>
                <div class="rating"> {{ movie.vote_average }}</div>
            </li>
        </ul>
    </div>
</template>

<style></style>