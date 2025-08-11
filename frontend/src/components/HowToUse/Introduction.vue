<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      {{ $t("how_to_use.introduction.title") }}
    </h2>
    <ol
      class="list-decimal list-inside space-y-2 text-[16px] md:text-base text-gray-700 leading-relaxed"
    >
      <li>{{ $t("how_to_use.introduction.step1") }}</li>
      <li>{{ $t("how_to_use.introduction.step2") }}</li>
      <li>{{ $t("how_to_use.introduction.step3") }}</li>
      <li>{{ $t("how_to_use.introduction.step4") }}</li>
    </ol>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
