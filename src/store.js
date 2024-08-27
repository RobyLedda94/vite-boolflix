// importare la componente reactive di vue

import { reactive } from 'vue';


// definire costante store da esportare

export const store = reactive({
    // url api
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=a3d8592e39f12c75786eb7e5447560dd&query=",
    // array vuoto da popolare con i film che recupero
    listaFilms: [],
    // array di stringhe per la ricerca
    searchContent: "",

});