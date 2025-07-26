<template>
  <button
    @click="onClick"
    :aria-label="text"
    class="group flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  >
    <font-awesome-icon :icon="icon" class="text-sm md:text-lg" />
    <span class="hidden md:inline-block font-medium">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  icon: string[];
  onClick?: () => void;
}

const props = defineProps<Props>();
const onClick = props.onClick ?? (() => {});
</script>
