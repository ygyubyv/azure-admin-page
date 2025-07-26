<template>
  <BaseSection>
    <h2 class="text-lg md:text-2xl font-bold text-gray-900">
      Azure Admin Page
    </h2>

    <p class="text-[16px] md:text-base">
      A web application for managing roles of authorized users using Microsoft
      Graph (v1) or MongoDB (v2).
    </p>

    <p class="text-[16px] md:text-base">
      The application allows you to view a list of authorized users, manage
      their roles, and remove users. It focuses on security, scalability, and
      clear access control separation.
    </p>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
