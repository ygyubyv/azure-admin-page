import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import Main from "../views/Main.vue";
import Admin from "@/views/Admin.vue";
import Users from "@/views/Users.vue";
import Me from "@/views/Me.vue";

export const isLoading = ref(false);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/me",
      name: "me",
      component: Me,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true,
      },
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

  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: "main" });
  }

  isLoading.value = false;

  next();
});

export default router;
