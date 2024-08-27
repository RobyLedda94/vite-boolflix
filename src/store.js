// importare la componente reactive di vue

import { reactive } from 'vue';


// definire costante store da esportare

export const store = reactive({
    // chiamata api film
    apiUrlfilm: "https://api.themoviedb.org/3/search/movie?api_key=a3d8592e39f12c75786eb7e5447560dd&query=",
    apiUrlserie: "https://api.themoviedb.org/3/search/tv?api_key=a3d8592e39f12c75786eb7e5447560dd&query=",
    // array vuoto da popolare con i film che recupero
    listaFilms: [],
    // array vuoto da popolare con le serie che recupero
    listaSerieTv: [],
    // array di stringhe per la ricerca
    searchContent: "",

});


