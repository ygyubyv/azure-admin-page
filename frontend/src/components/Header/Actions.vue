<template>
  <div class="flex items-center gap-4">
    <RouterLink
      :to="{ name: 'me' }"
      v-if="isAuthenticated"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Me
    </RouterLink>

    <RouterLink
      :to="{ name: 'users' }"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Users
    </RouterLink>

    <RouterLink
      :to="{ name: 'admin' }"
      v-if="isAuthenticated"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Admin
    </RouterLink>

    <RouterLink :to="{ name: 'howToUse' }">
      <BaseButton text="How to use" :icon="['fas', 'lightbulb']" />
    </RouterLink>

    <BaseButton
      text="Login"
      :icon="['fas', 'right-to-bracket']"
      :onClick="login"
      v-if="!isAuthenticated"
    />

    <BaseButton
      text="Logout"
      :icon="['fas', 'right-to-bracket']"
      :onClick="logout"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import BaseButton from "../Base/BaseButton.vue";

const authStore = useAuthStore();

const { login, logout } = authStore;
const { isAuthenticated } = storeToRefs(authStore);
</script>
