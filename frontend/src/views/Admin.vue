<template>
  <div
    class="max-w-5xl mx-auto md:my-12 p-6 bg-gray-50 rounded-xl shadow-md font-sans"
  >
    <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
      Authentication Panel
    </h2>

    <UsersList />
  </div>
</template>

<script setup lang="ts">
import UsersList from "@/components/AdminView/UsersList.vue";
</script>
