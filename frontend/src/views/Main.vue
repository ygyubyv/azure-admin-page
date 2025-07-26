<template>
  <div class="max-w-5xl mx-auto p-6 space-y-12 mb-8">
    <section class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div class="text-gray-800 space-y-3">
        <h2 class="text-xl font-bold text-gray-900">Azure Admin Page</h2>
        <p class="text-base leading-relaxed">
          Веб-застосунок для керування ролями авторизованих користувачів
          використовуючи Microsoft Graph(v1) або Mongo DB(v2).
        </p>
        <p class="text-base leading-relaxed">
          Застосунок дозволяє відображати список авторизованих користувачів,
          контролювати їхні ролі, видаляти користувачів. Основна увага приділена
          безпеці, масштабованості та чіткому розмежуванню прав доступу.
        </p>
      </div>
    </section>

    <section
      class="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 text-gray-800 text-lg leading-relaxed space-y-4"
    >
      <h2 class="text-2xl font-semibold text-gray-800">Основний функціонал</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>
          Перегляд авторизованих користувачів та їхніх ролей за допомогою
          <strong>Microsoft Graph API</strong>.
        </li>
        <li>
          Призначення ролей:
          <strong class="text-gray-900">user</strong>,
          <strong class="text-gray-900">admin</strong>,
          <strong class="text-gray-900">owner</strong>.
        </li>
        <li>
          <strong>Адміністратори</strong> мають можливість керувати правами
          звичайних користувачів.
        </li>
        <li>
          <strong>Власники (owner)</strong> мають повний доступ до системи,
          зокрема можливість призначення адміністраторів.
        </li>
        <li>
          Захищений доступ до сторінки
          <code class="bg-gray-100 px-1 rounded text-sm">/admin</code> на основі
          <abbr title="JSON Web Token">JWT</abbr>-токенів.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">
        Використані технології
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="flex items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="w-12 h-12 object-contain"
          />
          <span class="text-gray-900 font-semibold text-lg">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import vueIcon from "@/assets/images/tech/vue.svg";
import tsIcon from "@/assets/images/tech/typescript.png";
import tailwindIcon from "@/assets/images/tech/tailwindcss.png";
import azureIcon from "@/assets/images/tech/azure-ad-b2c.png";
import graphApiIcon from "@/assets/images/tech/microsoft-graph.png";
import azureFuncIcon from "@/assets/images/tech/azure-functions.png";
import nodeJS from "@/assets/images/tech/node-js.png";
import mongoDB from "@/assets/images/tech/mongo-db.svg";

const technologies = [
  { name: "Vue 3", icon: vueIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Azure AD B2C", icon: azureIcon },
  { name: "Azure Functions", icon: azureFuncIcon },
  { name: "Microsoft Graph API", icon: graphApiIcon },
  { name: "Node JS", icon: nodeJS },
  { name: "Mongo DB", icon: mongoDB },
];
</script>
