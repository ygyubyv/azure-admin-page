<template>
  <div
    class="bg-white border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 space-y-6"
  >
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-4">User Details</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <InfoItem label="ID" :value="user.id" />
        <InfoItem label="Display Name" :value="user.displayName" />
        <InfoItem label="Job Title" :value="user.jobTitle" />
        <InfoItem label="Department" :value="user.department" />
        <InfoItem
          v-if="user.createdDateTime"
          label="Created"
          :value="normalizeDate(user.createdDateTime)"
        />
        <InfoItem
          label="Account Enabled"
          :value="user.accountEnabled ? 'Yes' : 'No'"
        />
        <InfoItem
          label="Synced from On-Prem?"
          :value="user.onPremisesSyncEnabled ? 'Yes' : 'No'"
        />
        <InfoItem label="Preferred Language" :value="user.preferredLanguage" />
        <InfoItem label="Roles" :value="user.role" />
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold text-gray-700 mb-2">Roles</h4>
      <div class="flex gap-4 flex-wrap">
        <label
          class="flex items-center gap-2 text-gray-700 text-base cursor-not-allowed"
        >
          <input
            type="checkbox"
            class="w-5 h-5 cursor-not-allowed"
            disabled
            :checked="isUser"
          />
          User
        </label>
        <BaseCheckbox role-name="Moderator" v-model="newRoles" />
        <BaseCheckbox role-name="Analyst" v-model="newRoles" />
        <BaseCheckbox role-name="Admin" v-model="newRoles" />
        <label
          class="flex items-center gap-2 text-gray-700 text-base cursor-not-allowed"
        >
          <input
            type="checkbox"
            class="w-5 h-5 cursor-not-allowed"
            disabled
            :checked="isOwner"
          />
          Owner
        </label>
      </div>
    </div>

    <div class="flex gap-2 mt-4">
      <BaseButton
        text="Submit"
        :icon="['fas', 'check']"
        size="small"
        :onClick="onSubmit"
      />
      <BaseButton
        text="Delete"
        :icon="['fas', 'trash']"
        size="small"
        :onClick="onDelete"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { parseRolesFromString } from "@/helpers/roleConverters";
import { showNotification } from "@/helpers/showNotification";
import { normalizeDate } from "@/helpers/normilizeDate";
import type { User } from "@/types/User";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import InfoItem from "@/components/AdminView/InfoItem.vue";

interface Props {
  user: User;
}

const { user } = defineProps<Props>();

const targetRolesArray = parseRolesFromString(user.role);

const newRoles = ref([...targetRolesArray]);

const isUser = computed(() => {
  return user.role.includes("user");
});

const isOwner = computed(() => {
  return user.role.includes("owner");
});

const hasChanges = computed(() => {
  return JSON.stringify(newRoles.value) !== JSON.stringify(targetRolesArray);
});

const onSubmit = () => {
  if (!hasChanges.value) {
    showNotification("warning", "No changes detected");
    return;
  }

  try {
    console.log("On submit");
  } catch (error) {
    console.error(error);
  }
};

const onDelete = () => {
  console.log("Delete");
};
</script>
