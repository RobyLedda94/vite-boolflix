<script>
// importo lo store

export default {
    props : {
        SerieCard: Object
    },
    data() {
        return {
            // variabile hover settata a falso (non sono sull'immagine)
            hover: false,
        };
    },
}
</script>
<template lang="">
    <div class="col-12 col-sm-6 col-lg-3">
        <div class="card-serie my-2 text-center" @mouseover="hover = true" @mouseleave="hover = false">
            <!-- copertina + info base -->
             <!-- condizione v-if la varibile hover è falsa percio resta l'immagine -->
            <div v-if="!hover" class="content">
                <img :src="`https://image.tmdb.org/t/p/w342/${SerieCard.poster_path}`" class="img-fluid">
            </div>
            <!-- descrizione -->
             <!-- se la condizione e vera compare la descrizione -->
             <div v-if="hover" class="card-description">
                <p>{{SerieCard.original_name}}</p>
                <p>{{SerieCard.original_language}}</p>
                <p>{{SerieCard.vote_average}}</p>
                <p>{{SerieCard.overview}}</p>
             </div>
        </div>
    </div>
</template>

<style lang="scss">



</style>