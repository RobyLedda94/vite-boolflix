<script>
// importato lo store nel componenete FilmList.vue
import { store } from '../store.js'


export default {
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
            <!-- devo ciclare l'array -->
            <div class="col-12 col-md-3" v-for="(film, index) in store.listaFilms" :key="film.id">
                <div class="content-main">
                    <p>
                        {{film.original_title}}
                    </p>
                    <p>
                        {{film.original_language}}
                    </p>
                    <p>
                        {{film.vote_average}}
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>