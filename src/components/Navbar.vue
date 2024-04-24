<template>
  <nav
    class="p-3 flex flex-row items-center justify-between bg-neutral-900 w-full h-[90px]"
  >
    <img
      src="/MovieLogo.png"
      alt="logo"
      class="w-[170px] h-[50px] cursor-pointer"
    />
    <div class="flex-grow">
      <SearchBar />
    </div>
    <div class="text-neutral-100 text-lg font-semibold">
      <a href="#" class="p-4">Home</a>
      <a href="#" class="p-4">Movies</a>
      <a href="#" class="p-4">About</a>
    </div>
  </nav>
</template>
<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "NavbarComponent",
  components: {
    SearchBar: SearchBar,
  },
};
</script>
