<template>
  <div class="p-7">
    <LoadMessage
      v-if="isLoading"
      :size="12"
      :color="red"
      message="영화 정보를 불러오는 중..."
    />
    <div v-else>
      <h1 class="py-4 text-2xl font-bold">영화정보</h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12"
      >
        <div
          v-for="(movie, i) in data"
          :key="i"
          class="bg-white overflow-hidden shadow-lg rounded-2xl"
        >
          <img
            :src="`${movie.imgUrl}`"
            :alt="movie.title"
            class="w-full h-[420px] object-cover"
          />
          <div class="flex flex-col p-4">
            <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
            <p class="text-neutral-400">개봉: {{ movie.year }}</p>
            <p class="text-neutral-400">장르: {{ movie.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dummyAllMovieList } from "@/lib/dummydata";
import LoadMessage from "./LoadMessage.vue";

export default {
  name: "MovieListComponent",
  data() {
    return {
      data: dummyAllMovieList,
      isLoading: true,
    };
  },
  components: {
    LoadMessage: LoadMessage,
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  },
};
</script>
