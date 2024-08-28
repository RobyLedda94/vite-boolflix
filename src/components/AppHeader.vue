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
header {
    position: fixed; /* Fissa l'header in cima */
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    padding: 20px 0; /* Ridotto il padding per adattare l'header fisso */
    z-index: 1000; /* Assicura che l'header sia sopra altri contenuti */
    color: white; /* Colore del testo dell'header */
    display: flex; /* Usa flexbox per allineare il contenuto */
    justify-content: center; /* Allinea il contenuto orizzontalmente */
}
    
</style>



