<template>
  <div
    class="bg-white rounded-lg shadow-sm p-6 border mx-4 border-gray-200 max-w-4xl md:mx-auto my-10"
  >
    <div v-if="!idTokenClaims">
      <BaseSpinner mode="Black-spinner" />
    </div>

    <ClaimsTable v-else :id-token-claims="idTokenClaims" />

    <div class="md:hidden flex flex-col gap-4">
      <MobileLabelsBlock
        v-for="(value, key) in idTokenClaims"
        :claim="key"
        :value="value"
        :description="CLAIM_EXPLANATIONS[key]"
      />
    </div>

    <UserId v-if="idTokenClaims?.sub" :id="idTokenClaims?.sub" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import { CLAIM_EXPLANATIONS } from "@/data/claimExplanations";
import ClaimsTable from "@/components/MeView/ClaimsTable.vue";
import MobileLabelsBlock from "@/components/MeView/MobileLabelsBlock.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import UserId from "@/components/MeView/UserId.vue";

const { setTokenData } = useAuthStore();
const { idTokenClaims } = storeToRefs(useAuthStore());

onMounted(setTokenData);
</script>
