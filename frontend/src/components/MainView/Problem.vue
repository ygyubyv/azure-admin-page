<template>
  <BaseSection>
    <h2 class="text-lg md:text-2xl font-bold text-gray-900">Problem</h2>

    <p class="text-[16px] md:text-base text-gray-700 leading-relaxed">
      Implementing user roles in Azure AD B2C can be a highly complicated task,
      as Azure AD B2C does not provide built-in role-based access control (RBAC)
      like Azure AD. This leads to many challenges and non-obvious workarounds
      when trying to build secure and maintainable access control logic.
    </p>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
