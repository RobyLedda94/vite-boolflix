<script>



export default {
    props: {
        FilmCard: Object
    },
}
</script>
<template lang="">
    <div class="col-12 col-sm-6 col-lg-3">
        <div class="card-films p-2 my-2 text-center bg-light">
            <img :src="`https://image.tmdb.org/t/p/w342/${FilmCard.poster_path}`" class="img-fluid">
            <p>
                {{FilmCard.original_title}}

            </p>
            <p>
                {{FilmCard.original_language}}
            </p>
            <p>
                {{FilmCard.vote_average}}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>