<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      3. Approaches to RBAC
    </h2>

    <p class="text-gray-700 mb-6 max-w-3xl">
      There are two general approaches for implementing Role-Based Access
      Control (RBAC) in modern web apps. Below is a comparison between
      integrating with Azure Entra (Microsoft Graph) and using a custom role
      management system based on an external database.
    </p>

    <div class="space-y-10">
      <ApproachCard
        v-for="(approach, index) in rbacApproaches"
        :key="index"
        :title="approach.title"
        :description="approach.description"
        :pros="approach.pros"
        :cons="approach.cons"
        :when-to-use="approach.whenToUse"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
import ApproachCard from "./ApproachCard.vue";

import { rbacApproaches } from "@/data/RbacApproaches";
</script>
