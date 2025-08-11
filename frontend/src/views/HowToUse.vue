<template>
  <div class="max-w-5xl mx-auto py-10 px-4 space-y-8">
    <Introduction />

    <SignIn />

    <PagesOverview />

    <RbacComparison />
  </div>
</template>

<script setup lang="ts">
import Introduction from "@/components/HowToUseView/Introduction.vue";
import SignIn from "@/components/HowToUseView/SignIn.vue";
import PagesOverview from "@/components/HowToUseView/PagesOverview.vue";
import RbacComparison from "@/components/HowToUseView/RbacComparison.vue";
</script>
