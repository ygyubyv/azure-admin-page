<template>
  <div
    class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 flex flex-col gap-5"
  >
    <p class="text-gray-800 text-base break-words">
      <strong>User ID:</strong> {{ id }}
    </p>

    <div class="flex gap-4 flex-wrap">
      <BaseCheckbox role-name="Moderator" v-model="newRoles" />
      <BaseCheckbox role-name="Analyst" v-model="newRoles" />
      <BaseCheckbox role-name="Admin" v-model="newRoles" />
    </div>

    <div class="flex gap-2">
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
import BaseButton from "../Base/BaseButton.vue";
import BaseCheckbox from "../Base/BaseCheckbox.vue";

interface Props {
  id: string;
  roles: string;
}

const { id, roles } = defineProps<Props>();

const targetRolesArray = parseRolesFromString(roles);

const newRoles = ref([...targetRolesArray]);

const hasChanges = computed(() => {
  return JSON.stringify(newRoles.value) !== JSON.stringify(targetRolesArray);
});

const onSubmit = () => {
  if (!hasChanges.value) {
    console.log("No changes detected");
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
