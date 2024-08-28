<script>



export default {
    props: {
        FilmCard: Object
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
        <div class="card-films p-2 my-2 text-center" @mouseover="hover = true" @mouseleave="hover = false">
            <!-- copertina + info base -->
             <!-- condizione v-if la varibile hover è falsa percio resta l'immagine -->

            <div class="content">
                <img :src="`https://image.tmdb.org/t/p/w342/${FilmCard.poster_path}`" class="img-fluid">
            </div>
            <!-- descrizione -->
             <!-- se la condizione e vera compare la descrizione -->

             <div  class="card-description" :class="{'show': hover}">
                <p>{{FilmCard.original_title}}</p>
                <p>{{FilmCard.original_language}}</p>
                <p>{{FilmCard.vote_average}}</p>
                <p>{{FilmCard.overview}}</p>
             </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-films {
    position: relative; 
    overflow: hidden;  
    border-radius: 8px; 
    cursor: pointer; 
}

.content {
    position: relative; 
}

.content img {
    width: 100%; 
    height: auto; 
    display: block; 
    transition: opacity 0.3s ease; 
}

.card-description {
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    color: white;
    padding: 10px;
    opacity: 0; 
    transition: opacity 0.3s ease; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: auto; 
    box-sizing: border-box; 
}

.card-description.show {
    opacity: 1; 
}

.card-films:hover .content img {
    opacity: 0.3; 
}
</style>