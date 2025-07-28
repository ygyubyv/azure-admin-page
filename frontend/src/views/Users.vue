<template>
  <div class="w-full max-w-3xl mx-auto my-10 space-y-6 px-4">
    <h1 class="text-2xl font-bold text-gray-800">Latest Registered Users</h1>

    <div v-if="isLoading" class="py-20 text-center">
      <BaseSpinner mode="Black-spinner" />
    </div>

    <template v-else-if="users.length">
      <UserCard v-for="user in users" :user="user" :key="user.id" />
    </template>

    <div v-else class="text-center text-gray-500 py-10">No users found.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { showNotification } from "@/helpers/showNotification";
import type { UserOverall } from "@/types/UserOverall";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import UserCard from "@/components/UsersView/UserCard.vue";

interface ResponseData {
  users: UserOverall[];
}

const users = ref<UserOverall[]>([]);
const isLoading = ref(false);

const fetchUsers = async () => {
  try {
    isLoading.value = true;
    const response = await fetch("http://localhost:7071/api/users");

    if (!response.ok) {
      showNotification("error", "Failed to fetch users");
      return;
    }

    const data = (await response.json()) as ResponseData;
    users.value = data.users;
  } catch (error) {
    console.error("Unexpected error:", error);
    showNotification("error", "Unexpected error. Check console.");
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUsers);
</script>
