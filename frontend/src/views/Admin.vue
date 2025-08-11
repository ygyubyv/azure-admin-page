<template>
  <div class="w-full max-w-3xl mx-auto my-10 space-y-6 px-4">
    <div class="flex gap-2">
      <input
        v-model="searchId"
        type="text"
        :placeholder="$t('user_search.placeholder')"
        class="w-full max-w-xs sm:max-w-full rounded-md border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
      />
      <BaseButton
        :text="$t('user_search.searchButton')"
        size="small"
        :icon="['fas', 'search']"
        @click="searchUser"
      />
    </div>

    <div v-if="!user && !isLoading" class="text-gray-500 text-center py-10">
      {{ $t("user_search.noUserSelected") }}
    </div>

    <div v-if="isLoading" class="text-center py-10">
      <BaseSpinner mode="Black-spinner" />
    </div>

    <UserCard v-if="user" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import type { User } from "@/types/User";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import UserCard from "@/components/AdminView/UserCard.vue";
import { showErrorCodeMessage } from "@/helpers/showErrorCodeMessage";
import { showNotification } from "@/helpers/showNotification";

interface ResponseData {
  user: User;
}

const { bearerToken } = storeToRefs(useAuthStore());

const searchId = ref("");
const user = ref<User | null>(null);
const isLoading = ref(false);

const searchUser = async () => {
  user.value = null;

  if (!searchId.value) {
    return;
  }

  getUser(searchId.value);

  searchId.value = "";
};

const getUser = async (id: string) => {
  try {
    isLoading.value = true;
    const response = await fetch(
      `https://azure-admin-page.azurewebsites.net/api/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken.value}`,
        },
      }
    );

    if (!response.ok) {
      showErrorCodeMessage(response.status);
      return;
    }

    const data = (await response.json()) as ResponseData;
    user.value = data.user;
  } catch (error) {
    console.error("Unexpected client-side error:", error);
    showNotification("error", "Unexpected error. Please check the console.");
  } finally {
    isLoading.value = false;
  }
};
</script>
