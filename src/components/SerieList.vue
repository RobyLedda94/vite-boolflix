<script>
// importo lo store nella componenete SerieList
import { store } from '../store.js'
// importo la componenete AppSearchSeries
import AppSearchSeries from './AppSearchFilms.vue';

export default {
    components : {
        AppSearchSeries,
    },
    data () {
        return {
            store,
        }
    }
    
}
</script>


<template lang="">
    <div class="container">
        <div class="row">
            <!-- faccio il ciclo for su tutta la componenete -->
            <AppSearchSeries v-for="(serie, index) in store.listaSerieTv" :key="serie.id" :SerieCard="serie"/>
        </div>
    </div>
</template>




<style lang="">
    
</style>