<template>
  <div>
    <div class="movies-loading" v-if="loading">Loading...</div>
    <div class="movies-results" v-else-if="list.length">
      <Card v-for="(movie, index) in list" :key="index" :movie="movie"></Card>
    </div>
    <div class="movies-error" v-else>Sorry, Some Error Occurred!</div>
    <Footer :key="component">
      <span>
        Page:
        <input
          :value="pageNo"
          type="number"
          min="1"
          :max="total_pages"
          @keyup.enter="pageChange($event.target.value)"
        />
        of {{ total_pages || '' }}
      </span>
    </Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card'
import Footer from '@/components/Footer.vue'

export default {
  components: { Card, Footer },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      loading: true
    }
  },
  computed: {
    component() {
      return this.$route.meta.component
    },
    list() {
      return this.$store.getters['list'](this.component)
    },
    pageNo() {
      return this.$store.getters['pageNo'](this.component)
    },
    total_pages() {
      return this.$store.getters['total_pages'](this.component)
    }
  },
  methods: {
    getMovies(page = this.pageNo) {
      this.loading = true
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.component}?api_key=${this.api_key}&page=${page}`
        )
        .then((response) => {
          this.$store.commit('updateList', {
            component: this.component,
            list: response.data.results
          })
          this.$store.commit('updatePageNo', {
            component: this.component,
            pageNo: response.data.page
          })
          this.$store.commit('total_pages', {
            component: this.component,
            total_pages: response.data.total_pages
          })
        })
        .finally(() => {
          this.loading = false
        })
    },
    pageChange(page) {
      if (!page || page > this.total_pages) return
      this.getMovies(page)
    }
  },
  watch: {
    component: {
      immediate: true,
      handler() {
        if (!this.list.length) this.getMovies()
        else this.loading = false
      }
    }
  }
}
</script>
