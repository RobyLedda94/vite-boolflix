<script>
// importo le componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import FilmList from './components/FilmList.vue'
import AppSearchFilms from './components/AppSearchFilms.vue'
import { store } from './store.js'





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

  },
  methods: {

  },
  data() {
    return {
      store,
    }
  }
}
</script>
<template lang="">
  <div class='container'>
    <div class='row'>
      <div class='col-12 col-md-4'>
        
      </div>
    </div>
  </div>
</template>

<style lang="">
  
</style>
