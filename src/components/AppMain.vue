<script>

import { state } from '../state.js'

export default {
    name: 'AppMain',

    data() {
        return {
            state,
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
                <span class="fi fi-{{movie.original_language}}"></span>
                <div class="rating"> {{ movie.vote_average }}</div>
            </li>
        </ul>
    </div>
</template>

<style></style>