<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">2. Pages Overview</h2>
    <div class="space-y-4">
      <PageOverview
        v-for="pageOverview in pagesOverview"
        :key="pageOverview.title"
        :page-overview="pageOverview"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "@/components/Base/BaseSection.vue";
import PageOverview from "./PageOverview.vue";
import { pagesOverview } from "@/data/pagesOverview";
</script>
