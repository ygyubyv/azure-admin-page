<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
</script>
