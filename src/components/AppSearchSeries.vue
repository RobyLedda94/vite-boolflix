<script>
// importo lo store

export default {
    props : {
        SerieCard: Object,
    }
}
</script>
<template lang="">
    <div class="col-12 col-sm-6 col-lg-3">
        <div class="card-serie p-2 my-2 text-center bg-light">
            <p>
                {{SerieCard.original_name}}
            </p>
            <p>
                {{SerieCard.original_language}}
            </p>
            <p>
                {{SerieCard.vote_average}}
            </p>
        </div>
    </div>
</template>

<style lang="">
.card-serie{
    min-height: 200px;
}
</style>