<template>
  <BaseSection>
    <h2 class="text-lg md:text-2xl font-bold text-gray-900">
      Core Functionality
    </h2>

    <ul class="list-disc list-inside space-y-2 text-[16px] md:text-base">
      <li>
        View authorized users, manage their roles, or remove users with lower
        privileges using the <strong>Microsoft Graph API</strong>.
      </li>
      <li>
        Role assignment options include:
        <strong class="text-gray-900">Manager</strong>,
        <strong class="text-gray-900">Moderator</strong>,
        <strong class="text-gray-900">Admin</strong>.
      </li>
      <li>
        <strong>Administrators</strong> can assign the Manager and Moderator
        roles, and remove users who have lower roles than theirs.
      </li>
      <li>
        <strong>Owners</strong> have full access to the system, including the
        ability to assign or remove any role, including administrators.
      </li>
      <li>
        The web application includes route protection based on roles retrieved
        from the token.
      </li>
    </ul>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
