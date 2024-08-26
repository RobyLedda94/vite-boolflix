// importare la componente reactive di vue

import { reactive } from 'vue';
import FilmList from './components/FilmList.vue';

// definire costante store da esportare

export const store = reactive({
    apiUrl: "",
    // array vuoto da popolare con i film che recupero
    listaFilms: [],
});