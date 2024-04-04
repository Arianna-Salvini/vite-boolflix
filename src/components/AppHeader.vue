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
        <!-- Creare un layout base con una searchbar (una input e un button) -->
        <div class="nav">
            <input type="text" v-model.trim="state.textSearch" placeholder="Inserisci il titolo del film">
            <button class="search_btn" @click="state.getMedia()">Cerca</button>
        </div>
    </div>
</template>

<style>
.nav {
    min-height: 100px;
}
</style>