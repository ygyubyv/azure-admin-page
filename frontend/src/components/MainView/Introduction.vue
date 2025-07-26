<template>
  <BaseSection>
    <div class="text-gray-800 space-y-3">
      <h2 class="text-2xl font-bold text-gray-900">Azure Admin Page</h2>
      <p class="text-lg leading-relaxed">
        Веб-застосунок для керування ролями авторизованих користувачів
        використовуючи Microsoft Graph(v1) або Mongo DB(v2).
      </p>
      <p class="text-lg leading-relaxed">
        Застосунок дозволяє відображати список авторизованих користувачів,
        контролювати їхні ролі, видаляти користувачів. Основна увага приділена
        безпеці, масштабованості та чіткому розмежуванню прав доступу.
      </p>
    </div>
  </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
