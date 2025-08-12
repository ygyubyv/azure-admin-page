<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click="emit('close')"
    ></div>

    <div
      class="relative bg-white rounded-2xl shadow-xl w-full max-w-md z-10 p-0 overflow-hidden"
    >
      <div
        class="flex items-center justify-between px-5 py-4 border-b border-gray-200"
      >
        <slot name="header">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ $t("common.confirmation") }}
          </h3>
        </slot>
        <button
          @click="emit('close')"
          class="text-gray-400 hover:text-gray-600 transition"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl" />
        </button>
      </div>

      <div class="px-5 py-4 text-gray-700">
        <slot>
          {{ $t("common.defaultModalText") }}
        </slot>
      </div>

      <div
        class="flex justify-end gap-3 px-5 py-4 bg-gray-50 border-t border-gray-200"
      >
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
