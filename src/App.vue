<script>
// importo le componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import FilmList from './components/FilmList.vue';
import AppSearchFilms from './components/AppSearchFilms.vue';
import { store } from './store.js'
// importo axios per effettuare le chiamate
import axios from 'axios';





export default {
  // utilizzo le componenti
  components: {
    AppHeader,
    AppMain,
    FilmList,
    AppSearchFilms
  },
  // 
  created () {
    // una volta definito il metodo devo richiamare getFilmList
    this.getFilmList()
  },
  // nel methods utilizzo axios
  methods: {
    getFilmList(){
      axios.get(store.apiUrl).then((result) => {
        // recupero l'array vuoto da popolare a cui assegno i risultati della chiamata API
        store.listaFilms = result.data.results
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
  <AppHeader />
  <main>
    <FilmList />
  </main>
</template>


<!-- importo il foglio di stile -->
<style lang="scss">
@import './styles/general.scss'


  
</style>
