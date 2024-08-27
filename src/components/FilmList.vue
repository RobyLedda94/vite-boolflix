<script>
// importato lo store nel componenete FilmList.vue
import { store } from '../store.js'
// richiamo la componenete AppSearchFilms
import AppSearchFilms from './AppSearchFilms.vue';


export default {
    components: {
        AppSearchFilms
    },
    data() {
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <!-- faccio il ciclo for su tutta la componenete -->
             <h2 class="text-center my-3">FILM</h2>
            <AppSearchFilms v-for="(film, index) in store.listaFilms" :key="film.id" :FilmCard="film"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>


</style>