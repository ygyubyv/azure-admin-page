<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">How to use</h2>
    <ol
      class="list-decimal list-inside space-y-2 text-[16px] md:text-base text-gray-700 leading-relaxed"
    >
      <li>Sign in with your account (or use the provided demo credentials).</li>
      <li>Go to the “Me” page to view your profile details.</li>
      <li>Visit the “Users” page to browse and search all users.</li>
      <li>
        If you have the appropriate role, use the “Admin” page to manage users.
      </li>
    </ol>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
