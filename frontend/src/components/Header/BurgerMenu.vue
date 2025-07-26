<template>
  <div class="relative z-50">
    <button
      @click="toggleMenu"
      class="p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition duration-200 text-black"
    >
      <font-awesome-icon
        :icon="menuOpen ? ['fas', 'xmark'] : ['fas', 'bars']"
        class="text-xl"
      />
    </button>

    <transition name="fade-scale">
      <div
        v-if="menuOpen"
        class="absolute right-0 mt-4 w-60 bg-black/90 text-white rounded-xl shadow-lg p-4 space-y-3"
      >
        <ul class="space-y-2">
          <router-link
            @click="toggleMenu"
            :to="{ name: 'main' }"
            class="flex items-center justify-between gap-2 hover:bg-white/10 px-3 py-2 rounded-md transition"
          >
            <span>Admin</span>
            <font-awesome-icon :icon="['fas', 'user-tie']" />
          </router-link>

          <BaseBurgerButton :icon="['fas', 'lightbulb']" text="Help" />

          <BaseBurgerButton
            :icon="['fas', 'right-to-bracket']"
            text="Login"
            v-if="!isAuthenticated"
          />

          <BaseBurgerButton
            :icon="['fas', 'right-to-bracket']"
            text="Logout"
            v-else
          />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isAuthenticated } from "@/data/auth";
import BaseBurgerButton from "../Base/BaseBurgerButton.vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
