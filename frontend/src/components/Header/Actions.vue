<template>
  <div class="flex items-center gap-4">
    <RouterLink
      to="/admin"
      class="text-lg mr-3 text-gray-800 hover:text-gray-600 transition duration-200"
    >
      Admin
    </RouterLink>

    <BaseButton
      text="How to use"
      :icon="['fas', 'lightbulb']"
      :onClick="onHelp"
    />

    <BaseButton
      text="Get token"
      :icon="['fas', 'square-binary']"
      :onClick="getMsalToken"
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
const { login, logout, getMsalToken } = authStore;

const onHelp = () => {
  console.log("Help");
};
</script>
