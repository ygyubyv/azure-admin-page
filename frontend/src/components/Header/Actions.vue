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
      text="Login"
      :icon="['fas', 'right-to-bracket']"
      :onClick="onLogin"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../Base/BaseButton.vue";
const onHelp = () => {
  console.log("Help");
};

const onLogin = () => {
  console.log("Login");
};
</script>
