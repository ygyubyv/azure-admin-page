<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-2">1. Sign In</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      Click the “Sign In” button in the header and authenticate with your
      Microsoft account.
    </p>

    <div class="bg-gray-50 border-l-2 border-gray-800 p-4 mb-8 rounded">
      <p class="text-gray-800 font-semibold mb-2">
        Administrator Demo Credentials
      </p>
      <p class="text-gray-700 mb-1">
        <span class="font-semibold">Email:</span> {{ email }}
      </p>
      <p class="text-gray-700">
        <span class="font-semibold">Password:</span> {{ password }}
      </p>
    </div>

    <ImportantNote />
  </BaseSection>
</template>

<script setup lang="ts">
import ImportantNote from "./ImportantNote.vue";
import BaseSection from "@/components/Base/BaseSection.vue";

import { demoUserCredentials } from "@/config";

const { email, password } = demoUserCredentials;
</script>
