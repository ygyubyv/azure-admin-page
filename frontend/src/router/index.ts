import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";

import Main from "../views/Main.vue";
import Admin from "@/views/Admin.vue";
import Users from "@/views/Users.vue";
import Me from "@/views/Me.vue";
import HowToUse from "@/views/HowToUse.vue";

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
      path: "/how-to-use",
      name: "howToUse",
      component: HowToUse,
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
        requiresAdmin: true,
      },
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  try {
    const authStore = useAuthStore();
    const { initAuth, setTokenData } = authStore;
    const { isAuthenticated, isInitialized, idTokenClaims, isAdmin, isOwner } =
      storeToRefs(authStore);

    isLoading.value = true;

    if (!isInitialized.value) {
      await initAuth();
    }

    if (to.meta.requiresAuth && !isAuthenticated.value) {
      return next({ name: "main" });
    }

    if (to.meta.requiresAdmin && !idTokenClaims.value) {
      await setTokenData();

      if (!isAdmin.value && !isOwner.value) {
        return next({ name: "main" });
      }
    }

    next();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});

export default router;
