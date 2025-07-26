<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <RouterLink
          to="/"
          class="text-lg font-semibold text-gray-800 hover:text-gray-600 transition duration-200"
        >
          Головна
        </RouterLink>

        <div class="flex items-center gap-4">
          <RouterLink
            to="/admin"
            class="text-lg mr-3 text-gray-800 hover:text-gray-600 transition duration-200"
          >
            Admin
          </RouterLink>

          <button
            @click="onHelp"
            class="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Help"
          >
            <FontAwesomeIcon :icon="faLightbulb" />
          </button>

          <BaseButton
            text="Login"
            :icon="faRightToBracket"
            :onClick="onLogin"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import BaseButton from "@/components/Base/Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faRightToBracket,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const onLogin = () => {
  console.log("Login clicked");
};

const onHelp = () => {
  console.log("Help clicked");
};
</script>
