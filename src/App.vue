<template>
  <Navbar />
  <MovieList />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import MovieList from "./components/MovieList.vue";
export default {
  name: "App",

  components: {
    Navbar: Navbar,
    MovieList: MovieList,
  },
};
</script>
