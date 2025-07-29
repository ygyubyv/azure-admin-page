<template>
  <div class="border border-gray-300 rounded-lg p-4 text-sm bg-white shadow-sm">
    <p class="text-gray-600 font-semibold mb-1">Claim</p>
    <p class="text-gray-800 break-all mb-2">{{ claim }}</p>

    <p class="text-gray-600 font-semibold mb-1">Value</p>
    <p class="text-gray-800 break-all mb-2">{{ value }}</p>

    <p class="text-gray-600 font-semibold mb-1">Description</p>
    <p class="text-gray-500 italic">
      {{ description || "—" }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  claim: string;
  value: any;
  description: string;
}

defineProps<Props>();
</script>
