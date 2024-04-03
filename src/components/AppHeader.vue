<script>

import { state } from '../state.js'

export default {
    name: 'AppHeader',

    data() {
        return {
            state,
        }
    },
}
</script>

<template>
    <div class="container">
        <input type="text" v-model="movieSearch" placeholder="Inserisci il titolo del film">
        <button class="search_btn" @click="getMovie">Cerca</button>
    </div>
</template>

<style></style>