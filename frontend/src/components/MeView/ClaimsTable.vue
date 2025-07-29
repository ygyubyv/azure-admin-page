<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">ID Token Claims</h2>

    <table
      class="hidden md:table w-full text-left border border-gray-300 rounded overflow-hidden"
    >
      <thead class="bg-gray-100 text-sm text-gray-600">
        <tr>
          <th class="px-4 py-2 border-b">Claim</th>
          <th class="px-4 py-2 border-b">Value</th>
          <th class="px-4 py-2 border-b">Description</th>
        </tr>
      </thead>
      <tbody>
        <Claim
          v-for="(value, key) in idTokenClaims"
          :claim="key"
          :value="value"
          :description="CLAIM_EXPLANATIONS[key]"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { CLAIM_EXPLANATIONS } from "@/data/claimExplanations";
import type { IdTokenClaimsExtended } from "@/types/IdTokenClaims";
import Claim from "./Claim.vue";

interface Props {
  idTokenClaims: IdTokenClaimsExtended;
}

defineProps<Props>();
</script>
