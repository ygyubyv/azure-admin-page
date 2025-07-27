<template>
  <div class="flex flex-col gap-8">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :roles="user.extension_AzureAdminPageRole"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@/types/User";
import UserCard from "./UserCard.vue";

const users = ref<User[]>([
  {
    id: "150026a8-4368-472e-96de-7ba6ba77b3b5",
    extension_AzureAdminPageRole: "user",
  },
  {
    id: "96c40000-7780-4f2c-aaf6-5323e358b3ad",
    extension_AzureAdminPageRole: "user, owner",
  },
  {
    id: "5072051a-8c7a-4117-b4bb-79a75c94257e",
    extension_AzureAdminPageRole: "user, admin",
  },
]);
</script>
