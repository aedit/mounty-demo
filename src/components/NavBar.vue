<template>
  <div class="navbar">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
      :class="link.class"
    >
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      if (this.$route.name === 'Home')
        return [
          { label: 'Home', link: '/', class: 'home-link' },
          { label: 'Movies', link: '/movies' }
        ]
      else
        return [
          { label: 'Home', link: '/', class: 'home-link' },
          { label: 'Top Rated', link: '/movies/top-rated' },
          { label: 'Upcoming', link: '/movies/upcoming' }
        ]
    }
  }
}
</script>
