<template>
  <div class="movies-container">
    <div v-if="loading">Loading</div>
    <div class="movies-results" v-else-if="response.results">
      <Card
        v-for="(movie, index) in response.results"
        :key="index"
        :movie="movie"
      ></Card>
    </div>
    <div v-else>Sorry Some Error Occurred</div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card'

export default {
  components: { Card },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      loading: true,
      response: null
    }
  },
  computed: {
    component() {
      return this.$route.meta.component
    }
  },
  methods: {
    getMovies() {
      this.loading = true
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.component}?api_key=${this.api_key}`
        )
        .then((response) => {
          this.response = response.data
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  watch: {
    component: {
      immediate: true,
      handler() {
        this.getMovies()
      }
    }
  }
}
</script>
