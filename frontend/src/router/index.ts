import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import Main from "../views/Main.vue";
import { storeToRefs } from "pinia";

export const isLoading = ref(false);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const { initAuth } = authStore;
  const { isAuthenticated, isInitialized } = storeToRefs(authStore);

  isLoading.value = true;

  if (!isInitialized.value) {
    await initAuth();
  }

  if (to.meta.requiresAuth && isAuthenticated.value) {
    return;
  }

  isLoading.value = false;

  next();
});

export default router;
