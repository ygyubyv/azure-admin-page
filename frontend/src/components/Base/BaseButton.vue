<template>
  <button
    @click="onClick"
    class="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
  >
    <span>{{ text }}</span>
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Props {
  text: string;
  icon: string[];
  onClick?: () => void;
}

const props = defineProps<Props>();
const onClick = props.onClick ?? (() => {});
</script>
