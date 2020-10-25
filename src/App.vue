<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Search />
    <Movie :movies="movies"/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Movie from './components/Movie.vue'

export default {
  name: 'App',
  components: {
    Movie,
    Search,
  },
  data() {
      return{
          movies:{}
      }
  },
  beforeMount(){
      this.fetchMovie()
  },
  methods: {
      fetchMovie(){
          fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5592acc82e9c39c037907dfb73086421')
              .then(res => res.json())
              .then(data => this.movies = data)
              .catch(err => console.log(err))
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
