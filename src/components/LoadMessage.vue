<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <fwb-spinner :size="size" :color="color" />
    <div class="text-center mt-2 text-lg">{{ message }}</div>
  </div>
</template>

<script setup>
import { FwbSpinner } from "flowbite-vue";

const props = defineProps({
  size: {
    type: String,
    default: "12",
  },
  color: {
    type: String,
    default: "red",
  },
  message: {
    type: String,
    default: "Loading...",
  },
});
</script>
