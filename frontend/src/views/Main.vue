<template>
  <div class="max-w-5xl mx-auto p-6 space-y-8 mb-8">
    <Introduction />

    <Problem />

    <Solution />

    <FunctionalitySection />

    <TechSection />
  </div>
</template>

<script setup lang="ts">
import FunctionalitySection from "@/components/MainView/FunctionalitySection.vue";
import Introduction from "@/components/MainView/Introduction.vue";
import Problem from "@/components/MainView/Problem.vue";
import Solution from "@/components/MainView/Solution.vue";
import TechSection from "@/components/MainView/TechSection.vue";
</script>
