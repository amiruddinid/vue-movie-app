import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        movies: {}
    },
    mutations: {
        addMovies(state, movie){
            state.movies = movie
        }
    },
    actions:{
        fetchMovie({ commit }){
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=5592acc82e9c39c037907dfb73086421')
                .then(res => {
                    commit('addMovies', res.data)
                })
                .catch(err => console.log(err))
        }
    }
})

export default store;