<script>
// importo le componenti
import AppHeader from './components/AppHeader.vue';
import AppSearchSeries from './components/AppSearchSeries.vue';
import SerieList from './components/SerieList.vue';
import FilmList from './components/FilmList.vue';
import AppSearchFilms from './components/AppSearchFilms.vue';
// iporto store
import { store } from './store.js'
// importo axios per effettuare le chiamate
import axios from 'axios';





export default {
  // utilizzo le componenti
  components: {
    AppHeader,
    SerieList,
    AppSearchSeries,
    FilmList,
    AppSearchFilms
  },
  // 

  // nel methods utilizzo axios
  methods: {
    getFilmList(){
      // recupero dallo store l'array di stringhe di ricerca 
      axios.get(store.apiUrlfilm + store.searchContent).then((result) => {
        // recupero l'array vuoto da popolare a cui assegno i risultati della chiamata API
        store.listaFilms = result.data.results;
        console.log(store.listaFilms);
        console.log(store.searchContent);
      });
      // axios per chiamare l'API delle serie tv
      axios.get(store.apiUrlserie + store.searchContent).then((result) => {
        store.listaSerieTv = result.data.results;
        console.log(store.listaSerieTv);
      });
    }
  },
  data() {
    return {
      store,
    }
  }
}
</script>
<template lang="">
  <AppHeader @search="getFilmList" />
  <main>
    <FilmList />
    <SerieList />
  </main>
</template>


<!-- importo il foglio di stile -->
<style lang="scss">
@import './styles/general.scss'


  
</style>
