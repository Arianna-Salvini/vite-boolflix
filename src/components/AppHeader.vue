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
            <div class="nav_left">
                <img class="logo" src="/public/img/logo.png" alt="">
            </div>
            <div class="nav_right">
                <input type="text" v-model.trim="state.textSearch" placeholder="Inserisci il titolo del film">
                <button class="search_btn" @click="state.getMedia()">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style>
.nav {
    height: 3.3rem;
    width: 100%;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    background-image: radial-gradient(circle, #44444476, #22222276);
    box-shadow: inset 0 0 5rem #000000, 0 0 1.5rem #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;

    .logo {
        height: 2.6rem;
        vertical-align: middle;
    }

    .nav_right>input,
    .search_btn {
        padding: 0.3rem 0.8rem;
        color: #ffffff;
        background-color: #44444476;
        border: 2px solid #333333;
        box-shadow: inset 0 0 1rem #00000080;
    }

    .nav_right>input {
        border-radius: 0.3rem 0 0 0.3rem;
        border-right: none;
    }

    .search_btn {
        border-radius: 0 0.3rem 0.3rem 0;

    }

}
</style>