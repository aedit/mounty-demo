import axios from 'axios'

export default {
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
  mounted() {
    this.getMovies()
  },
  methods: {
    getMovies() {
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
  }
}
