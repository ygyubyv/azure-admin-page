<template>
  <BaseSection>
    <h2 class="text-lg md:text-2xl font-bold text-gray-900">Solution</h2>

    <p class="text-[16px] md:text-base text-gray-700 leading-relaxed">
      This challenge is addressed by combining Azure AD B2C API connectors, a
      custom backend, and claims customization. The API connector stores user
      role metadata either in an external database or directly in Microsoft
      Graph, and enriches tokens during the sign-in flow. A secure admin panel
      interacts with the backend to manage roles, while Azure Functions handle
      authorization logic and token claims injection — effectively mimicking a
      flexible PBAC system on top of Azure AD B2C.
    </p>

    <p class="text-[16px] md:text-base text-gray-700 leading-relaxed">
      In this project's GitHub repository, you can explore two different
      approaches to solving this problem: one using a custom database, and
      another using Microsoft Graph directly. The live version of this site uses
      the Microsoft Graph-based implementation.
    </p>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
