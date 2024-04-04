<script>

import { state } from '../state.js'
import FlagUrl from './FlagUrl.vue'

export default {
    name: 'AppMain',

    data() {
        return {
            state,
        }
    },
    components: {
        FlagUrl,
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
                <div class="language">
                    <FlagUrl :languageType="movie.original_language" :flagUrl="getFlagUrl(movie.original_language)" />
                </div>
                <div class="rating"> {{ movie.vote_average }}</div>
            </li>
        </ul>
    </div>
</template>

<style></style>