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
            <AppSearchFilms v-for="(film, index) in store.listaFilms" :key="film.id" :FilmCard="film"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>


</style>