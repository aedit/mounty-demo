<template>
  <div class="home">
    <h1 class="color-primary">Welcome</h1>
    <h3>to a simple API fetching website based on</h3>
    <h2>The Movie Database API</h2>
    <a href="https://themoviedb.org">
      <img class="home__image" src="@/assets/images/tmdb.svg" alt="" />
    </a>
    <ul class="home__links">
      <li>
        <router-link to="/movies/top-rated">View Top Rated Movies</router-link>
      </li>
      <li>
        <router-link to="/movies/upcoming">View Upcoming Movies</router-link>
      </li>
    </ul>
    <h3>
      Developed By
      <a href="http://aedit.me" target="_blank" rel="noopener noreferrer">
        Udit Sen
      </a>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
