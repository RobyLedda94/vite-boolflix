<script>
// importato lo store nel componenete FilmList.vue
import { store } from '../store.js'


export default {
    props: {
        card: Object
    },
}
</script>
<template lang="">
    <div class="col-12 col-sm-6 col-lg-3">
        <div class="card-films p-2 my-2 text-center bg-light">
            <p>
                {{card.original_title}}
            </p>
            <p>
                {{card.original_language}}
            </p>
            <p>
                {{card.vote_average}}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-films{
    min-height: 200px;
}
</style>