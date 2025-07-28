<template>
  <div
    class="bg-white border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 space-y-6"
  >
    <h3 class="text-xl font-bold text-gray-800 mb-4">User Details</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
      <InfoItem label="ID" :value="user.id" />
      <InfoItem label="Display Name" :value="user.displayName" />
      <InfoItem
        v-if="user.createdDateTime"
        label="Created"
        :value="normalizeDate(user.createdDateTime)"
      />
      <InfoItem label="Role" :value="user.role || 'Not provided'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { normalizeDate } from "@/helpers/normilizeDate";
import InfoItem from "@/components/AdminView/InfoItem.vue";
import type { UserOverall } from "@/types/UserOverall";

interface Props {
  user: UserOverall;
}

defineProps<Props>();
</script>
