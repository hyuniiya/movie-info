<template>
  <div
    :class="isFocused ? 'w-full max-w-lg' : 'max-w-md'"
    class="flex items-center rounded-full bg-white overflow-hidden shadow-lg mx-auto transition-all duration-300 ease-in-out"
  >
    <input
      type="search"
      v-model="inputText"
      placeholder="영화 이름을 검색하세요."
      class="flex-grow p-2 pl-4 outline-none"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <button class="p-4">
      <CgSearch class="text-gray-500 h-6 w-6" />
    </button>
  </div>
</template>
<script>
import { CgSearch } from "@kalimahapps/vue-icons";

export default {
  name: "SearchBarComponent",
  data() {
    return {
      inputText: "",
      isFocused: false,
    };
  },
  components: {
    CgSearch,
  },
};
</script>
