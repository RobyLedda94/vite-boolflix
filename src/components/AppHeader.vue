<script>
// importo lo store

import { store } from '../store.js';

export default {
    data() {
        
        return {
            store,
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="content-header my-3">
                        <h1>BOOLFLIX</h1>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="content-header my-3">
                        <form class="d-flex" role="search">
                            <!-- eseguo la direttiva v-model per recuperare i valori inseriti nell'input -->
                            <input class="form-control me-2" type="search" placeholder="Ricerca film o serie tv" v-model="store.searchContent" aria-label="Search">
                            <!-- evento click sul bottone -->
                            <button class="btn btn-outline-danger" type="submit" @click.prevent="$emit('search')">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        padding: 30px 0;
        background-color: black;
        h1 {
            color: rgb(167, 16, 16);
        }
    }
    
</style>



