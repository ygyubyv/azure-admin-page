<template>
  <BaseSection>
    <h2 class="text-2xl font-semibold text-gray-800">Основний функціонал</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>
        Перегляд авторизованих користувачів, їхніх ролей та видалення
        користувачів за допомогою
        <strong>Microsoft Graph API</strong>.
      </li>
      <li>
        Призначення ролей:
        <strong class="text-gray-900">Manager</strong>,
        <strong class="text-gray-900">Moderator</strong>,
        <strong class="text-gray-900">Admin</strong>.
      </li>
      <li>
        <strong>Адміністратори</strong> мають можливість призначати Manager та
        Moderator, видаляти користувачів що не є адміністраторами
      </li>
      <li>
        <strong>Власники (owner)</strong> мають повний доступ до системи,
        зокрема можливість призначення та видалення адміністраторів.
      </li>
      <li>
        Веб додаток передбачає захищення маршрутів на основі ролей що приходять
        з токену
      </li>
    </ul>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../Base/BaseSection.vue";
</script>
