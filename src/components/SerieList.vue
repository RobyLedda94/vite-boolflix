<script>
// importo lo store nella componenete SerieList
import { store } from '../store.js'
// importo la componenete AppSearchFilm
import AppSearchFilms from './AppSearchFilms.vue';

export default {
    components : {
        AppSearchFilms,
    },
    data () {
        return {
            store,
        }
    }
    
}
</script>


<template lang="">
    <div>
        
    </div>
</template>




<style lang="">
    
</style>