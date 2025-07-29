<template>
  <div class="flex items-center gap-4">
    <RouterLink
      to="/me"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Me
    </RouterLink>

    <RouterLink
      to="/users"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Users
    </RouterLink>

    <RouterLink
      to="/admin"
      class="text-lg text-gray-800 hover:text-gray-600 transition duration-200 px-4 py-1.5 rounded bg-gray-100 hover:shadow-sm hover:scale-102 transform"
    >
      Admin
    </RouterLink>

    <BaseButton
      text="How to use"
      :icon="['fas', 'lightbulb']"
      :onClick="onHelp"
    />

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

const { isAuthenticated } = storeToRefs(authStore);
const { login, logout } = authStore;

const onHelp = () => {
  console.log("Help");
};
</script>
