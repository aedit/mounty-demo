<template>
  <div class="movies-results__card">
    <img
      class="movies-results__card__image"
      :src="
        movie.backdrop_path
          ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
          : 'https://via.placeholder.com/500x280.png?text=Image+Not+Available'
      "
    />

    <h3 class="movies-results__card__title">{{ movie.original_title }}</h3>
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
