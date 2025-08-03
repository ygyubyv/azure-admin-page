<template>
  <div class="bg-gray-50 p-4 rounded-lg">
    <p class="font-semibold text-gray-800 mb-2">{{ pageOverview.title }}</p>
    <p class="text-gray-700">
      {{ pageOverview.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PageOverview } from "@/types/PageOverview";

interface Props {
  pageOverview: PageOverview;
}

defineProps<Props>();
</script>
