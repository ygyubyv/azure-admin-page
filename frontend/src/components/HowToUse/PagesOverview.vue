<template>
  <BaseSection>
    <h2 class="text-xl font-semibold text-gray-900 mb-4">
      {{ $t("how_to_use.pages_overview.title") }}
    </h2>

    <PageOverview
      :title="$t('how_to_use.pages_overview.page_1_title')"
      :text="$t('how_to_use.pages_overview.page_1_text')"
    />
    <PageOverview
      :title="$t('how_to_use.pages_overview.page_2_title')"
      :text="$t('how_to_use.pages_overview.page_2_text')"
    />
    <PageOverview
      :title="$t('how_to_use.pages_overview.page_3_title')"
      :text="$t('how_to_use.pages_overview.page_3_text')"
    />
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "@/components/Base/BaseSection.vue";
import PageOverview from "./PageOverview.vue";
</script>
