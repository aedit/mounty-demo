<template>
  <div class="movies-results__card">
    <img
      class="movies-results__card__image"
      :src="'https://image.tmdb.org/t/p/w400' + movie.backdrop_path"
    />

    <h2 class="movies-results__card__title">{{ movie.original_title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
