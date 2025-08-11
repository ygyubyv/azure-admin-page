<template>
  <BaseSection>
    <h2 class="text-lg md:text-2xl font-bold text-gray-900">
      {{ $t("main_view.functionality_section.title") }}
    </h2>

    <ul class="list-disc list-inside space-y-2 text-[16px] md:text-base">
      <li v-html="$t('main_view.functionality_section.item1')"></li>
      <li v-html="$t('main_view.functionality_section.item2')"></li>
      <li v-html="$t('main_view.functionality_section.item3')"></li>
      <li v-html="$t('main_view.functionality_section.item4')"></li>
      <li v-html="$t('main_view.functionality_section.item5')"></li>
    </ul>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
