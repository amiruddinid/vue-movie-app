<template>
    <div class="movielist">
        <div class="movie-wrap" v-if="movie.results">
            <div class="movie"  v-for="item in movie.results" :key="item.id">
                <h5>{{ item.original_title }}</h5>
                <p>{{ item.overview }}</p>
                <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="movie.original_title" />
            </div>
        </div>
        <div v-else>Data Kosong</div>
    </div>
</template>

<script>
export default {
    name: 'List',
    props:['movie'],
}
</script>

<style>

</style>