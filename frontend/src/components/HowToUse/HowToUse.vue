<template>
  <div class="max-w-5xl mx-auto py-10 px-4 space-y-8">
    <Introduction />

    <SignIn />

    <PagesOverview />

    <RbacComparison />
  </div>
</template>

<script setup lang="ts">
import Introduction from "./Introduction.vue";
import SignIn from "./SignIn.vue";
import PagesOverview from "./PagesOverview.vue";
import RbacComparison from "./RbacComparison.vue";
</script>
