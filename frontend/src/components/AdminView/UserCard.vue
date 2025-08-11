<template>
  <div
    class="bg-white border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 space-y-6"
  >
    <div>
      <h3 class="text-xl font-bold text-gray-800 mb-4">
        {{ $t("user_card.title") }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <InfoItem :label="$t('user_card.labels.id')" :value="user.id" />
        <InfoItem
          :label="$t('user_card.labels.displayName')"
          :value="user.displayName"
        />
        <InfoItem
          :label="$t('user_card.labels.jobTitle')"
          :value="user.jobTitle"
        />
        <InfoItem
          :label="$t('user_card.labels.department')"
          :value="user.department"
        />
        <InfoItem
          v-if="user.createdDateTime"
          :label="$t('user_card.labels.created')"
          :value="normalizeDate(user.createdDateTime)"
        />
        <InfoItem
          :label="$t('user_card.labels.accountEnabled')"
          :value="
            user.accountEnabled ? $t('user_card.yes') : $t('user_card.no')
          "
        />
        <InfoItem
          :label="$t('user_card.labels.syncedFromOnPrem')"
          :value="
            user.onPremisesSyncEnabled
              ? $t('user_card.yes')
              : $t('user_card.no')
          "
        />
        <InfoItem
          :label="$t('user_card.labels.preferredLanguage')"
          :value="user.preferredLanguage"
        />
        <InfoItem
          :label="$t('user_card.labels.roles')"
          :value="user.role || $t('user_card.labels.roleNotProvided')"
        />
      </div>
    </div>

    <div>
      <h4 class="text-md font-semibold text-gray-700 mb-2">
        {{ $t("user_card.rolesSectionTitle") }}
      </h4>
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
        :text="$t('user_card.buttons.submit')"
        :icon="['fas', 'check']"
        size="small"
        :onClick="onSubmit"
      />
      <BaseButton
        :text="$t('user_card.buttons.delete')"
        :icon="['fas', 'trash']"
        size="small"
        :onClick="onDelete"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { normalizeDate } from "@/helpers/normilizeDate";
import { useAdminPanel } from "@/composables/useAdminPanel";
import type { User } from "@/types/User";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseCheckbox from "@/components/Base/BaseCheckbox.vue";
import InfoItem from "@/components/AdminView/InfoItem.vue";

interface Props {
  user: User;
}

const { user } = defineProps<Props>();
const { newRoles, isUser, isOwner, onSubmit, onDelete } = useAdminPanel(user);
</script>
